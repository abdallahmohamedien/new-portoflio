"use client";
import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiReact, SiNodedotjs } from "react-icons/si";
import { IconType } from "react-icons";

interface Tool {
    name: string;
    icon: IconType;
    level: string;
    color: string;
}

const tools: Tool[] = [
    { name: "Next.js 15", icon: SiNextdotjs, level: "Expert", color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, level: "Advanced", color: "#3178C6" },
    { name: "React", icon: SiReact, level: "Expert", color: "#61DAFB" },
    { name: "Framer Motion", icon: SiFramer, level: "Advanced", color: "#E11D48" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert", color: "#38B2AC" },
    { name: "Node.js", icon: SiNodedotjs, level: "Intermediate", color: "#339933" },
];

export default function Stack() {
    return (
        <section id="stack" className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-teal-400 font-mono text-sm mb-4"
                    >
                        <span className="w-8 h-[1px] bg-teal-400"></span>
                        TECHNICAL ARCHITECTURE
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                        POWERTRAIN <span className="text-white/20">&</span> <br />
                        MODERN STACK
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.map((tool, i) => (
                        <StackCard key={tool.name} tool={tool} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StackCard({ tool, index }: { tool: Tool; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.05]"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${tool.color}15,
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <div
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ color: tool.color }}
                    >
                        <tool.icon size={32} />
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest border border-white/5 px-2 py-1 rounded">
                        {tool.level}
                    </span>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold tracking-tight text-white/90 uppercase">
                        {tool.name}
                    </h3>
                    <div className="mt-2 h-1 w-0 bg-gradient-to-r from-teal-500 to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
            </div>
        </motion.div>
    );
}