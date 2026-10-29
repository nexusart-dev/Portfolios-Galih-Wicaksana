import { ArrowDown } from 'lucide-react'
import { Github, Instagram, Linkedin } from '@/components/icons'
import Button from '@/components/ui/Button'
import Orbit from '@/components/ui/Orbit'
import { profile } from '@/data'

const socialIcons = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Instagram: Instagram,
} as const

const [firstName, ...restName] = profile.name.split(' ')

export default function Hero() {
    return (
        <section id="home" className="relative isolate overflow-hidden">
            <div className="mx-auto grid min-h-svh w-full max-w-6xl items-center gap-12 px-6 pb-28 pt-32 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                <div>
                    <h1
                        className="rise text-[clamp(3rem,8.6vw,6.25rem)] font-light leading-[1.02] tracking-[-0.045em]"
                        style={{ '--i': 1 } as React.CSSProperties}
                    >
                        <span className="block">{firstName}</span>
                        <span className="block">{restName.join(' ')}</span>
                    </h1>

                    <p
                        className="rise mt-6 text-lg font-normal text-fg md:text-xl"
                        style={{ '--i': 2 } as React.CSSProperties}
                    >
                        {profile.role}
                    </p>

                    <p
                        className="rise mt-4 max-w-[34rem] text-base leading-relaxed text-fg-muted md:text-[17px]"
                        style={{ '--i': 3 } as React.CSSProperties}
                    >
                        {profile.intro}
                    </p>

                    <div
                        className="rise mt-10 flex flex-wrap items-center gap-3"
                        style={{ '--i': 4 } as React.CSSProperties}
                    >
                        <Button href="#contact" size="lg">
                            Get in touch
                        </Button>
                        <Button href="#projects" variant="secondary" size="lg">
                            View projects
                        </Button>
                    </div>

                    <ul
                        className="rise mt-10 flex items-center gap-2"
                        style={{ '--i': 5 } as React.CSSProperties}
                    >
                        {profile.socials.map((social) => {
                            const Icon = socialIcons[social.label]
                            return (
                                <li key={social.label}>
                                    <Button
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="secondary"
                                        size="icon"
                                        aria-label={social.label}
                                        title={social.label}
                                    >
                                        <Icon size={18} />
                                    </Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div
                    className="rise mx-auto w-[min(21rem,84vw)] lg:w-full"
                    style={{ '--i': 3 } as React.CSSProperties}
                >
                    <Orbit />
                </div>
            </div>

            <a
                href="#about"
                aria-label="Scroll to About"
                className="absolute bottom-6 left-1/2 hidden h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg md:grid"
            >
                <ArrowDown size={16} />
            </a>
        </section>
    )
}
