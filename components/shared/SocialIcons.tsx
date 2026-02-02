"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function SocialIcons() {
  const socials = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: '#' }
  ];

  return (
    <div className="flex gap-3">
      {socials.map((S, i) => (
        <motion.a
          key={i}
          href={S.href}
          whileHover={{ scale: 1.1, y: -2 }}
          className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-teal-400/50 hover:text-teal-400 transition-all"
        >
          <S.icon size={17} />
        </motion.a>
      ))}
    </div>
  );
}