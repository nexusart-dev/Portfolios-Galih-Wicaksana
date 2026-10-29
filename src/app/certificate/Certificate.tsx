import Image from 'next/image'
import Lightbox from '@/components/ui/Lightbox'
import Section from '@/components/ui/Section'
import { certificate } from '@/data'

export default function Certificate() {
    return (
        <Section
            id="certificate"
            title="Certificates"
            description="Training, camps, and courses I have completed. Select one to view it in full."
        >
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
                {certificate.map((cert) => (
                    <li key={cert.id}>
                        <Lightbox src={cert.image} title={cert.title} caption={cert.date}>
                            <span className="relative block aspect-[7/5] overflow-hidden rounded-lg border border-line bg-subtle transition-colors duration-300 group-hover:border-line-strong">
                                <Image
                                    src={cert.image}
                                    alt=""
                                    fill
                                    sizes="(min-width: 1024px) 190px, (min-width: 768px) 22vw, 46vw"
                                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                                />
                            </span>
                            <span className="mt-3 block text-[13px] font-medium leading-snug">
                                {cert.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-fg-muted">{cert.date}</span>
                        </Lightbox>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
