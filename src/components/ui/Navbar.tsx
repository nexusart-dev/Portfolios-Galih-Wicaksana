'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { navItems, profile } from '@/data'
import { Close, Menu } from '@/components/icons'
import { cn } from '@/lib/utils'
import { NexusIcon } from '@/components/icons'
import ThemeToggle from './ThemeToggle'

function useActiveSection(ids: string[]) {
    const [active, setActive] = useState(ids[0])

    useEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id)
                }
            },
            { rootMargin: '-45% 0px -50% 0px' },
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return active
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const active = useActiveSection(navItems.map((item) => item.href.slice(1)))

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    return (
        <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
            <nav aria-label="Primary" className="pointer-events-auto relative">
                <div className="flex h-12 items-center gap-1 rounded-full border border-line bg-surface/70 py-1.5 pl-4 pr-1.5 shadow-soft backdrop-blur-xl">
                    <a
                        href="#home"
                        className="mr-2 flex items-center gap-2 text-sm font-medium tracking-tight"
                        aria-label={`${profile.brand} — back to top`}
                    >
                        <NexusIcon className="h-8 w-8" />

                        <span>
                            Nexus<span className="text-accent">.Art</span>
                        </span>
                    </a>

                    <ul className="hidden items-center md:flex">
                        {navItems.map((item) => {
                            const isActive = active === item.href.slice(1)
                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        aria-current={isActive ? 'true' : undefined}
                                        className={cn(
                                            'relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200',
                                            isActive ? 'text-fg' : 'text-fg-muted hover:text-fg',
                                        )}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="absolute inset-0 -z-10 rounded-full bg-subtle"
                                                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                                            />
                                        )}
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <span className="mx-1 hidden h-5 w-px bg-line md:block" aria-hidden="true" />

                    <ThemeToggle />

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        className="grid h-9 w-9 place-items-center rounded-full text-fg-muted transition-colors hover:bg-subtle hover:text-fg md:hidden"
                    >
                        {open ? <Close size={18} /> : <Menu size={18} />}
                    </button>
                </div>

                {open && (
                    <div
                        id="mobile-menu"
                        className="menu-in absolute left-1/2 top-14 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-line bg-surface p-2 shadow-soft backdrop-blur-xl md:hidden"
                    >
                        <ul>
                            {navItems.map((item) => {
                                const isActive = active === item.href.slice(1)
                                return (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            aria-current={isActive ? 'true' : undefined}
                                            className={cn(
                                                'flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors',
                                                isActive
                                                    ? 'bg-subtle text-fg'
                                                    : 'text-fg-muted hover:bg-subtle hover:text-fg',
                                            )}
                                        >
                                            {item.label}
                                            {isActive && (
                                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                            )}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}
