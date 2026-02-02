"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TIMELINE, TimelineItem } from "@/constants";

export default function Timeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="timeline" ref={containerRef} className="py-32 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-teal-400 font-mono text-sm tracking-[0.3em] mb-4 uppercase"
                    >

                    </motion.p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter">THE ROAD <br /> <span className="text-white/20">SO FAR</span></h2>
                </div>

                <div className="relative">
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-0 md:left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-teal-400 via-blue-500 to-transparent origin-top"
                    />

                    <div className="flex flex-col gap-24">
                        {TIMELINE.map((item, index) => (
                            <TimelineCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="w-full md:w-[45%] mb-4 md:mb-0">
                <span className={`text-teal-400 font-mono font-bold text-xl ${isEven ? 'md:text-left' : 'md:text-right'} block w-full`}>
                    {item.year}
                </span>
            </div>

            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)] z-10" />

            <div className="w-full md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{item.title}</h3>
                <p className="text-teal-400 text-sm mb-4 font-medium">{item.company}</p>
                <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}