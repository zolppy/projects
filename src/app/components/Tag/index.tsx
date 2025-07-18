import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface TagProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export function Tag({ children, className = "" }: TagProps) {
  const defaultStyles =
    "px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800";

  return (
    <li className={twMerge(defaultStyles, className as ClassNameValue)}>
      {children}
    </li>
  );
}

Tag.displayName = "Tag";
