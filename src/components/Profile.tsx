import Avatar from "./Avatar";

export default function Profile() {
  return (
      <section className="w-full flex justify-center md:px-10 lg:px-5 sm:px-16 py-16">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-32 h-32 md:w-36 md:h-36">
              <Avatar />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-semibold text-white">
              Hi, I'm Satyam
            </h1>
            <p className="text-sm sm:text-base lg:text-[15px] font-light text-gray-400 mt-2">
              22, Chandigarh | Full Stack Engineer
            </p>
          </div>
        </div>
        <p className="mt-8 text-gray-300 text-sm sm:text-base lg:text-[16px] font-light leading-relaxed md:text-left">
          I’m a Full Stack Blockchain Developer and problem solver, passionate
          about building cutting-edge web3 applications and scalable digital
          solutions. With experience in React, Node.js, and smart contracts, I
          transform complex ideas into intuitive, user-friendly platforms. I
          thrive on innovation, challenges, and creating tech that makes an
          impact.
        </p>
        <div className="border-l-2 border-white/50 mt-8 pl-4 italic text-gray-200 text-sm md:text-base font-light">
          "After all," he said,{" "}
          <span className="font-semibold">
            “everyone enjoys a good joke, so it's only fair that they should pay
            for the privilege.”
          </span>
        </div>
      </div>
    </section>
  );
}