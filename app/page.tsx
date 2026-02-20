"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaServer,
  FaLayerGroup,
  FaMobile,
  FaLink,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaIcons,
  FaPalette,
  FaCloud,
  FaBox,
  FaGear,
  FaCodeBranch,
  FaCircleNodes,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiTestinglibrary,
  SiFastapi,
  SiPostgresql,
  SiSqlalchemy,
  SiPydantic,
  SiZod,
  SiBun,
  SiReactquery,
  SiReacthookform,
} from "react-icons/si";

import { Skill } from "@/utils/enums/skill";
import brArchitects from "@/public/br-architects.webp";
import fashionBlog from "@/public/fashion-blog.webp";
import wizardRegister from "@/public/wizard-register.webp";
import interiorDesign from "@/public/interior-design.webp";
import thinCrustPizza from "@/public/thin-crust-pizza.webp";
import travelAgency from "@/public/travel-agency.webp";

const SKILLS = [
  { name: Skill.ALEMBIC, icon: FaCodeBranch, color: "text-amber-600" },
  { name: Skill.AXIOS, icon: FaCloud, color: "text-blue-400" },
  { name: Skill.BUN, icon: SiBun, color: "text-amber-400" },
  { name: Skill.DOCKER, icon: FaDocker, color: "text-blue-500" },
  { name: Skill.FASTAPI, icon: SiFastapi, color: "text-teal-500" },
  { name: Skill.FRAMER_MOTION, icon: SiFramer, color: "text-purple-500" },
  { name: Skill.GIT, icon: FaGitAlt, color: "text-orange-600" },
  { name: Skill.HERO_UI, icon: FaPalette, color: "text-purple-400" },
  { name: Skill.NEXT, icon: SiNextdotjs, color: "text-white" },
  { name: Skill.POSTGRESQL, icon: SiPostgresql, color: "text-blue-300" },
  { name: Skill.PYDANTIC, icon: SiPydantic, color: "text-red-500" },
  { name: Skill.PYDANTIC_SETTINGS, icon: FaGear, color: "text-slate-400" },
  { name: Skill.PYTHON, icon: FaPython, color: "text-yellow-400" },
  { name: Skill.REACT_ICONS, icon: FaIcons, color: "text-pink-400" },
  { name: Skill.REACT_QUERY, icon: SiReactquery, color: "text-red-400" },
  {
    name: Skill.REACT_TESTING_LIBRARY,
    icon: SiTestinglibrary,
    color: "text-red-500",
  },
  { name: Skill.SQLALCHEMY, icon: SiSqlalchemy, color: "text-red-400" },
  { name: Skill.TAILWIND_CSS, icon: SiTailwindcss, color: "text-cyan-400" },
  { name: Skill.TYPESCRIPT, icon: SiTypescript, color: "text-blue-600" },
  { name: Skill.UV, icon: FaBox, color: "text-indigo-400" },
  { name: Skill.UVICORN, icon: FaServer, color: "text-green-500" },
  { name: Skill.ZOD, icon: SiZod, color: "text-blue-500" },
  { name: Skill.ZUSTAND, icon: FaCircleNodes, color: "text-orange-400" },
  {
    name: Skill.REACT_HOOK_FORM,
    icon: SiReacthookform,
    color: "text-blue-400",
  },
];

