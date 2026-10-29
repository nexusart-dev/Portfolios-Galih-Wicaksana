import { ArrowUp } from 'lucide-react'
import BrandMark from '@/components/ui/BrandMark'
import { NexusIcon } from '@/components/icons'
import { profile } from '@/data'

export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
                <div className="flex items-center gap-3 text-sm text-fg-muted">
                    <NexusIcon className="h-8 w-8" />
                    <p>
                        &copy; {new Date().getFullYear()} Designed by{' '}
                        <span className="text-fg">{profile.brand}</span>
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                    {profile.socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fg-muted transition-colors hover:text-fg"
                        >
                            {social.label}
                        </a>
                    ))}
                    <a
                        href="#home"
                        className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
