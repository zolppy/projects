import { Img } from "@/utils/types/img";
import { Tag } from "@/utils/types/tag";

interface Project {
  id: string;
  img: Img;
  title: string;
  description: string;
  stacks: Tag[];
  skills: Tag[];
  repoLink: string;
  demoLink: string;
}

export type { Project };
