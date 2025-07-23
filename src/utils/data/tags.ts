import { v4 as uuid } from "uuid";
import { Tag } from "@/utils/types/tag";

const cssTag: Tag = {
  id: uuid(),
  title: "CSS3",
  bgColor: "bg-blue-100",
  txtColor: "text-blue-800",
};

const dockerTag: Tag = {
  id: uuid(),
  title: "Docker",
  bgColor: "bg-sky-100",
  txtColor: "text-sky-800",
};

const framerMotionTag: Tag = {
  id: uuid(),
  title: "Framer Motion",
  bgColor: "bg-purple-100",
  txtColor: "text-purple-800",
};

const frontendTag: Tag = {
  id: uuid(),
  title: "Front-end",
  bgColor: "bg-amber-100",
  txtColor: "text-amber-800",
};

const gitTag: Tag = {
  id: uuid(),
  title: "Git",
  bgColor: "bg-orange-100",
  txtColor: "text-orange-800",
};

const githubTag: Tag = {
  id: uuid(),
  title: "Github",
  bgColor: "bg-gray-100",
  txtColor: "text-gray-800",
};

const htmlTag: Tag = {
  id: uuid(),
  title: "HTML5",
  bgColor: "bg-red-100",
  txtColor: "text-red-800",
};

const jsTag: Tag = {
  id: uuid(),
  title: "JavaScript",
  bgColor: "bg-yellow-100",
  txtColor: "text-yellow-800",
};

const nextTag: Tag = {
  id: uuid(),
  title: "Next.js",
  bgColor: "bg-slate-100",
  txtColor: "text-slate-800",
};

const reactHookFormTag: Tag = {
  id: uuid(),
  title: "React Hook Form",
  bgColor: "bg-pink-100",
  txtColor: "text-pink-800",
};

const reactIconsTag: Tag = {
  id: uuid(),
  title: "React Icons",
  bgColor: "bg-rose-100",
  txtColor: "text-rose-800",
};

const reactTag: Tag = {
  id: uuid(),
  title: "React.js",
  bgColor: "bg-cyan-100",
  txtColor: "text-cyan-800",
};

const reactTestingLibraryTag: Tag = {
  id: uuid(),
  title: "React Testing Library",
  bgColor: "bg-emerald-100",
  txtColor: "text-emerald-800",
};

const rrdTag: Tag = {
  id: uuid(),
  title: "React Router DOM",
  bgColor: "bg-fuchsia-100",
  txtColor: "text-fuchsia-800",
};

const scrumTag: Tag = {
  id: uuid(),
  title: "Scrum",
  bgColor: "bg-green-100",
  txtColor: "text-green-800",
};

const tailwindTag: Tag = {
  id: uuid(),
  title: "Tailwind CSS",
  bgColor: "bg-teal-100",
  txtColor: "text-teal-800",
};

const typescriptTag: Tag = {
  id: uuid(),
  title: "TypeScript",
  bgColor: "bg-indigo-100",
  txtColor: "text-indigo-800",
};

const useFormTag: Tag = {
  id: uuid(),
  title: "useForm",
  bgColor: "bg-violet-100",
  txtColor: "text-violet-800",
};

const tags = {
  cssTag: cssTag,
  dockerTag: dockerTag,
  framerMotionTag: framerMotionTag,
  frontendTag: frontendTag,
  gitTag: gitTag,
  githubTag: githubTag,
  htmlTag: htmlTag,
  jsTag: jsTag,
  nextTag: nextTag,
  reactHookFormTag: reactHookFormTag,
  reactIconsTag: reactIconsTag,
  reactTag: reactTag,
  reactTestingLibraryTag: reactTestingLibraryTag,
  rrdTag: rrdTag,
  scrumTag: scrumTag,
  tailwindTag: tailwindTag,
  typescriptTag: typescriptTag,
  useFormTag: useFormTag,
};

export { tags };
