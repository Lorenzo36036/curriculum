import AboutMe from "../../components/page-curriculum/AboutMe";
import ContactMe from "../../components/page-curriculum/ContactMe";
import EducationMe from "../../components/page-curriculum/EducationMe";
import Footer from "../../components/page-curriculum/footer";
import ProjectCard from "../../components/ProjectCard";
import SectionPrimary from "../../components/SectionPrimary";
import ServicesMe from "../../components/page-curriculum/ServiceMe";
import SkillsMe from "../../components/page-curriculum/SkillsMe";

export default function Home() {
  return (
    <>
      <main className="bg-white  min-h-screen w-full ">
        <SectionPrimary />
        <AboutMe/>
        <SkillsMe/>
        <EducationMe/>
        <ServicesMe />
        <ProjectCard />
        <ContactMe/>
        <Footer/>
      </main>
    </>
  );
}
