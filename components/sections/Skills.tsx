"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { SKILLS, Skill } from "@/constants";

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 bg-[#030303] relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-teal-400 font-mono text-sm tracking-[0.4em] mb-4 uppercase"
                    >
                        Technical Proficiency
                    </motion.p>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white">
                        My <span className="text-white/20">Skills</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {SKILLS.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            onMouseMove={handleMouseMove}
            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            250px circle at ${mouseX}px ${mouseY}px,
                            rgba(45, 212, 191, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">

                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform" style={{ color: skill.color }}>
                    <skill.icon />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-teal-400 transition-colors">
                    {skill.name}
                </h3>


                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 group-hover:border-teal-500/30 transition-colors">
                    <p className="text-teal-400/80 group-hover:text-teal-400 font-mono text-[10px] uppercase tracking-widest">
                        {skill.level}
                    </p>
                </div>
            </div>


            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </motion.div>
    );
}