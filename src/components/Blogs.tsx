"use client";
import { CardSpotlight } from "./ui/card-spotlight";

export default function Blogs() {
    return (
        <section className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 mt-5">
            <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2 relative">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500 absolute"></span>
                    </div>

                    <h2 className="text-lg font-bold tracking-wide text-blue-600">
                        Blogs
                    </h2>
                </div>

                <p className="mb-6 text-gray-400 max-w-full md:max-w-4xl text-sm text-start">
                    Thoughts, lessons, and technical insights I’ve learned along the way.
                    From debugging strange issues to reflecting on personal experiences,
                    each blog captures something real from my journey.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
                <CardSpotlight className="p-6 relative overflow-hidden group h-auto min-h-[14rem] border">
                    <div className="relative z-10 flex flex-col items-start">
                        <a
                            href="https://medium.com/@imsatyam7official/why-selling-yourself-seems-to-matter-more-than-solving-1000-leetcode-questions-ce5dbddf0941"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col gap-1 w-full"
                        >
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg font-semibold text-white mb-1 text-start">
                                    Why Selling Yourself Matters More Than Solving 1000 LeetCode Questions
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
                            </div>

                            <p className="text-sm text-gray-400 mb-3 text-start">
                                A personal reflection on why visibility, communication, and
                                clarity often matter more than grinding endless coding questions
                                — especially during placements and interviews.
                            </p>
                            <span className="text-xs text-gray-500 mt-1 text-left w-full block">
                                Oct 5, 2025
                            </span>
                        </a>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#22c55e] to-transparent" />
                </CardSpotlight>
            </div>
        </section>
    );
}