const PROJECTS = [
  {
    title: "BR Architects",
    desc: "Descubra o mundo inovador da BR Architects – unindo criatividade, sustentabilidade e design moderno. Explore nosso portfólio de obras-primas arquitetônicas e veja como moldamos espaços que inspiram.",
    tags: [
      Skill.DOCKER,
      Skill.GIT,
      Skill.NEXT,
      Skill.TAILWIND_CSS,
      Skill.TYPESCRIPT,
    ],
    image: brArchitects.src,
    links: {
      repo: "https://github.com/zolppy/br-architects",
      demo: "https://br-architects-zol.vercel.app/",
    },
    icon: <FaLayerGroup className="w-5 h-5" />,
  },
  {
    title: "Fashion Blog",
    desc: "Descubra as últimas tendências de moda, dicas de estilo e inspiração do mundo fashion. Seu blog essencial para se manter elegante e atualizado com os looks mais quentes da indústria.",
    tags: [
      Skill.DOCKER,
      Skill.GIT,
      Skill.FRAMER_MOTION,
      Skill.NEXT,
      Skill.REACT_ICONS,
      Skill.TAILWIND_CSS,
      Skill.TYPESCRIPT,
    ],
    image: fashionBlog.src,
    links: {
      repo: "https://github.com/zolppy/fashion-blog",
      demo: "https://fashion-blog-zol.vercel.app",
    },
    icon: <FaServer className="w-5 h-5" />,
  },
  {
    title: "Interior Design",
    desc: "Explore soluções de design de interiores elegantes e modernas adaptadas ao seu estilo. Navegue pelo nosso portfólio, encontre inspiração e transforme seu espaço com ideias profissionais.",
    tags: [
      Skill.DOCKER,
      Skill.FRAMER_MOTION,
      Skill.GIT,
      Skill.NEXT,
      Skill.REACT_ICONS,
      Skill.REACT_TESTING_LIBRARY,
      Skill.TAILWIND_CSS,
      Skill.TYPESCRIPT,
    ],
    image: interiorDesign.src,
    links: {
      repo: "https://github.com/zolppy/interior-design",
      demo: "https://interior-design-zol.vercel.app",
    },
    icon: <FaMobile className="w-5 h-5" />,
  },
  {
    title: "Thin Crust Pizza",
    desc: "Descubra a arte da pizza de massa fina — crocante, saborosa e feita com ingredientes frescos. Explore receitas, dicas e inspiração para criar a pizza perfeita em casa.",
    tags: [
      Skill.DOCKER,
      Skill.FRAMER_MOTION,
      Skill.GIT,
      Skill.NEXT,
      Skill.REACT_ICONS,
      Skill.TAILWIND_CSS,
      Skill.TYPESCRIPT,
    ],
    image: thinCrustPizza.src,
    links: {
      repo: "https://github.com/zolppy/thin-crust-pizza",
      demo: "https://thin-crust-pizza.vercel.app/",
    },
    icon: <FaMobile className="w-5 h-5" />,
  },
  {
    title: "Travel Agency",
    desc: "Descubra sua próxima aventura com a Travel Agency - explore os melhores destinos, pacotes de férias personalizados e reservas sem complicações. Planeje a viagem dos seus sonhos hoje!",
    tags: [
      Skill.DOCKER,
      Skill.GIT,
      Skill.NEXT,
      Skill.REACT_ICONS,
      Skill.TAILWIND_CSS,
      Skill.TYPESCRIPT,
    ],
    image: travelAgency.src,
    links: {
      repo: "https://github.com/zolppy/travel-agency",
      demo: "https://travel-agency-zol.vercel.app",
    },
    icon: <FaMobile className="w-5 h-5" />,
  },
  {
    title: "Wizard Register",
    desc: "Cadastre-se como um mago no reino de Eldoria! Junte-se aos Arquivos Reais para desbloquear poderes místicos exclusivos, missões e recursos.",
    tags: [
      Skill.DOCKER,
      Skill.GIT,
      Skill.NEXT,
      Skill.REACT_TESTING_LIBRARY,
      Skill.TAILWIND_CSS,
      Skill.TYPESCRIPT,
      Skill.REACT_HOOK_FORM,
    ],
    image: wizardRegister.src,
    links: {
      repo: "https://github.com/zolppy/wizard-register",
      demo: "https://wizard-register.vercel.app/",
    },
    icon: <FaMobile className="w-5 h-5" />,
  },
];

