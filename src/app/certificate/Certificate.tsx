'use client'

import Image from "next/image";
import { certificate } from '@/data';
import { OpenDialog, Close } from '@/components/icons';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";

export default function Certificate() {
    return (
        <section id="certificate" className="pt-20 pb-36 bg-gray-50 dark:bg-[#2E073F]">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    My Certificate
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
                    {certificate.map((cert, index) => (
                        <div 
                            key={`cert-${cert.id}-${index}`}
                            className="relative w-full max-w-[350px] aspect-[16/12] md:aspect-[4/3] rounded-lg overflow-hidden shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0px_5px_20px_5px_rgba(0,0,0,0.27)]"
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 w-full h-full p-2.5 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-center">
                                    <small className="dark:bg-black/[0.33] bg-white/[0.33] px-2.5 py-0.5 rounded-[10px] backdrop-blur-[5px] w-fit dark:text-white text-black flex items-center text-sm">
                                        {cert.description}
                                    </small>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="dark:bg-black/[0.33] bg-white/[0.33] p-1 rounded backdrop-blur-[5px] w-fit text-white flex items-center transition-colors duration-200 hover:bg-black/[0.47]">
                                                <button className="dark:text-white text-black cursor-pointer">
                                                    <OpenDialog width={15} height={15} />
                                                </button>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl w-[95vw] sm:w-[90vw] p-0 bg-transparent border-0 max-h-[95vh] overflow-y-auto">
                                            <DialogClose className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 rounded-full bg-white/90 dark:bg-gray-800/90 p-2 hover:bg-white dark:hover:bg-gray-800 transition-colors backdrop-blur-sm">
                                                <Close className="h-5 w-5 text-gray-900 dark:text-white" />
                                                <span className="sr-only">Close</span>
                                            </DialogClose>

                                            <DialogTitle className='pt-3 sm:pt-5 px-2 sm:ml-2 text-white text-sm sm:text-base'>
                                                {cert.description}
                                            </DialogTitle>

                                            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] p-2 sm:p-0">
                                                <Image
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>

                                            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-b-lg mx-2 sm:mx-0 mb-2 sm:mb-0">
                                                <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                                    {cert.date}
                                                </p>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div className="shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)] w-full p-2 bg-white/[0.33] dark:bg-black/[0.33] backdrop-blur-[5px] rounded-[5px] flex flex-col gap-1.5">
                                    <div className="text-sm w-full flex justify-between items-center dark:text-white text-black">
                                        <p className="m-0 leading-none">
                                            <strong>{cert.title}</strong>
                                        </p>
                                    </div>
                                    <p className="dark:text-white/70 text-black/[0.53] text-[10px] m-0 leading-none">
                                        {cert.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}