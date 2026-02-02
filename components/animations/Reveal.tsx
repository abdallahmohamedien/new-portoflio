"use client";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ position: "relative", width, overflow: "hidden" }}
        >
            {children}
        </motion.div>
    );
};