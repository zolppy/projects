import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { montserrat } from "@/utils/fonts";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h1
            className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center md:text-start`}
          >
            Project Showcase
          </h1>
          <p className="mt-2 opacity-90">
            Highlighting my web development journey
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/zolppy"
            target="_blank"
            className="hover:text-blue-200 transition-colors"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/zolppy"
            target="_blank"
            className="hover:text-blue-200 transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
}

Header.displayName = "Header";
