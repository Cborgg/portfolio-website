/*
"use client";
import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './section-heading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/theme-context'

type ExperienceElementProps = {
    theme: string
    item: {
        date: string
        icon: React.ReactNode
        title: string
        location: string
        description: string
    }
}

const ExperienceElement = ({ theme, item }: ExperienceElementProps) => {
    const { ref, inView } = useInView({ threshold: 0 })
    return (
        <div ref={ref} className='vertical-timeline-element'>
            <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                    background:
                        theme === 'light'
                            ? '#f3f4f6'
                            : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                    borderRight:
                        theme === 'light'
                            ? '0.4rem solid #9ca3af'
                            : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                    background:
                        theme === 'light' ? 'white' : 'rgba(29, 36, 50, 0.95)',
                    fontSize: '1.5rem',
                }}
            >
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='font-normal !mt-0'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                    {item.description}
                </p>
            </VerticalTimelineElement>
        </div>
    )
}

export default function Experience() {
    const { ref } = useSectionInView('Experience')
    const { theme } = useTheme()
    return (
        <section
            ref={ref}
            id='experience'
            className='scroll-mt-28 mb-28 sm:mb-40'
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    <ExperienceElement key={index} theme={theme} item={item} />
                ))}
            </VerticalTimeline>
        </section>
    )
}*/

/*"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}*/

"use client";
// Experience.tsx
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./TimelineElement";
import { experiencesData } from "@/lib/data";
import { TimeLineItem } from "@/lib/types"; // Import the appropriate types
import SectionHeading from "./section-heading";


const Experience: React.FC = () => {
  return (
    <section
      className="my-20 flex w-full scroll-mt-28 flex-col items-center justify-center gap-10"
      id="experience"
    >
        <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="#e4e4e7">
        {experiencesData.map((item: TimeLineItem, index: number) => (
          <TimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;

