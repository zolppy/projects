import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TagList } from "@/app/components/TagList";
import { Tag } from "@/app/components/Tag";
import type { Project as ProjectType } from "@/utils/types/project";
import { Tag as TagType } from "@/utils/types/tag";

export function Project({
  img,
  title,
  description,
  stacks,
  skills,
  repoLink,
  demoLink,
}: Omit<ProjectType, "id">) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 group">
      <div className="h-48 overflow-hidden">
        <Image
          src={img.path}
          title={img.title}
          alt={img.alt}
          className="w-full h-full object-cover group-hover:scale-[1.03] lg:hover:transition-[transform_0.5s_ease]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0f172a]">{title}</h3>
        <div className="flex flex-col gap-y-4">
          <p className="text-gray-600">{description}</p>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-bold">Stacks</h4>
            <TagList>
              {stacks.map(({ id, title }: TagType) => (
                <Tag key={id}>{title}</Tag>
              ))}
            </TagList>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-bold">Skills</h4>
            <TagList>
              {skills.map(({ id, title }: TagType) => (
                <Tag key={id}>{title}</Tag>
              ))}
            </TagList>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <a
            href={repoLink}
            target="_blank"
            className="px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 bg-[#2563eb] text-white hover:bg-blue-700"
          >
            <FaGithub /> Code
          </a>
          <a
            href={demoLink}
            target="_blank"
            className="px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 bg-white text-[#2563eb] border border-[#2563eb] hover:bg-blue-50"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}

Project.displayName = "Project";
