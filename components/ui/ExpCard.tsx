"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "w-full h-full flex items-center justify-center transition-transform duration-300 hover:-translate-y-1",
          containerClassName
        )}
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
      >
        <div
          className={cn(
            "w-full h-full flex items-center justify-center relative",
            className
          )}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full h-auto rounded-2xl transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = React.forwardRef<
  HTMLElement,
  React.AllHTMLAttributes<HTMLElement> & {
    as?: React.ElementType;
  }
>(({ 
  as: Component = "div",
  children,
  className,
  ...rest 
}, ref) => {
  return React.createElement(
    Component,
    {
      ref,
      className: cn("transition-colors duration-200", className),
      ...rest,
    },
    children
  );
});

CardItem.displayName = "CardItem";

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    return [false, () => {}] as [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  }
  return context;
};