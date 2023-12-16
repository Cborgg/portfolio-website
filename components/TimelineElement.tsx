
// TimelineElement.tsx
import React from "react";
import { VerticalTimelineElementProps, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { TimeLineItem } from "@/lib/types"; // Import the appropriate types
import { useTheme } from "@/context/theme-context";

interface TimelineElementProps extends VerticalTimelineElementProps {
  item: TimeLineItem;
}

const TimelineElement: React.FC<TimelineElementProps> = ({ item, ...props }) => {
    const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        {...props}
        contentStyle={{
          // ... your content style
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
          // ... your icon style
          background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
        }}
        visible={inView}
      >
        <h4 className="font-semibold">{item.title}</h4>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-zinc-700 dark:text-white/75">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}

export default TimelineElement;
