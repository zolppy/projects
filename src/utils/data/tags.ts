import { v4 as uuid } from "uuid";
import { Tag } from "@/utils/types/tag";

/* General */
const dockerTag: Tag = {
  id: uuid(),
  title: "Docker",
  bgColor: "bg-sky-100",
  txtColor: "text-sky-800",
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

/* Front-end */
const cssTag: Tag = {
  id: uuid(),
  title: "CSS3",
  bgColor: "bg-blue-100",
  txtColor: "text-blue-800",
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
const htmlTag: Tag = {
  id: uuid(),
  title: "HTML5",
  bgColor: "bg-red-100",
  txtColor: "text-red-800",
};
const javaScriptTag: Tag = {
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
  bgColor: "bg-lime-100",
  txtColor: "text-lime-800",
};
const reactRouterDom: Tag = {
  id: uuid(),
  title: "React Router DOM",
  bgColor: "bg-fuchsia-100",
  txtColor: "text-fuchsia-800",
};
const tailwindTag: Tag = {
  id: uuid(),
  title: "Tailwind CSS",
  bgColor: "bg-teal-100",
  txtColor: "text-teal-800",
};
const typeScriptTag: Tag = {
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

/* Artificial Intelligence */
const artificialIntelligenceTag: Tag = {
  id: uuid(),
  title: "Artificial Inteligence",
  bgColor: "bg-emerald-100",
  txtColor: "text-emerald-800",
};
const chromaDbTag: Tag = {
  id: uuid(),
  title: "ChromaDB",
  bgColor: "bg-red-100",
  txtColor: "text-red-800",
};
const kagglehubTag: Tag = {
  id: uuid(),
  title: "Kagglehub",
  bgColor: "bg-amber-100",
  txtColor: "text-amber-800",
};
const langchainTag: Tag = {
  id: uuid(),
  title: "LangChain",
  bgColor: "bg-blue-100",
  txtColor: "text-blue-800",
};
const matplotlibTag: Tag = {
  id: uuid(),
  title: "Matplotlib",
  bgColor: "bg-orange-100",
  txtColor: "text-orange-800",
};
const numpyTag: Tag = {
  id: uuid(),
  title: "Numpy",
  bgColor: "bg-blue-100",
  txtColor: "text-blue-800",
};
const openCvTag: Tag = {
  id: uuid(),
  title: "OpenCV",
  bgColor: "bg-green-100",
  txtColor: "text-green-800",
};
const pandasTag: Tag = {
  id: uuid(),
  title: "Pandas",
  bgColor: "bg-red-100",
  txtColor: "text-red-800",
};
const pillowTag: Tag = {
  id: uuid(),
  title: "Pillow",
  bgColor: "bg-purple-100",
  txtColor: "text-purple-800",
};
const pythonTag: Tag = {
  id: uuid(),
  title: "Python",
  bgColor: "bg-yellow-100",
  txtColor: "text-yellow-800",
};
const scikitLearnTag: Tag = {
  id: uuid(),
  title: "ScikitLearn",
  bgColor: "bg-sky-100",
  txtColor: "text-sky-800",
};
const streamlitTag: Tag = {
  id: uuid(),
  title: "Streamlit",
  bgColor: "bg-green-100",
  txtColor: "text-green-800",
};
const tensorFlowTag: Tag = {
  id: uuid(),
  title: "TensorFlow",
  bgColor: "bg-rose-100",
  txtColor: "text-rose-800",
};

const tags = {
  // General
  dockerTag,
  gitTag,
  githubTag,

  // Front-end
  cssTag,
  framerMotionTag,
  frontendTag,
  htmlTag,
  javaScriptTag,
  nextTag,
  reactHookFormTag,
  reactIconsTag,
  reactTag,
  reactTestingLibraryTag,
  reactRouterDom,
  tailwindTag,
  typeScriptTag,
  useFormTag,

  // Artificial Intelligence
  artificialIntelligenceTag,
  chromaDbTag,
  kagglehubTag,
  langchainTag,
  matplotlibTag,
  numpyTag,
  openCvTag,
  pandasTag,
  pillowTag,
  pythonTag,
  scikitLearnTag,
  streamlitTag,
  tensorFlowTag,
};

export { tags };
