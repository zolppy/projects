import { v4 as uuid } from "uuid";
import { Img } from "@/utils/types/img";
import { Project } from "@/utils/types/project";
import architecture from "../../../public/br-architects.jpg";
import fashion from "../../../public/fashion-blog.jpg";
import interiorDesign from "../../../public/interior-design.jpg";
import pizza from "../../../public/thin-crust-pizza.jpg";
import travel from "../../../public/travel-agency.jpg";
import wizard from "../../../public/wizard-register.jpg";

const architechtureImg: Img = {
  path: architecture,
  title: "",
  alt: "",
};

const fashionImg: Img = {
  path: fashion,
  title: "",
  alt: "",
};

const interiorDesignImg: Img = {
  path: interiorDesign,
  title: "",
  alt: "",
};

const pizzaImg: Img = {
  path: pizza,
  title: "",
  alt: "",
};

const travelImg: Img = {
  path: travel,
  title: "",
  alt: "",
};

const wizardImg: Img = {
  path: wizard,
  title: "",
  alt: "",
};

const projects: Project[] = [
  {
    id: uuid(),
    img: architechtureImg,
    title: "BR Architects",
    description:
      "Discover the innovative world of BR Architects – blending creativity, sustainability, and modern design. Explore our portfolio of architectural masterpieces and learn how we shape spaces that inspire.",
    stacks: [
      {
        id: uuid(),
        title: "Frontend",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "React.js",
      },
      {
        id: uuid(),
        title: "Next.js",
      },
      {
        id: uuid(),
        title: "Tailwind CSS",
      },
      {
        id: uuid(),
        title: "Docker",
      },
      {
        id: uuid(),
        title: "TypeScript",
      },
    ],
    repoLink: "https://github.com/zolppy/br-architects",
    demoLink: "https://br-architects-zol.vercel.app",
  },
  {
    id: uuid(),
    img: fashionImg,
    title: "Fashion Blog",
    description:
      "Discover the latest fashion trends, style tips, and inspiration from the world of fashion. Your go-to blog for staying stylish and up-to-date with the industry's hottest looks.",
    stacks: [
      {
        id: uuid(),
        title: "Frontend",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "React.js",
      },
      {
        id: uuid(),
        title: "Next.js",
      },
      {
        id: uuid(),
        title: "Tailwind CSS",
      },
      {
        id: uuid(),
        title: "Docker",
      },
      {
        id: uuid(),
        title: "TypeScript",
      },
      {
        id: uuid(),
        title: "Framer Motion",
      },
      {
        id: uuid(),
        title: "React Icons",
      },
    ],
    repoLink: "https://github.com/zolppy/fashion-blog",
    demoLink: "https://fashion-blog-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: interiorDesignImg,
    title: "Interior Design",
    description:
      "Explore elegant and modern interior design solutions tailored to your style. Browse our portfolio, discover inspiration, and transform your space with professional design ideas.",
    stacks: [
      {
        id: uuid(),
        title: "Frontend",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "React.js",
      },
      {
        id: uuid(),
        title: "Next.js",
      },
      {
        id: uuid(),
        title: "Tailwind CSS",
      },
      {
        id: uuid(),
        title: "Docker",
      },
      {
        id: uuid(),
        title: "TypeScript",
      },
      {
        id: uuid(),
        title: "Framer Motion",
      },
      {
        id: uuid(),
        title: "React Icons",
      },
      {
        id: uuid(),
        title: "React Testing Library",
      },
    ],
    repoLink: "https://github.com/zolppy/interior-design",
    demoLink: "https://interior-design-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: pizzaImg,
    title: "Thin Crust Pizza",
    description:
      "Discover the art of thin crust pizza — crispy, flavorful, and made with fresh ingredients. Explore recipes, tips, and inspiration for crafting the perfect thin crust pizza at home.",
    stacks: [
      {
        id: uuid(),
        title: "Frontend",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "React.js",
      },
      {
        id: uuid(),
        title: "Next.js",
      },
      {
        id: uuid(),
        title: "Tailwind CSS",
      },
      {
        id: uuid(),
        title: "Docker",
      },
      {
        id: uuid(),
        title: "TypeScript",
      },
      {
        id: uuid(),
        title: "Framer Motion",
      },
      {
        id: uuid(),
        title: "React Icons",
      },
    ],
    repoLink: "https://github.com/zolppy/thin-crust-pizza",
    demoLink: "https://thin-crust-pizza.vercel.app/",
  },
  {
    id: uuid(),
    img: travelImg,
    title: "E-Commerce Dashboard",
    description:
      "Discover your next adventure with Travel Agency - explore top destinations, customized vacation packages, and hassle-free booking. Plan your dream trip today!",
    stacks: [
      {
        id: uuid(),
        title: "Frontend",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "React.js",
      },
      {
        id: uuid(),
        title: "Next.js",
      },
      {
        id: uuid(),
        title: "Tailwind CSS",
      },
      {
        id: uuid(),
        title: "Docker",
      },
      {
        id: uuid(),
        title: "TypeScript",
      },
      {
        id: uuid(),
        title: "React Icons",
      },
    ],
    repoLink: "https://github.com/zolppy/travel-agency",
    demoLink: "https://travel-agency-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: wizardImg,
    title: "Wizard Register",
    description:
      "Register as a mage in the kingdom of Eldoria! Join the Royal Archives to unlock exclusive mystical powers, quests, and resources.",
    stacks: [
      {
        id: uuid(),
        title: "Frontend",
      },
    ],
    skills: [
      {
        id: uuid(),
        title: "React.js",
      },
      {
        id: uuid(),
        title: "Next.js",
      },
      {
        id: uuid(),
        title: "Tailwind CSS",
      },
      {
        id: uuid(),
        title: "Docker",
      },
      {
        id: uuid(),
        title: "TypeScript",
      },
      {
        id: uuid(),
        title: "React Testing Library",
      },
      {
        id: uuid(),
        title: "React Hook Form",
      },
    ],
    repoLink: "https://github.com/zolppy/wizard-register",
    demoLink: "https://wizard-register.vercel.app/",
  },
];

export { projects };
