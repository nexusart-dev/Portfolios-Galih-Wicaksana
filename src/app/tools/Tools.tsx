"use client"

import Marquee from "react-fast-marquee"
import Image from "next/image"
import { tools } from '@/data'

export default function Tools() {
    return (
        <section id="tools" className="py-20">
            <div className="container mx-auto pb-3">
                <Marquee
                gradient={false}
                speed={150}
                pauseOnHover={true}
                className="flex items-center"
                >
                {tools.map((tool) => (
                    <div
                    key={tool.name}
                    className="mx-8 flex flex-col items-center justify-center"
                    >
                    <Image
                        src={tool.logo}
                        alt={tool.name}
                        width={80}
                        height={80}
                        className="h-16 w-auto object-contain"
                    />
                    <p className="text-center text-sm mt-2 text-gray-700 dark:text-gray-300">
                        {tool.name}
                    </p>
                    </div>
                ))}
                </Marquee>
            </div>
        </section>
    )
}
