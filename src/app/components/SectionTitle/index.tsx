import { ReactNode } from "react";
import { montserrat } from "@/utils/fonts";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2
      className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-2 text-center`}
    >
      {children}
    </h2>
  );
}

SectionTitle.displayName = "SectionTitle";
