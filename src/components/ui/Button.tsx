import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'purple' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'purple', size = 'md', asChild, ...props }, ref) => {
        return (
        <button
            className={cn(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
            {
                'bg-[#9C19E0] text-white hover:bg-purple-600': variant === 'purple',
                'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600': variant === 'secondary',
                'border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800': variant === 'outline',
                'h-8 px-3 text-sm': size === 'sm',
                'h-10 px-4 py-2': size === 'md',
                'h-12 px-6 text-lg': size === 'lg',
            },
            className
            )}
            ref={ref}
            {...props}
        />
        )
    }
)

Button.displayName = 'Button'

export default Button