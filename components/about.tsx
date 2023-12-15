/*"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium"></span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}*/
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I'm a second-year undergraduate student at NIT-K Surathkal, majoring in Electronics and Communication Engineering. My academic journey is shaped by a profound interest in algorithmic problem-solving, where I regularly participate in competitive programming competitions, honing my skills and embracing the thrill of unraveling intricate problems. Beyond algorithms, I'm captivated by the world of distributed systems, exploring their potential to revolutionize computing. Additionally, my interests extend to machine learning, where I'm currently working with OpenCV and exploring the fascinating world of computer vision and machine learning algorithms.
      </p>
      <br />
      <p className="mb-4">
        Proficient in C, C++, and Java, I enjoy the creative process of turning concepts into tangible software. As a continuous learner and team player, I value collaborative efforts, recognizing the power of collective intelligence to drive innovation. I'm always open to new opportunities and collaborations, so let's connect and explore the vast possibilities in the world of technology!
      </p>
      <br />
      <p>
        <span className="italic">Outside the coding realm</span>, I unwind by playing video games, watching movies, and playing basketball. I'm an avid learner, currently diving into{" "}
        <span className="font-medium">the realm of reinforcement learning</span>. Let's connect and explore the possibilities in the ever-evolving world of technology!
      </p>
    </motion.section>
  );
}
