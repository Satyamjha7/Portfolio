const Education = () => {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 md:px-10 mt-10">
            <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2 relative">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500 absolute"></span>
                    </div>

                    <h2 className="text-lg font-bold tracking-wide text-blue-600">
                        Education
                    </h2>
                </div>
            </div>
            <div
                className="
                    relative w-full mx-auto 
                    p-6 md:p-8 
                    border border-gray-500/30 bg-black/50 text-gray-200 shadow-md 
                    transition-all duration-300 
                    hover:border-gray-400 hover:shadow-lg hover:bg-[#04200fb4]
                    rounded-sm
                "
            >
                <span className="absolute -top-3 -left-1 text-gray-500/50 text-xl font-light">+</span>
                <span className="absolute -top-3 -right-1 text-gray-500/50 text-xl font-light">+</span>
                <span className="absolute -bottom-3 -left-1 text-gray-500/50 text-xl font-light">+</span>
                <span className="absolute -bottom-3 -right-1 text-gray-500/50 text-xl font-light">+</span>

                <div className="space-y-8 md:space-y-6 text-left">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-1">
                            <h3 className="flex items-start md:items-center gap-2 text-sm md:text-base font-semibold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 md:mt-0" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                                </svg>
                                B.E in Computer Science
                            </h3>
                            <span className="hidden md:inline text-gray-500">|</span>
                            <span className="text-gray-400 text-sm md:text-base font-normal ml-7 md:ml-0">
                                Chandigarh University
                            </span>
                        </div>
                        <div className="ml-7 flex flex-col gap-1">
                            <p className="text-xs text-gray-500">Punjab, India • 2022 – 2026</p>
                            <div className="mt-3 flex flex-row gap-2 flex-wrap">
                                {["CSE", "AI", "ML", "Data Science"].map((item, index) => (
                                    <span key={index}
                                        className="px-2 py-1 text-[10px] md:text-xs border border-white/10 bg-white/5 text-gray-300 rounded 
                                                   hover:border-green-500/50 hover:text-green-400 transition-colors duration-200">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-white/10 md:hidden"></div>
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-1">
                            <h3 className="flex items-start md:items-center gap-2 text-sm md:text-base font-semibold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 md:mt-0" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M160-391h45l23-66h104l24 66h44l-97-258h-46l-97 258Zm81-103 38-107h2l38 107h-78Zm319-70v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-499Z" />
                                </svg>
                                Senior Secondary
                            </h3>
                            <span className="hidden md:inline text-gray-500">|</span>
                            <span className="text-gray-400 text-sm md:text-base font-normal ml-7 md:ml-0">
                                CBSE Jharkhand
                            </span>
                        </div>

                        <div className="ml-7 flex flex-col gap-1">
                            <p className="text-xs text-gray-500">Jharkhand, India • 2019 – 2021</p>

                            <div className="mt-3 flex flex-row gap-2 flex-wrap">
                                {["Physics", "Chemistry", "Maths"].map((item, index) => (
                                    <span key={index}
                                        className="px-2 py-1 text-[10px] md:text-xs border border-white/10 bg-white/5 text-gray-300 rounded 
                                                   hover:border-green-500/50 hover:text-green-400 transition-colors duration-200">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;