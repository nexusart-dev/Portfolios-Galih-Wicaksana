'use client'

import { useState } from 'react'
import { SendHorizontal } from 'lucide-react'
import { Mail, MapPin, Phone } from '@/components/icons'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import { profile } from '@/data'
import { cn } from '@/lib/utils'

type Status = { type: 'idle' | 'success' | 'error'; message: string }

const fieldClass =
    'w-full rounded-xl border border-line-strong bg-surface/60 px-4 py-3 text-sm text-fg ' +
    'placeholder:text-fg-faint transition-[border-color,box-shadow] duration-200 ' +
    'focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent-soft disabled:opacity-60'

const contactRows = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: profile.location, href: undefined },
]

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<Status>({ type: 'idle', message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus({ type: 'idle', message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.error || 'Failed to send message')

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I will contact you soon.',
            })
            setFormData({ name: '', email: '', message: '' })
        } catch {
            setStatus({
                type: 'error',
                message: `Gagal mengirim pesan. Silakan coba lagi atau email langsung ke ${profile.email}`,
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <Section
            id="contact"
            title="Contact"
            description="Always interested in new opportunities and interesting projects."
        >
            <div className="grid gap-12 xl:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]">
                <div>
                    <h3 className="text-xl font-medium tracking-tight">Let&apos;s work together</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                        Whether you have a question or just want to say hi, feel free to reach
                        out.
                    </p>

                    <ul className="mt-8 space-y-4">
                        {contactRows.map(({ icon: Icon, label, href }) => (
                            <li key={label} className="flex items-center gap-3.5">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong text-accent">
                                    <Icon size={17} />
                                </span>
                                {href ? (
                                    <a
                                        href={href}
                                        className="min-w-0 text-sm [overflow-wrap:anywhere] transition-colors hover:text-accent"
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <span className="min-w-0 text-sm">{label}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={fieldClass}
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={fieldClass}
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className={cn(fieldClass, 'resize-none')}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button type="submit" size="lg" disabled={isLoading}>
                            <SendHorizontal size={17} />
                            {isLoading ? 'Sending…' : 'Send message'}
                        </Button>

                        {status.type !== 'idle' && (
                            <p
                                role="status"
                                className={cn(
                                    'min-w-0 flex-1 rounded-xl border px-4 py-3 text-sm',
                                    status.type === 'success'
                                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                                        : 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300',
                                )}
                            >
                                {status.message}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </Section>
    )
}
