import { Header } from "@/app/components/Header";
import { SectionTitle } from "@/app/components/SectionTitle";
import { SectionSubtitle } from "@/app/components/SectionSubtitle";
import { TagList } from "@/app/components/TagList";
import { Tag } from "@/app/components/Tag";
import { Project } from "@/app/components/Project";
import { Footer } from "@/app/components/Footer";
import { projects } from "@/utils/data/projects";
import {
  dockerTag,
  framerMotionTag,
  nextTag,
  reactHookFormTag,
  reactIconsTag,
  reactTag,
  reactTestingLibraryTag,
  tailwindTag,
  typescriptTag,
} from "@/utils/data/tags";
import { Project as ProjectType } from "@/utils/types/project";
import { Tag as TagType } from "@/utils/types/tag";
import { TailwindColor } from "@/utils/enums/tailwindColor";
import { getTagColorClasses } from "@/utils/helpers/getTagColorClasses";

export default function Home() {
  const tags = [
    dockerTag,
    framerMotionTag,
    nextTag,
    reactHookFormTag,
    reactIconsTag,
    reactTag,
    reactTestingLibraryTag,
    tailwindTag,
    typescriptTag,
  ];

  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle>
              <span className="text-[#2563eb]">Innovative</span> Web Solutions
            </SectionTitle>
            <SectionSubtitle>
              Explore my collection of web applications built with modern
              technologies. Each project demonstrates problem-solving skills and
              technical expertise.
            </SectionSubtitle>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
              <TagList className="justify-center gap-3">
                {tags.map(({ id, title, color }: TagType) => (
                  <Tag key={id} className={getTagColorClasses(color)}>
                    {title}
                  </Tag>
                ))}
              </TagList>
            </div>
          </div>
        </section>
        <section className="py-16 bg-[#f8fafc]">
          <div className="container mx-auto px-4">
            <SectionTitle>
              Featured <span className="text-[#7c3aed]">Projects</span>
            </SectionTitle>
            <SectionSubtitle>
              Below you will find my most significant web development projects.
              Click on any project to learn more.
            </SectionSubtitle>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects.map(
                ({
                  id,
                  img,
                  title,
                  description,
                  stacks,
                  skills,
                  repoLink,
                  demoLink,
                }: ProjectType) => (
                  <Project
                    key={id}
                    img={img}
                    title={title}
                    description={description}
                    stacks={stacks}
                    skills={skills}
                    repoLink={repoLink}
                    demoLink={demoLink}
                  />
                )
              )}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

Home.displayName = "Home";
