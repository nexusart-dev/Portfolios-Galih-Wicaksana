'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { profile } from '@/data'

type Planet = {
    name: string
    note: string
    logo: string
    d: number
    size: number
    dur: number
    angle: number
    moon?: boolean
}

const planets: Planet[] = [
    { name: 'Salesforce', note: 'CRM platform I build on', logo: '/tools/salesforce.png', d: 28, size: 26, dur: 18, angle: 20 },
    { name: 'React', note: 'Component-driven UI', logo: '/tools/react.png', d: 43, size: 30, dur: 26, angle: 140, moon: true },
    { name: 'Next.js', note: 'Full-stack React framework', logo: '/tools/nextjs.png', d: 58, size: 28, dur: 36, angle: 260 },
    { name: 'TypeScript', note: 'Typed JavaScript, fewer bugs', logo: '/tools/typescript.png', d: 73, size: 30, dur: 48, angle: 75 },
    { name: 'Tailwind', note: 'Utility-first styling', logo: '/tools/tailwind.png', d: 88, size: 26, dur: 64, angle: 200 },
]

const SUN = -1
const planetGlow = 'shadow-[0_0_14px_color-mix(in_oklab,var(--accent)_45%,transparent)]'

export default function Orbit({ className }: { className?: string }) {
    const [hover, setHover] = useState<number | null>(null)
    const [pinned, setPinned] = useState<number | null>(null)
    const tiltRef = useRef<HTMLDivElement>(null)
    const frame = useRef(0)

    const active = hover ?? pinned

    const setTilt = (x: number, y: number) => {
        cancelAnimationFrame(frame.current)
        frame.current = requestAnimationFrame(() => {
            tiltRef.current?.style.setProperty('--tx', x.toFixed(3))
            tiltRef.current?.style.setProperty('--ty', y.toFixed(3))
        })
    }

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        setTilt(((e.clientX - r.left) / r.width - 0.5) * 2, ((e.clientY - r.top) / r.height - 0.5) * 2)
    }

    const hoverProps = (id: number) => ({
        onPointerEnter: (e: React.PointerEvent) => e.pointerType === 'mouse' && setHover(id),
        onPointerLeave: () => setHover(null),
        onFocus: () => setHover(id),
        onBlur: () => setHover(null),
        onClick: (e: React.MouseEvent) => {
            e.stopPropagation()
            setPinned((p) => (p === id ? null : id))
        },
    })

    const label =
        active === null ? null : active === SUN ? (
            <>
                <b className="font-medium text-fg">{profile.name}</b>
                <span className="text-fg-muted"> · {profile.role}</span>
            </>
        ) : (
            <>
                <b className="font-medium text-fg">{planets[active].name}</b>
                <span className="text-fg-muted"> · {planets[active].note}</span>
            </>
        )

    return (
        <div
            role="group"
            aria-label="Solar system of my tech stack"
            className={`relative aspect-square w-full ${className ?? ''}`}
            onPointerMove={onPointerMove}
            onPointerLeave={() => setTilt(0, 0)}
            onClick={() => setPinned(null)}
        >
            <div ref={tiltRef} className="orbit-tilt absolute inset-0">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
                    <div className="absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(to_right,transparent,var(--line-strong),transparent)]" />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-[linear-gradient(to_bottom,transparent,var(--line-strong),transparent)]" />
                    <div className="orbit-ticks orbit-ccw-1 absolute inset-0 rounded-full" />
                </div>

                {planets.map((p, i) => (
                    <div
                        key={p.name}
                        className="sys-ring pointer-events-none"
                        data-active={active === i}
                        style={
                            {
                                inset: `${(100 - p.d) / 2}%`,
                                '--a': `${p.angle}deg`,
                                '--dur': `${p.dur}s`,
                                '--play': active === i ? 'paused' : 'running',
                            } as React.CSSProperties
                        }
                    >
                        <button
                            type="button"
                            aria-label={`${p.name} — ${p.note}`}
                            aria-pressed={pinned === i}
                            {...hoverProps(i)}
                            className="pointer-events-auto absolute left-1/2 top-0 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full"
                        >
                            <span className="sys-upright block">
                                <span
                                    className={`relative grid place-items-center rounded-full bg-white ring-1 ring-black/5 transition-transform duration-300 ${planetGlow} ${
                                        active === i ? 'scale-[1.35]' : ''
                                    }`}
                                    style={{ width: p.size, height: p.size }}
                                >
                                    <Image
                                        src={p.logo}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="h-[62%] w-[62%] object-contain"
                                    />
                                    {p.moon && (
                                        <span aria-hidden="true" className="sys-moon absolute -inset-[7px]">
                                            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg-muted" />
                                        </span>
                                    )}
                                </span>
                            </span>
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    aria-label={`${profile.name} — ${profile.role}`}
                    aria-pressed={pinned === SUN}
                    {...hoverProps(SUN)}
                    className="absolute inset-[42%] cursor-pointer rounded-full"
                >
                    <span
                        aria-hidden="true"
                        className={`orbit-core absolute inset-[14%] rounded-full bg-accent shadow-[0_0_48px_8px_color-mix(in_oklab,var(--accent)_45%,transparent)] transition-transform duration-300 ${
                            active === SUN ? 'scale-125' : ''
                        }`}
                    />
                </button>
            </div>

            <div
                aria-live="polite"
                className="pointer-events-none absolute left-1/2 top-full mt-6 w-max max-w-[90vw] -translate-x-1/2"
            >
                {label && (
                    <p className="rounded-full border border-line bg-surface px-4 py-2 text-center text-sm shadow-soft">
                        {label}
                    </p>
                )}
            </div>
        </div>
    )
}