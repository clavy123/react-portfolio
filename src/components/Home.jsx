import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsChevronDown } from "react-icons/bs";
import Prince from "../assets/PrinceSen.png"

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>Hi , I am Prince</motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A ProblemSolver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <article data-special>
            <p>Resume</p>
          </article>
        </div>
      </section>
      <section>
        <img src={Prince} alt="Prince" />
        <BsChevronDown />
      </section>
    </div>
  );
};

export default Home;
