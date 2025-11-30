"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function ContactPopup() {
    const [open, setOpen] = useState(false);
    const [firstEffect, setFirstEffect] = useState(true);

    const socials = [
        { icon: <Github size={20} />, href: "https://github.com/Satyamjha7", color: "hover:bg-gray-800" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/imsatyamjha07", color: "hover:bg-blue-700" },
        { icon: <Twitter size={20} />, href: "https://x.com/Satyam___7", color: "hover:bg-sky-600" },
        { icon: <Mail size={20} />, href: "mailto:imsatyam7official@gmail.com", color: "hover:bg-red-600" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (open) setOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [open]);

    useEffect(() => {
        const timer = setTimeout(() => setFirstEffect(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed z-[999] bottom-5 right-5 md:bottom-10 md:right-10 flex flex-col items-center">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center gap-3 mb-4"
                    >
                        {socials.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                                className={`
                                    p-3 rounded-full 
                                    bg-neutral-900 border border-white/10 text-white
                                    shadow-lg backdrop-blur-md
                                    transition-all duration-300
                                    ${item.color}
                                    hover:scale-110 hover:border-white/30
                                `}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                animate={firstEffect ? { scale: [1, 1.1, 1], boxShadow: ["0 0 0px #22c55e", "0 0 20px #22c55e", "0 0 0px #22c55e"] } : {}}
                transition={firstEffect ? { repeat: Infinity, duration: 2 } : {}}
                className={`
                    relative flex items-center justify-center
                    w-14 h-14 md:w-16 md:h-16
                    rounded-full shadow-2xl
                    border border-white/20
                    bg-black/80 backdrop-blur-sm
                    transition-all duration-300
                    overflow-hidden
                    ${open ? "ring-2 ring-white/50" : "hover:ring-2 hover:ring-green-500/50"}
                `}
            >
                <img
                    src="/social.png"
                    alt="Contact"
                    className="w-full h-full object-cover"
                />
                {!open && !firstEffect && (
                    <span className="absolute top-2 right-2 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-black"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}