"use client";
import { motion } from "framer-motion";
import { SKILLS, Skill } from "@/constants";

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 bg-[#030303]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-teal-400 font-mono text-sm tracking-[0.4em] mb-4 uppercase"
                    >
                        Technical Proficiency
                    </motion.p>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
                        My <span className="text-white/20">Skills</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {SKILLS.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}


function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-400/50 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden"
        >
            {/* Decorative Glow */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-teal-500/10 blur-3xl group-hover:bg-teal-500/20 transition-all" />

            <div className="relative z-10">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                    {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {skill.name}
                </h3>
                <p className="text-teal-400 font-mono text-xs uppercase tracking-widest">
                    {skill.level}
                </p>
            </div>

            {/* Progress Bar Animation */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-teal-500 to-blue-500 opacity-30 group-hover:opacity-100"
                />
            </div>
        </motion.div>
    );
}