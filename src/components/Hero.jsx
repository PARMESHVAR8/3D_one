import React from "react";
import { motion } from "framer-motion";
import NarutoCanvas from "./Naruto";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center p-8 md:p-16"
      style={{ backgroundImage: "url('./bg_7.png')" }}
    >
      {/* Left Side: Naruto Model with Zoom Animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-1/2 h-full flex items-center justify-center"
      >
        <NarutoCanvas />
      </motion.div>

      {/* Right Side: Sports Text Content with Slide Animation */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 10, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
        className="w-1/2 text-white text-left flex flex-col justify-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Unleash Your Inner Champion
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Train like a warrior and achieve peak performance with the best sports techniques. 
          Stay ahead in the game and push your limits.
        </p>
        <a
          href="#explore"
          className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold rounded-lg transition duration-300"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
