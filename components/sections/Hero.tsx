"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial="initial"
                    animate="animate"
                    transition={{ staggerChildren: 0.15 }}
                >
                    <motion.span
                        variants={fadeIn}
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-teal-400"
                    >
                        Crafting Digital Excellence
                    </motion.span>

                    <motion.h1
                        variants={fadeIn}
                        className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]"
                    >
                        FRONT-END <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                            DEVELOPER
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeIn}
                        className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed"
                    >
                        I bridge the gap between complex design and high-performance code. Specialized in building fluid, motion-driven interfaces using Next.js and Framer Motion.
                    </motion.p>

                    <motion.div
                        variants={fadeIn}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-teal-400 transition-all active:scale-95">
                            Explore My Work
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 font-bold rounded-full hover:bg-white/5 transition-all">
                            Contact Me
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-teal-400 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
            </motion.div>
        </section>
    );
}