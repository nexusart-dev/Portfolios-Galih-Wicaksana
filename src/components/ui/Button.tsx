import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg' | 'icon'

type CommonProps = {
    variant?: Variant
    size?: Size
    className?: string
    children?: ReactNode
}

type ButtonAsButton = CommonProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined }

type ButtonAsLink = CommonProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
    'inline-flex shrink-0 select-none items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap ' +
    'transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.97] ' +
    'disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
    primary: 'bg-fg text-bg hover:bg-accent hover:text-accent-fg',
    secondary: 'border border-line-strong bg-surface/60 text-fg backdrop-blur hover:border-fg',
    ghost: 'text-fg-muted hover:bg-subtle hover:text-fg',
}

const sizes: Record<Size, string> = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm',
    lg: 'h-12 px-7 text-base',
    icon: 'h-10 w-10',
}

export default function Button(props: ButtonProps) {
    const { variant = 'primary', size = 'md', className, ...rest } = props
    const classes = cn(base, variants[variant], sizes[size], className)

    if (props.href !== undefined) {
        const { href, children, ...anchorProps } = rest as Omit<ButtonAsLink, 'variant' | 'size' | 'className'>
        return (
            <a href={href} className={classes} {...anchorProps}>
                {children}
            </a>
        )
    }

    const { children, type = 'button', ...buttonProps } = rest as Omit<ButtonAsButton, 'variant' | 'size' | 'className'>
    return (
        <button type={type} className={classes} {...buttonProps}>
            {children}
        </button>
    )
}
