import Button from '@/components/ui/Button'
import { Github, Linkedin, Instagram } from '@/components/icons';
import MyName from '@/components/atoms/MyName'
import AiBased from '@/components/lotties/AiBased'

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center py-12">
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-full max-w-md lg:max-w-lg lg:scale-[2.5] md:scale-[1.5]">
                            <AiBased />
                        </div>
                    </div>

                    <div className="text-center lg:text-left z-10">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 flex flex-col items-center lg:items-start gap-3">
                            <span>Hi, I&apos;m</span>
                            <MyName />
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                            Web & Salesforce Developer
                        </p>

                        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
                            I create beautiful, functional, and user-friendly web applications 
                            using modern technologies like React, Next.js, and TypeScript.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start">
                            <a href="https://github.com/nexusart-dev" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full flex items-center justify-center gap-2">
                                    <Github className="h-5 w-5" />
                                    GitHub
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/galih-wicaksana/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full flex items-center justify-center gap-2">
                                    <Linkedin className="h-5 w-5" />
                                    LinkedIn
                                </Button>
                            </a>
                            <a href="https://www.instagram.com/axr.nxusy_.art?igsh=YjQ4YWMzdnQwYWRt" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full flex items-center justify-center gap-2">
                                    <Instagram className="h-5 w-5" />
                                    Instagram
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}