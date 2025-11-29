"use client";
import { CardSpotlight } from "./ui/card-spotlight";

const projects = [
    {
        title: "Smart Contract Security",
        description:
            "A Solidity project implementing require(), assert(), and revert() for secure contract execution.",
        link: "https://github.com/yourusername/smart-contract-security",
        tech: ["Solidity", "Ethereum", "Smart Contracts"],
    },
    {
        title: "Online Book Store",
        description:
            "Book rental and purchase system with secure payments and premium features for university students.",
        link: "https://github.com/yourusername/online-book-store",
        tech: ["React", "Node.js", "MongoDB"],
    },
    {
        title: "AI Chatbot Dashboard",
        description:
            "Botpress-powered chatbot integrated with a React dashboard, with PDF export features for assessments.",
        link: "https://github.com/yourusername/ai-chatbot-dashboard",
        tech: ["React", "Botpress", "TailwindCSS"],
    },
    {
        title: "Chrome Dino Clone",
        description:
            "A fun game built with React and Canvas API inspired by the Chrome offline Dino runner.",
        link: "https://github.com/yourusername/chrome-dino-clone",
        tech: ["React", "Canvas API", "JavaScript"],
    },
];

export default function Projects() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            {/* Heading + description */}
            <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2 relative">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500 absolute"></span>
                    </div>
                    <h2 className="text-lg font-bold tracking-wide text-blue-600">
                        Projects
                    </h2>
                </div>
                <p className="mb-6 text-gray-400 max-w-full md:max-w-2xl text-sm text-start">
                    A collection of projects I’ve built ranging from web applications and
                    UI experiments to problem-solving algorithms. Each project reflects my
                    learning, creativity, and love for building useful things.
                </p>
            </div>

            {/* Responsive grid: 1 col on mobile, 2 cols on tablets and up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <CardSpotlight
                        key={idx}
                        className="p-6 relative overflow-hidden group w-full h-auto min-h-[12rem] sm:min-h-[14rem]"
                    >
                        <div className="relative z-10 flex flex-col items-start">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3"
                            >
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {project.title}
                                </h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="15"
                                    width="15"
                                    viewBox="0 -750 960 960"
                                    fill="#22c55e"
                                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                                >
                                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                                </svg>
                            </a>

                            <p className="text-sm text-gray-400 mb-4 text-start">
                                {project.description}
                            </p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded-md hover:border-gray-500 transition"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Gradient bar at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#22c55e] to-transparent" />
                    </CardSpotlight>
                ))}
            </div>
        </section>
    );
}
