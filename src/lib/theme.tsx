'use client'

import { useCallback, useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const listeners = new Set<() => void>()

/**
 * Script kecil yang dijalankan sebelum paint (lihat layout.tsx) supaya
 * tidak ada kilatan tema yang salah saat halaman dimuat.
 */
export const themeInitScript = `(function(){var d=document.documentElement,t=null;try{t=localStorage.getItem('${STORAGE_KEY}')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.classList.toggle('dark',t==='dark');d.setAttribute('data-theme',t);d.style.colorScheme=t})();`

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function apply(theme: Theme, persist: boolean) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* penyimpanan tidak tersedia — abaikan */
    }
  }
  listeners.forEach((listener) => listener())
}

function subscribe(onChange: () => void) {
  listeners.add(onChange)

  // Selama pengguna belum memilih manual, ikuti pengaturan sistem.
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const onSystemChange = () => {
    if (!readStored()) apply(media.matches ? 'dark' : 'light', false)
  }
  media.addEventListener('change', onSystemChange)

  return () => {
    listeners.delete(onChange)
    media.removeEventListener('change', onSystemChange)
  }
}

const getSnapshot = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

const getServerSnapshot = (): Theme => 'light'

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const setTheme = useCallback((next: Theme) => apply(next, true), [])
  const toggleTheme = useCallback(
    () => apply(getSnapshot() === 'dark' ? 'light' : 'dark', true),
    [],
  )

  return { theme, setTheme, toggleTheme }
}
