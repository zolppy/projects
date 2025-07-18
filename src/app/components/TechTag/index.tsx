import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface TechTagProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export function TechTag({ children, className = "" }: TechTagProps) {
  const defaultStyles =
    "px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800";

  return (
    <li className={twMerge(defaultStyles, className as ClassNameValue)}>
      {children}
    </li>
  );
}

TechTag.displayName = "TechTag";
