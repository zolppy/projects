import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface TagProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export function Tag({ children, className = "" }: TagProps) {
  const defaultStyle = "px-2 py-1 rounded-full text-xs font-medium";

  return (
    <li className={twMerge(defaultStyle, className as ClassNameValue)}>
      {children}
    </li>
  );
}

Tag.displayName = "Tag";
