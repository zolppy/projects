import { v4 as uuid } from "uuid";
import { Project } from "@/utils/types/project";
import * as images from "@/utils/data/images";
import { tags } from "@/utils/data/tags";

const projects: Project[] = [
  {
    id: uuid(),
    img: images.architechtureImg,
    title: "BR Architects",
    description:
      "Discover the innovative world of BR Architects – blending creativity, sustainability, and modern design. Explore our portfolio of architectural masterpieces and learn how we shape spaces that inspire.",
    stacks: [tags.frontendTag],
    skills: [
      tags.reactTag,
      tags.nextTag,
      tags.tailwindTag,
      tags.dockerTag,
      tags.typeScriptTag,
    ],
    repoLink: "https://github.com/zolppy/br-architects",
    demoLink: "https://br-architects-zol.vercel.app",
  },
  {
    id: uuid(),
    img: images.fashionImg,
    title: "Fashion Blog",
    description:
      "Discover the latest fashion trends, style tips, and inspiration from the world of fashion. Your go-to blog for staying stylish and up-to-date with the industry's hottest looks.",
    stacks: [tags.frontendTag],
    skills: [
      tags.reactTag,
      tags.nextTag,
      tags.tailwindTag,
      tags.dockerTag,
      tags.typeScriptTag,
      tags.framerMotionTag,
      tags.reactIconsTag,
    ],
    repoLink: "https://github.com/zolppy/fashion-blog",
    demoLink: "https://fashion-blog-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: images.interiorDesignImg,
    title: "Interior Design",
    description:
      "Explore elegant and modern interior design solutions tailored to your style. Browse our portfolio, discover inspiration, and transform your space with professional design ideas.",
    stacks: [tags.frontendTag],
    skills: [
      tags.reactTag,
      tags.nextTag,
      tags.tailwindTag,
      tags.dockerTag,
      tags.typeScriptTag,
      tags.framerMotionTag,
      tags.reactIconsTag,
      tags.reactTestingLibraryTag,
    ],
    repoLink: "https://github.com/zolppy/interior-design",
    demoLink: "https://interior-design-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: images.pizzaImg,
    title: "Thin Crust Pizza",
    description:
      "Discover the art of thin crust pizza — crispy, flavorful, and made with fresh ingredients. Explore recipes, tips, and inspiration for crafting the perfect thin crust pizza at home.",
    stacks: [tags.frontendTag],
    skills: [
      tags.reactTag,
      tags.nextTag,
      tags.tailwindTag,
      tags.dockerTag,
      tags.typeScriptTag,
      tags.framerMotionTag,
      tags.reactIconsTag,
    ],
    repoLink: "https://github.com/zolppy/thin-crust-pizza",
    demoLink: "https://thin-crust-pizza.vercel.app/",
  },
  {
    id: uuid(),
    img: images.travelImg,
    title: "Travel Agency",
    description:
      "Discover your next adventure with Travel Agency - explore top destinations, customized vacation packages, and hassle-free booking. Plan your dream trip today!",
    stacks: [tags.frontendTag],
    skills: [
      tags.reactTag,
      tags.nextTag,
      tags.tailwindTag,
      tags.dockerTag,
      tags.typeScriptTag,
      tags.reactIconsTag,
    ],
    repoLink: "https://github.com/zolppy/travel-agency",
    demoLink: "https://travel-agency-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: images.wizardImg,
    title: "Wizard Register",
    description:
      "Register as a mage in the kingdom of Eldoria! Join the Royal Archives to unlock exclusive mystical powers, quests, and resources.",
    stacks: [tags.frontendTag],
    skills: [
      tags.reactTag,
      tags.nextTag,
      tags.tailwindTag,
      tags.dockerTag,
      tags.typeScriptTag,
      tags.reactTestingLibraryTag,
      tags.reactHookFormTag,
    ],
    repoLink: "https://github.com/zolppy/wizard-register",
    demoLink: "https://wizard-register.vercel.app/",
  },
  {
    id: uuid(),
    img: images.projectShowcaseImg,
    title: "Project Showcase",
    description:
      "Gabriel Cavalcante's main web projects, which are modern, fluid, accessible, dynamic, performant and responsive user interfaces, and built by using cutting-edge technologies.",
    stacks: [tags.frontendTag],
    skills: [
      tags.reactTag,
      tags.nextTag,
      tags.tailwindTag,
      tags.dockerTag,
      tags.typeScriptTag,
      tags.reactIconsTag,
    ],
    repoLink: "https://github.com/zolppy/projects",
    demoLink: "https://projects-zol.vercel.app",
  },
];

export { projects };
