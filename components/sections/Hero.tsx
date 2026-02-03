"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">

            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="mb-6">
                        <span className="text-teal-400 text-sm font-mono tracking-widest uppercase">
                            Front-End Developer • Based in Egypt • Remote Friendly
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] mb-8">
                        BUILDING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                            MODERN WEB INTERFACES
                        </span>
                    </h1>

                    <p className="max-w-lg text-gray-400 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                        I’m a Front-End Developer focused on crafting fast, accessible, and
                        visually refined web applications using React, Next.js, and modern
                        UI systems.
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                        <a href="#projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2"
                            >
                                View Projects <ArrowUpRight size={20} />
                            </motion.button>
                        </a>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/abdallahmohamedien"
                                className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://github.com/abdallahmohamedien"
                                className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px]">

                        <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-white/10">
                            <Image
                                src="/Temo.jpg"
                                alt="Front-End Developer Portfolio"
                                fill
                                priority
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/20 blur-2xl -z-10 rounded-full" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 blur-2xl -z-10 rounded-full" />

                        <div className="absolute inset-0 border-2 border-teal-400/30 rounded-[2.5rem] -translate-x-4 translate-y-4 -z-20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
