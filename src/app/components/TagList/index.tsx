import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface TagListProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export function TagList({ children, className = "" }: TagListProps) {
  const defaultStyles = "flex flex-wrap gap-2";

  return (
    <ul className={twMerge(defaultStyles, className as ClassNameValue)}>
      {children}
    </ul>
  );
}

TagList.displayName = "TagList";
