"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 0.4,
  accentWordIndex = 5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  accentWordIndex?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        y: 0,
      },
      {
        duration: duration || 0.4,
        delay: stagger(0.06),
      }
    );
  }, [animate, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0, y: 8 }}
              className={`${idx >= accentWordIndex ? "text-purple" : "text-white"} inline-block mr-2 sm:mr-3`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-2 sm:my-3">
        <div className="text-white leading-tight tracking-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
