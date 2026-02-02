"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, Project } from "@/constants";

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6">
            <div className="relative max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-teal-400 font-mono text-sm tracking-[0.3em] mb-4"
                    >

                    </motion.p>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
                        SELECTED <br /> <span className="text-white/20">WORKS</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-32 md:gap-48">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <div ref={container} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            {/* Image Side */}
            <div className="relative w-full lg:w-3/5 aspect-[16/10] overflow-hidden rounded-3xl bg-white/5 border border-white/10 group">
                <motion.img
                    style={{ scale: 1.1, y }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/5">
                <span className="text-teal-400 font-mono text-sm">Project 0{index + 1}</span>
                <h3 className="text-4xl font-bold mt-4 mb-6 uppercase tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300 font-mono uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-8">
                    <a href={project.liveLink} target="_blank" className="flex items-center gap-2 text-white font-bold hover:text-teal-400 transition-colors group/link">
                        Live Site <ExternalLink size={18} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a href={project.githubLink} target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                        Source <Github size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
}