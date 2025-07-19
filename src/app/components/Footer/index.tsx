import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { montserrat } from "@/utils/fonts";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3
              className={`${montserrat.className} text-2xl font-bold text-center md:text-start`}
            >
              Project Showcase
            </h3>
            <p className="mt-2 text-gray-400">
              Highlighting innovative web solutions
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/zolppy"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/zolppy"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 Project Showcase. MIT License.</p>
          <p className="mt-2">Designed and developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "Footer";
