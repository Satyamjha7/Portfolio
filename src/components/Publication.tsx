"use client";
import { CardSpotlight } from "./ui/card-spotlight";

export default function Publication() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2 relative">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500 absolute"></span>
                    </div>

                    <h2 className="text-lg font-bold tracking-wide text-blue-600">
                        Publication
                    </h2>
                </div>

                <p className="mb-6 text-gray-400 max-w-full md:max-w-2xl text-sm text-start">
                    A collection of my published work focused on machine learning,
                    explainable AI, and analytical solutions for real-world challenges.
                    Each publication reflects my interest in research, innovation,
                    and impactful problem-solving.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
                <CardSpotlight className="p-6 relative overflow-hidden group h-auto min-h-[16rem] sm:min-h-[18rem]">
                    <div className="relative z-10 flex flex-col items-start">

                        <a
                            href="https://example.com/churn-sage-paper"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                        >
                            <h3 className="text-lg font-semibold text-white mb-3 text-start">
                                Churn Sage: Leveraging Machine Learning and Explainable AI for
                                Enhanced Customer Retention
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
                            A machine learning–based solution to forecast customer churn using
                            predictive analytics, feature engineering, and hyperparameter
                            tuning. Churn Sage integrates Explainable AI (XAI) to provide
                            transparency, enabling data-driven retention strategies across
                            industries.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded-md hover:border-gray-500 transition">
                                Machine Learning
                            </span>
                            <span className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded-md hover:border-gray-500 transition">
                                Explainable AI (XAI)
                            </span>
                            <span className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded-md hover:border-gray-500 transition">
                                Customer Retention
                            </span>
                            <span className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded-md hover:border-gray-500 transition">
                                Predictive Analytics
                            </span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#22c55e] to-transparent" />
                </CardSpotlight>
            </div>
        </section>
    );
}
