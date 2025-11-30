import { HoverBorderGradient } from "./ui/hover-border-gradient";

const skills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "MongoDB",
    "Solidity",
    "Python",
    "C++",
    "Git",
    "Docker",
    "Next.js",
    "JavaScript",
];

export default function Skills() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="w-full flex flex-col bg-transparent py-2 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500 absolute"></span>
                    </div>

                    <h2 className="text-lg font-bold tracking-wide text-blue-600">
                        Skills
                    </h2>
                </div>
            </div>
            <div className="flex flex-wrap justify-start gap-3">
                {skills.map((skill, idx) => (
                    <HoverBorderGradient
                        key={idx}
                        duration={1.5}
                        className="
                            text-sm md:text-base font-medium text-white
                            px-3 py-1 rounded-md
                        "
                    >
                        {skill}
                    </HoverBorderGradient>
                ))}
            </div>
        </section>
    );
}