const MENU_ITEMS = [
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
];

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-4 text-zinc-100">{title}</h2>
    <p className="text-zinc-400">{subtitle}</p>
  </div>
);

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#ecedee] font-sans selection:bg-[#006FEE] selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#006FEE]/20 rounded-full mix-blend-screen filter blur-[100px]"
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#7828c8]/20 rounded-full mix-blend-screen filter blur-[100px]"
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#006FEE]/10 rounded-full mix-blend-screen filter blur-[100px]"
          style={{ y: y1 }}
        />
      </div>
      <Navbar
        isBlurred
        isBordered
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] bg-zinc-900/60 border-white/10 rounded-full"
        isMenuOpen={isMenuOpen}
        maxWidth="xl"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="flex justify-between w-full">
          <NavbarBrand>
            <Link
              as={NextLink}
              className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#006FEE] to-[#7828c8] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              href="#"
            >
              Zolppy<span className="text-white">.Projects</span>
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden md:flex gap-6" justify="center">
            {MENU_ITEMS.map((item, index) => (
              <NavbarItem key={index}>
                <Link
                  as={NextLink}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-zinc-400"
            />
          </NavbarContent>
        </NavbarContent>
        <NavbarMenu className="pt-10 bg-zinc-900/95">
          {MENU_ITEMS.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                as={NextLink}
                className="w-full text-lg font-medium text-zinc-300 hover:text-white py-2"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <main className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto pt-32 pb-20 space-y-32">
        <section
          className="flex flex-col items-center text-center justify-center min-h-[60vh]"
          id="hero"
        >
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Chip
              classNames={{
                base: "bg-zinc-900/50 border border-zinc-800 mb-6",
                content:
                  "text-[#006FEE] text-xs font-medium flex gap-2 items-center",
              }}
              color="primary"
              variant="flat"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FEE] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FEE]" />
              </span>
              Disponível para novos projetos
            </Chip>
          </motion.div>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Criando experiências <br className="hidden md:block" />
            digitais <span className="text-[#006FEE]">inteligentes</span>.
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sou Gabriel, um Desenvolvedor Full Stack com experiência em
            tecnologias como Next.js, Tailwind CSS, HeroUI, TypeScript, Python e
            PostgreSQL.
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              as={Link}
              className="border-zinc-700 text-white bg-zinc-800 hover:bg-zinc-700"
              href="https://github.com/zolppy"
              size="lg"
              startContent={<FaGithub size={20} />}
              target="_blank"
              variant="bordered"
            >
              GitHub
            </Button>
            <Button
              as={Link}
              className="shadow-[0_0_40px_-10px_rgba(0,111,238,0.3)]"
              color="primary"
              endContent={<FaArrowRight size={16} />}
              href="https://linkedin.com/in/zolppy"
              size="lg"
              startContent={<FaLinkedin size={20} />}
              target="_blank"
              variant="solid"
            >
              LinkedIn
            </Button>
          </motion.div>
        </section>
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            subtitle="Ferramentas que utilizo para dar vida às ideias."
            title="Tech Stack"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill, index) => {
              const IconComponent = skill.icon;

              return (
                <Card
                  key={index}
                  isBlurred
                  isPressable
                  className="bg-zinc-900/60 border border-white/10 hover:bg-zinc-800/50 data-[pressed=true]:scale-95"
                >
                  <CardBody className="flex flex-col items-center justify-center gap-3 p-4 overflow-visible">
                    <IconComponent
                      className={`text-4xl ${skill.color} transition-transform duration-300`}
                    />
                    <span className="font-medium text-sm text-zinc-300">
                      {skill.name}
                    </span>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </motion.section>
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-zinc-100">
                Projetos Recentes
              </h2>
              <p className="text-zinc-400">
                Uma seleção de trabalhos e projetos pessoais.
              </p>
            </div>
            <Link
              as={NextLink}
              className="hidden md:flex items-center gap-2 text-sm font-medium"
              color="primary"
              href="#"
            >
              Ver todos <FaArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <Card
                key={index}
                isBlurred
                className="bg-zinc-900/40 border border-white/10 hover:border-[#006FEE]/50 hover:shadow-[0_0_40px_-10px_rgba(0,111,238,0.3)] transition-all duration-500"
              >
                <CardBody className="p-0 overflow-hidden">
                  <Image
                    removeWrapper
                    alt={project.title}
                    className="z-0 w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                    src={project.image}
                  />
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-zinc-100 flex items-center gap-2">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          className="bg-zinc-800 text-zinc-300 border border-zinc-700"
                          size="sm"
                          variant="flat"
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="px-6 pb-6 pt-0 gap-3">
                  <Button
                    as={Link}
                    className="flex-1 border-zinc-700 text-white bg-zinc-800 hover:bg-zinc-700"
                    href={project.links.repo}
                    startContent={<FaGithub size={16} />}
                    target="_blank"
                    variant="bordered"
                  >
                    Código
                  </Button>
                  {project.links.demo && (
                    <Button
                      as={Link}
                      className="flex-1 bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10"
                      href={project.links.demo}
                      startContent={<FaLink size={16} />}
                      target="_blank"
                    >
                      Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.section>
        <footer className="border-t border-zinc-800 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; 2025 Project Showcase. Construído com amor e café.</p>
          <div className="flex gap-6">
            <a
              className="text-zinc-500 hover:text-white transition-colors"
              href="https://github.com/zolppy"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
            <a
              className="text-zinc-500 hover:text-white transition-colors"
              href="https://www.linkedin.com/in/zolppy"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
