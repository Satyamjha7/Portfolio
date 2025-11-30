"use client";

import { CardSpotlight } from "./ui/card-spotlight";

export default function Contact() {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 md:px-10 mt-10">
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-2 relative">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white/30">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500 absolute"></span>
                    </div>

                    <h2 className="text-lg font-bold tracking-wide text-blue-600">
                        Let’s Connect
                    </h2>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xl text-start">
                    Let’s connect! Whether it’s about projects, collaborations, or just to
                    say hi.
                </p>
            </div>
            <div className="w-full">
                <CardSpotlight className="p-5 md:p-8 relative overflow-hidden bg-neutral-950/50 border border-white/10 rounded-xl">
                    <div className="relative z-10 flex flex-col w-full">
                        <form className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="
                    w-full h-12 bg-white/5 border border-white/10 
                    text-gray-200 text-sm px-4 rounded-lg
                    placeholder:text-gray-500
                    focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500/50
                    transition-all duration-300 outline-none
                  "
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="
                    w-full h-12 bg-white/5 border border-white/10 
                    text-gray-200 text-sm px-4 rounded-lg
                    placeholder:text-gray-500
                    focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500/50
                    transition-all duration-300 outline-none
                  "
                                    required
                                />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="Your Message..."
                                className="
                  w-full bg-white/5 border border-white/10 
                  text-gray-200 text-sm p-4 rounded-lg resize-none
                  placeholder:text-gray-500
                  focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500/50
                  transition-all duration-300 outline-none
                "
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="
                  w-full md:w-auto md:self-start px-8 py-3 mt-2 rounded-lg 
                  text-black font-semibold text-sm tracking-wide
                  bg-green-500 hover:bg-green-400 
                  shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]
                  transition-all duration-300 transform active:scale-95
                "
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </CardSpotlight>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 pl-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50"></span>
                I usually reply within 24 hours
            </div>
        </section>
    );
}