import Image from 'next/image'
import { ExternalLink, Github } from '@/components/icons'
import Lightbox from '@/components/ui/Lightbox'
import Section from '@/components/ui/Section'
import { projects } from '@/data'

export default function Projects() {
    return (
        <Section
            id="projects"
            title="Projects"
            description="Selected work. Select a screenshot to enlarge it."
        >
            <ul className="border-y border-line">
                {projects.map((project, index) => (
                    <li
                        key={project.id}
                        className="grid gap-6 border-t border-line py-8 first:border-t-0 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-8"
                    >
                        <Lightbox
                            src={project.image}
                            title={project.title}
                            caption={project.description}
                        >
                            <span className="relative block aspect-[16/10] overflow-hidden rounded-xl border border-line bg-subtle transition-colors duration-300 group-hover:border-line-strong">
                                <Image
                                    src={project.image}
                                    alt=""
                                    fill
                                    priority={index < 2}
                                    sizes="(min-width: 768px) 256px, 100vw"
                                    className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                                />
                            </span>
                        </Lightbox>

                        <div className="flex min-w-0 flex-col">
                            <h3 className="text-xl font-medium tracking-tight">{project.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                                {project.description}
                            </p>

                            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                                {project.technologies.map((tech) => (
                                    <li
                                        key={tech}
                                        className="rounded-md bg-subtle px-2 py-1 text-xs text-fg-muted"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            {(project.githubUrl || project.liveUrl) && (
                                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent"
                                        >
                                            <ExternalLink size={15} />
                                            Live demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent"
                                        >
                                            <Github size={15} />
                                            Source
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
