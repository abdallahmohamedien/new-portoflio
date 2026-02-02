import { PROJECTS } from "@/constants";
import { ExternalLink } from "lucide-react";

export const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => {
    return (
        <div className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
                {project.tech.map(t => (
                    <span key={t} className="text-xs bg-teal-500/10 text-teal-400 px-2 py-1 rounded">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};