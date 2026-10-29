'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Close } from '@/components/icons'
import { cn } from '@/lib/utils'

type LightboxProps = {
    src: string
    title: string
    caption?: string
    children: ReactNode
    className?: string
}

/**
 * Pratinjau gambar layar penuh. Children = tampilan thumbnail (pemicu).
 */
export default function Lightbox({ src, title, caption, children, className }: LightboxProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger
                aria-label={`Enlarge: ${title}`}
                className={cn('group block w-full cursor-zoom-in text-left', className)}
            >
                {children}
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="lightbox-overlay fixed inset-0 z-[60] bg-bg/80 backdrop-blur-md" />
                <Dialog.Content className="lightbox-panel fixed inset-0 z-[61] m-auto h-fit max-h-[94svh] w-[min(94vw,1040px)] overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-soft outline-none">
                    <div className="relative h-[min(62svh,640px)] w-full bg-subtle">
                        <Image
                            src={src}
                            alt={title}
                            fill
                            sizes="(min-width: 1080px) 1040px, 94vw"
                            className="object-contain"
                        />
                    </div>

                    <div className="border-t border-line p-5 pr-16">
                        <Dialog.Title className="text-base font-medium tracking-tight">
                            {title}
                        </Dialog.Title>
                        {caption ? (
                            <Dialog.Description className="mt-1 text-sm text-fg-muted">
                                {caption}
                            </Dialog.Description>
                        ) : (
                            <Dialog.Description className="sr-only">{title}</Dialog.Description>
                        )}
                    </div>

                    <Dialog.Close
                        aria-label="Close preview"
                        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-surface/85 text-fg backdrop-blur transition-colors hover:bg-subtle"
                    >
                        <Close size={16} />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
