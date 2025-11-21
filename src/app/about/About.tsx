import { experiences } from '@/data';

export default function About() {
    return (
        <>
            <style>{`
                .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                    background-color: #E5D9F2;
                    border-radius: 10px;
                }
                .dark .custom-scroll::-webkit-scrollbar {
                    background-color: #2A004E;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background-color: #8B5DFF;
                    border-radius: 10px;
                }
                .custom-scroll::-webkit-scrollbar:horizontal {
                    display: none;
                }
                .custom-scroll::-webkit-scrollbar-thumb:horizontal {
                    display: none;
                }
            `}</style>

            <section id="about" className="pt-20 bg-gray-50 dark:bg-[#2E073F]">
                <div className="container mx-auto px-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        About Me
                    </h2>

                    <div className="mx-auto px-[10vw]">
                        <div className="grid md:grid-cols-2 gap-10 items-start justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    My Journey
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    I&apos;m a passionate full-stack developer with over a year of experience building web applications. I enjoy transforming complex problems into simple and beautiful designs.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    My expertise includes React, Next.js, TypeScript, Node.js, and modern CSS frameworks and Tailwind. I&apos;m always excited to learn new technologies and work on challenging projects.
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {["React", "Next.js", "TypeScript", "Node.js", "Laravel", "Tailwind CSS", "Tanstack Router", "React Router Dom", "Kubb", "Parse", "UI-Shadcn", "UNTR-UI", "Material UI", "Salesforce Sales Cloud", "Apex"].map(
                                        (tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-200 dark:bg-[#492E87] dark:text-primary-200 text-primary-800 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                                <div className='mt-10 italic text-gray-600 dark:text-gray-300'>
                                    &quot;We know who we are, but we don&apos;t know what we will become.&quot;
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mt-2 shadow-lg max-h-96 min-w-80 overflow-y-auto custom-scroll ml-auto">
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Experience
                                </h4>

                                <div className="relative border-l border-gray-300 dark:border-gray-600 ml-3 space-y-8">
                                    {experiences.map((exp, index) => (
                                        <div key={`exp-${exp.id}-${index}`} className="relative pl-6">
                                            <span className="absolute -left-[8px] top-[2px] w-4 h-4 bg-purple-600 dark:bg-[#8B5DFF] rounded-full shadow"></span>

                                            <p className="text-sm font-semibold text-purple-700 dark:text-[#8C00FF]">
                                                {exp.year}
                                            </p>

                                            <h5 className="font-semibold text-gray-900 dark:text-white">
                                                {exp.role}
                                            </h5>

                                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                                                {exp.company}
                                            </p>

                                            <p className="text-gray-500 dark:text-gray-400 text-xs">
                                                {exp.duration}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
