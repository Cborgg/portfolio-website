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
        Hello! I&apos;m a second-year undergraduate student at NIT-K Surathkal, majoring in Electronics and Communication Engineering. My academic journey is shaped by a profound interest in algorithmic problem-solving, where I regularly participate in competitive programming competitions, honing my skills and embracing the thrill of unraveling intricate problems. Beyond algorithms, I&apos;m captivated by the world of distributed systems, exploring their potential to revolutionize computing. Additionally, my interests extend to machine learning, where I&apos;m currently working with OpenCV and exploring the fascinating world of computer vision and machine learning algorithms.
      </p>
      <br />
      <p className="mb-4">
        Proficient in C, C++, and Java, I enjoy the creative process of turning concepts into tangible software. As a continuous learner and team player, I value collaborative efforts, recognizing the power of collective intelligence to drive innovation. I&apos;m always open to new opportunities and collaborations, so let&apos;s connect and explore the vast possibilities in the world of technology!
      </p>
      <br />
      <p>
        <span className="italic">Outside the coding realm</span>, I unwind by playing video games, watching movies, and playing basketball. I&apos;m an avid learner, currently diving into{" "}
        <span className="font-medium">the realm of reinforcement learning</span>. Let&apos;s connect and explore the possibilities in the ever-evolving world of technology!
      </p>
    </motion.section>
  );
}
