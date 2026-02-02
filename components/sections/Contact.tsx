"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 bg-[#080808] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-teal-400 font-mono text-sm tracking-[0.4em] uppercase mb-8"
                    >
                        Need a high-end interface?
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-16"
                    >
                        LET&apos;S <span className="text-white/20 text-outline">CONNECT</span>
                    </motion.h2>

                    {/* Magnetic-style Mail Button */}
                    <motion.a
                        href="mailto:abdallahmohamedien@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <Mail className="w-8 h-8 group-hover:text-teal-400 transition-colors" />
                            <span className="font-bold text-xl">Get in touch</span>
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>

                        {/* Spinning Text Outline (CSS Only) */}
                        <div className="absolute inset-0 rounded-full border-t-2 border-teal-400/20 animate-spin [animation-duration:8s]" />
                    </motion.a>

                    {/* Social Footer */}
                    <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
                        <div className="text-gray-500 font-mono text-sm">
                            © 2026 ALL RIGHTS RESERVED
                        </div>

                        <div className="flex gap-8">
                            {[
                                { icon: Github, href: "https://github.com/abdallahmohamedien" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/abdallah-mohamedien" },
                                { icon: Twitter, href: "https://x.com/Abdallah_mo522" },
                            ].map((Social, i) => (
                                <motion.a
                                    key={i}
                                    href={Social.href}
                                    whileHover={{ y: -5, textShadow: "0px 0px 8px rgb(45 212 191)" }}
                                    className="text-gray-400 hover:text-white transition-all"
                                >
                                    <Social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>

                        <div className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                            Abdallah Mo / 11:04 PM
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}