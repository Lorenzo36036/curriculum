import Link from "next/link";
import IconSocials from "./IconSocials";
import { ChevronDown } from "lucide-react";

function SectionPrimary() {
  return (
    <section className=" h-screen w-full bg-linear-to-b from-blue-100 to-pink-100">
      <div className="py-16 sm:py-32 gap-7 h-full w-full flex flex-col items-center justify-center text-black">
        <div className="space-y-4 flex-col text-center">
          <span className="text-[#155DFC] text-xl">Hola soy</span>
          <h1 className="text-5xl sm:text-6xl">Lorenzo Parra</h1>
          <h2 className="text-2xl sm:text-4xl text-[#4A5565]">Full Stack Developer</h2>
          <div className="text-base w-full justify-center flex ">
            <p className="text-lg max-w-95  w-full sm:text-2xl sm:max-w-160  md:max-w-180  text-[#4A5565]">
              Creo experiencias digitales excepcionales que combinan diseño
              elegante con código robusto. Especializado en desarrollo web
              moderno y soluciones escalables.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <Link
            href="#contacto"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  w-36  rounded-md font-medium"
          >
            Contactar
          </Link>

          <Link
            href="#proyectos"
            className="flex  items-center justify-center gap-1 bg-white  text-black  py-2 w-36 rounded-md font-medium"
          >
            Ver proyectos
          </Link>
        </div>

        <div className="flex gap-6 scale-125 my-4">
          <IconSocials />
        </div>

        <div className="flex">
          <ChevronDown size={74} className="text-gray-500   animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default SectionPrimary;
