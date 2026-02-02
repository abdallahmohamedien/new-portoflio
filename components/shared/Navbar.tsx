"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-[100] transition-all duration-500">
            <div className={`mx-auto transition-all duration-500 ${isScrolled ? "max-w-3xl mt-4 p-2" : "max-w-7xl mt-0"
                }`}>
                <nav className={`relative flex items-center justify-between px-6 py-3 transition-all duration-500 ${isScrolled
                    ? "bg-black/40 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl"
                    : "bg-transparent border-transparent"
                    }`}>

                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-black tracking-tighter cursor-pointer"
                    >
                        Abdallah<span className="text-teal-400">.</span>Mo
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-teal-400"
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                {link.name}
                                {hoveredLink === link.name && (
                                    <motion.span
                                        layoutId="nav-hover"
                                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </a>
                        ))}

                        <div className="h-6 w-[1px] bg-white/20 mx-2" />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-teal-400 transition-colors"
                        >
                            Lets Talk
                        </motion.button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 rounded-full bg-white/5 border border-white/10"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </nav>
            </div>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 bg-[#050505] z-[110] flex flex-col p-8 md:hidden"
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-black text-3xl">MENU</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-3 border border-white/10 rounded-full active:bg-white/10"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 mt-16">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-black flex items-center justify-between group"
                                >
                                    <span className="group-hover:text-teal-400 transition-colors">{link.name}</span>
                                    <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-teal-400" />
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto border-t border-white/10 pt-8 flex items-center justify-between"
                        >
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Socials</p>
                                <SocialIcons />
                            </div>
                            <button className="px-6 py-3 bg-white text-black font-bold rounded-xl">Resume</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}