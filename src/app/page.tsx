import { Header } from "@/app/components/Header";
import { SectionTitle } from "@/app/components/SectionTitle";
import { SectionSubtitle } from "@/app/components/SectionSubtitle";
import { TechTag } from "@/app/components/TechTag";
import { Footer } from "@/app/components/Footer";

export default function Home() {
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
              <ul className="flex flex-wrap justify-center gap-3">
                <TechTag>Skill 1</TechTag>
                <TechTag className="bg-purple-100 text-purple-800">
                  Skill 2
                </TechTag>
                <TechTag className="bg-amber-100 text-amber-800">
                  Skill 3
                </TechTag>
                <TechTag className="bg-emerald-100 text-emerald-800">
                  Skill 4
                </TechTag>
                <TechTag className="bg-rose-100 text-rose-800">Skill 5</TechTag>
                <TechTag className="bg-indigo-100 text-indigo-800">
                  Skill 6
                </TechTag>
                <TechTag className="bg-cyan-100 text-cyan-800">Skill 7</TechTag>
                <TechTag className="bg-lime-100 text-lime-800">Skill 8</TechTag>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

Home.displayName = "Home";
