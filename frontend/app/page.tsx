import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import EducationMe from "./components/EducationMe";
import Footer from "./components/footer";
import SectionPrimary from "./components/SectionPrimary";
import ServicesMe from "./components/ServiceMe";
import SkillsMe from "./components/SkillsMe";

export default function Home() {
  return (
    <>
      <main className="bg-white  min-h-screen w-full ">
        <SectionPrimary />
        <AboutMe/>
        <SkillsMe/>
        <EducationMe/>
        <ServicesMe />
        <ContactMe/>
        <Footer/>
      </main>
    </>
  );
}
