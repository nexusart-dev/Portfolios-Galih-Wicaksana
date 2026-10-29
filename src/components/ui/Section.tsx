import type { ReactNode } from 'react'

type SectionProps = {
    id: string
    title: string
    description?: string
    children: ReactNode
}

/**
 * Kerangka seragam untuk semua section: rel judul di kiri (sticky di desktop)
 * dan konten di kanan. Satu struktur = tata letak yang konsisten.
 */
export default function Section({ id, title, description, children }: SectionProps) {
    return (
        <section id={id} className="border-t border-line">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
                <header className="lg:sticky lg:top-28 lg:self-start">
                    <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
                    {description && (
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">
                            {description}
                        </p>
                    )}
                </header>
                <div className="min-w-0">{children}</div>
            </div>
        </section>
    )
}
