import { Project } from "@/constants";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500">
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.githubLink} target="_blank" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white">
                        <Github size={20} />
                    </a>
                    <a href={project.liveLink} target="_blank" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white">
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest bg-teal-400/10 px-2 py-1 rounded">
                        {project.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                {/* Tags Section - هنا قمنا بتغيير tech إلى tags */}
                <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="text-[10px] text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};