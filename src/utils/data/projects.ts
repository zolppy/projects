import { v4 as uuid } from "uuid";
import { Img } from "@/utils/types/img";
import { Project } from "@/utils/types/project";
import loremIpsum from "../../../public/lorem-ipsum.avif";

const loremIpsumImg: Img = {
  path: loremIpsum,
  title: "",
  alt: "",
};

const projects: Project[] = [
  {
    id: uuid(),
    img: loremIpsumImg,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for online stores with real-time analytics, inventory management, and customer insights.",
    stacks: [
      {
        id: uuid(),
        title: "Stack 1",
      },
      {
        id: uuid(),
        title: "Stack 2",
      },
      {
        id: uuid(),
        title: "Stack 3",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "Skill 1",
      },
      {
        id: uuid(),
        title: "Skill 2",
      },
      {
        id: uuid(),
        title: "Skill 3",
      },
    ],
    repoLink: "",
    demoLink: "",
  },
  {
    id: uuid(),
    img: loremIpsumImg,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for online stores with real-time analytics, inventory management, and customer insights.",
    stacks: [
      {
        id: uuid(),
        title: "Stack 1",
      },
      {
        id: uuid(),
        title: "Stack 2",
      },
      {
        id: uuid(),
        title: "Stack 3",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "Skill 1",
      },
      {
        id: uuid(),
        title: "Skill 2",
      },
      {
        id: uuid(),
        title: "Skill 3",
      },
    ],
    repoLink: "",
    demoLink: "",
  },
  {
    id: uuid(),
    img: loremIpsumImg,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for online stores with real-time analytics, inventory management, and customer insights.",
    stacks: [
      {
        id: uuid(),
        title: "Stack 1",
      },
      {
        id: uuid(),
        title: "Stack 2",
      },
      {
        id: uuid(),
        title: "Stack 3",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "Skill 1",
      },
      {
        id: uuid(),
        title: "Skill 2",
      },
      {
        id: uuid(),
        title: "Skill 3",
      },
    ],
    repoLink: "",
    demoLink: "",
  },
];

export { projects };
