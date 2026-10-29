export default function BrandMark({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={className ?? 'h-[22px] w-[22px]'}
        >
            <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.1" fill="var(--accent)" />
            <circle cx="18.6" cy="5.9" r="1.7" fill="currentColor" />
        </svg>
    )
}
