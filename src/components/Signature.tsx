import { Github, Twitter, Mail } from "lucide-react";

export default function Signature() {
    return (
        <section className="w-full py-6">
            <div
                className="
            w-full
            flex flex-col-reverse md:flex-row items-center justify-between gap-4
            border-t border-white/10
            pt-6
        "
            >
                <h3 className="text-gray-300 text-sm tracking-wide font-light">
                    Satyam Jha
                </h3>
                <div className="flex items-center gap-5">
                    <a
                        href="https://x.com/Satyam___7"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>

                    <a
                        href="https://cal.com/satyam"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </a>

                    <a
                        href="mailto:imsatyam7official@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
                    >
                        <Mail className="w-5 h-5" />
                    </a>

                    <a
                        href="https://github.com/Satyamjha7"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}