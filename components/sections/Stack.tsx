"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiVuedotjs,
    SiNodedotjs,
    SiMongodb,
    SiGit,
    SiTypescript,
} from "react-icons/si";

const tools = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" },
];

export default function StackMarquee() {
    // نكرر المصفوفة مرتين لضمان عدم وجود فراغ أثناء الحركة اللانهائية
    const duplicatedTools = [...tools, ...tools];

    return (
        <section id="stack" className="py-20 bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex items-center gap-2 text-teal-400 font-mono text-sm mb-4">
                    <span className="w-8 h-[1px] bg-teal-400"></span>
                    TECH STACK
                </div>
            </div>


            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap gap-10"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 25,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedTools.map((tool, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/[0.08] transition-colors group"
                        >
                            <tool.icon
                                size={30}
                                style={{ color: tool.color }}
                                className="group-hover:scale-125 transition-transform duration-300"
                            />
                            <span className="text-white/70 font-bold uppercase tracking-widest text-lg">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </motion.div>


                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
            </div>
        </section>
    );
}