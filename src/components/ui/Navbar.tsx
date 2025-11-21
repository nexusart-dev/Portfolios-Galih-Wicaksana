'use client'

import { useState } from 'react'
import { navItems } from '@/data'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import { Menu, Close, VerifyIcon } from '@/components/icons';
import Boxes from '../atoms/Boxes'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-md dark:bg-gray-900/15">
        <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center space-x-6 ml-2">
                    <div className="flex-shrink-0">
                        <Boxes />
                    </div>

                    <div>
                        <div className="flex items-center gap-1">
                            <span className="text-xl text-purple-700 font-bold">Nexus.Art</span>
                            <VerifyIcon className="text-blue-600" size={18} />
                        </div>
                        <p className="text-[10px] text-black dark:text-gray-300 font-normal leading-none">
                        Next Use Art
                        </p>
                    </div>
                </div>
            <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-purple-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                    {item.label}
                </a>
                ))}
                <ThemeToggle />
            </div>

            <div className="flex md:hidden items-center space-x-2">
                <ThemeToggle />
                <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 px-0"
                >
                {isOpen ? <Close className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
            </div>
            </div>

            {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-purple-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                    >
                    {item.label}
                    </a>
                ))}
                </div>
            </div>
            )}
        </div>
        </nav>
    )
}