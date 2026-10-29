'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const next = theme === 'dark' ? 'light' : 'dark'

    // Kedua ikon selalu dirender; CSS (`.theme-sun` / `.theme-moon`) yang memilih mana yang tampil,
    // sehingga ikon benar sejak paint pertama tanpa menunggu hydration.
    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${next} mode`}
            title={`Switch to ${next} mode`}
            className="relative grid h-9 w-9 place-items-center rounded-full text-fg-muted transition-colors duration-200 hover:bg-subtle hover:text-fg"
        >
            <Sun
                aria-hidden="true"
                className="theme-sun absolute h-[18px] w-[18px]"
            />
            <Moon
                aria-hidden="true"
                className="theme-moon absolute h-[18px] w-[18px]"
            />
        </button>
    )
}
