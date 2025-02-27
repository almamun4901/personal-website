import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export default function About() {
  const name = "AL".split(/(\s+)/).map((char) => ({ char, id: uuidv4() })); // Assign unique keys

  return (
    <div className="h-screen w-full bg-white text-black flex flex-col p-4 pt-20 pb-8 justify-between">
      {/* Centered main content */}
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <h1 className="text-8xl font-bold text-center px-4 flex">
          {name.map(({ char, id }, index) => (
            <motion.span
              key={id} // Use a unique UUID instead of index
              initial={{ color: "#A9A9A9", y: 30, opacity:0 }}
              animate={{ color: "black", y: 0, opacity:1 }}
              transition={{ duration: 1.5, delay: index * 0.25, ease: "easeInOut" }}
              className={char === " " ? "px-2" : ""} // Adjusts space width
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Bottom-aligned text, sliding up animation */}
      <motion.div 
        className="flex-shrink-0 h-1/6 flex items-center justify-center mb-40"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
      >
        <p className="text-center text-lg w-full max-w-2xl px-4 mx-auto">
          I am a Junior at Dartmouth College and majoring in Computer Science and Mathematics. I am interested in Full Stack Development and Financial Mathematics.
        </p>
      </motion.div>
    </div>
  );
}

