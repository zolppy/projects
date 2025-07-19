import { v4 as uuid } from "uuid";
import { Tag } from "@/utils/types/tag";
import { TailwindColor } from "@/utils/enums/tailwindColor";

const frontendTag: Tag = {
  id: uuid(),
  title: "Front-end",
  color: TailwindColor.Amber,
};
const reactTag: Tag = {
  id: uuid(),
  title: "React.js",
  color: TailwindColor.Blue,
};
const nextTag: Tag = {
  id: uuid(),
  title: "Next.js",
  color: TailwindColor.Pink,
};
const tailwindTag: Tag = {
  id: uuid(),
  title: "Tailwind CSS",
  color: TailwindColor.Lime,
};
const dockerTag: Tag = {
  id: uuid(),
  title: "Docker",
  color: TailwindColor.Purple,
};
const typescriptTag: Tag = {
  id: uuid(),
  title: "TypeScript",
  color: TailwindColor.Gray,
};
const framerMotionTag: Tag = {
  id: uuid(),
  title: "Framer Motion",
  color: TailwindColor.Red,
};
const reactIconsTag: Tag = {
  id: uuid(),
  title: "React Icons",
  color: TailwindColor.Orange,
};
const reactTestingLibraryTag: Tag = {
  id: uuid(),
  title: "React Testing Library",
  color: TailwindColor.Yellow,
};
const reactHookFormTag: Tag = {
  id: uuid(),
  title: "React Hook Form",
  color: TailwindColor.Cyan,
};

export {
  frontendTag,
  reactTag,
  nextTag,
  tailwindTag,
  dockerTag,
  typescriptTag,
  framerMotionTag,
  reactIconsTag,
  reactTestingLibraryTag,
  reactHookFormTag,
};
