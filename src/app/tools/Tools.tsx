import Image from 'next/image'
import Section from '@/components/ui/Section'
import { tools } from '@/data'

export default function Tools() {
    return (
        <Section
            id="tools"
            title="Tools"
            description="Technologies and platforms I use day to day."
        >
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {tools.map((tool) => (
                    <li
                        key={tool.name}
                        className="flex items-center gap-3 rounded-xl border border-line bg-surface/60 p-3 transition-colors duration-200 hover:border-line-strong"
                    >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white ring-1 ring-black/5">
                            <Image
                                src={tool.logo}
                                alt=""
                                width={56}
                                height={56}
                                className="h-7 w-7 object-contain"
                            />
                        </span>
                        <span className="min-w-0 truncate text-sm font-medium">{tool.name}</span>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
