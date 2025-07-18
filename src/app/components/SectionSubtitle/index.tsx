import { ReactNode } from "react";

interface SectionSubtitleProps {
  children: ReactNode;
}

export function SectionSubtitle({ children }: SectionSubtitleProps) {
  return (
    <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
      {children}
    </p>
  );
}

SectionSubtitle.displayName = "SectionSubtitle";
