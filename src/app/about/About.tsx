import Section from '@/components/ui/Section'
import { aboutSkills, experiences } from '@/data'

// Urutkan dari yang terbaru. Tahun sama → id lebih besar = lebih baru.
const timeline = [...experiences].sort(
    (a, b) => Number(b.year) - Number(a.year) || b.id - a.id,
)

export default function About() {
    return (
        <Section
            id="about"
            title="About"
            description="Who I am, how I work, and where I have worked."
        >
            <div className="max-w-[38rem] space-y-5 leading-relaxed text-fg-muted">
                <p className="text-lg text-fg">
                    I&apos;m a passionate full-stack developer with over a year of experience
                    building web applications. I enjoy transforming complex problems into
                    simple and beautiful designs.
                </p>
                <p>
                    My expertise includes React, Next.js, TypeScript, Node.js, and modern CSS
                    frameworks and Tailwind. I&apos;m always excited to learn new technologies
                    and work on challenging projects.
                </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Skills">
                {aboutSkills.map((skill) => (
                    <li
                        key={skill}
                        className="rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-[13px] text-fg-muted"
                    >
                        {skill}
                    </li>
                ))}
            </ul>

            <blockquote className="mt-10 max-w-[34rem] border-l-2 border-accent pl-5 text-fg-muted">
                &quot;We know who we are, but we don&apos;t know what we will become.&quot;
            </blockquote>

            <div className="mt-16">
                <h3 className="text-lg font-medium tracking-tight">Experience</h3>

                <ol className="mt-6 border-b border-line">
                    {timeline.map((exp) => {
                        const isCurrent = exp.duration.trim().endsWith('Present')
                        return (
                            <li
                                key={exp.id}
                                className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 gap-y-1 border-t border-line py-5 sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:gap-x-6"
                            >
                                <span className="pt-0.5 text-sm tabular-nums text-fg-faint">
                                    {exp.year}
                                </span>

                                <div className="min-w-0">
                                    <h4 className="font-medium leading-snug">{exp.role}</h4>
                                    <p className="mt-1 text-sm text-fg-muted">{exp.company}</p>
                                </div>

                                <p className="col-start-2 flex items-center gap-2 text-sm text-fg-muted sm:col-start-3 sm:justify-end sm:pt-0.5">
                                    {isCurrent && (
                                        <span
                                            className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_color-mix(in_oklab,var(--accent)_50%,transparent)]"
                                            aria-hidden="true"
                                        />
                                    )}
                                    {exp.duration}
                                </p>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Section>
    )
}
