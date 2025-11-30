import "./App.css";
import { useState, useEffect } from "react";
import { GridBackgroundDemo } from "./components/ui/grid-background";
import Profile from "./components/Profile";
import { TracingBeam } from "./components/ui/tracing-beam";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publication from "./components/Publication";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Signature from "./components/Signature";

const sectionVariant: any = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Reduced delay slightly for snappier load
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Reduced time for better UX (6s is very long)
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridBackgroundDemo />
      </div>
      <div className="relative z-10 w-full py-10 md:py-20">
        <TracingBeam className="px-4 md:px-8">
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Profile />
            </motion.div>
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={1}
            >
              <Skills />
            </motion.div>
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={2}
            >
              <Education />
            </motion.div>
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={3}
            >
              <Projects />
            </motion.div>
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={4}
            >
              <Publication />
            </motion.div>
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={5}
            >
              <Blogs />
            </motion.div>
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={6}
            >
              <Contact />
            </motion.div>
            <div className="flex flex-col items-center gap-6 mt-10">
              <Footer />
              <Signature />
            </div>

          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

export default App;