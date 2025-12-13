import Link from "next/link";
import Image from "next/image";

function SectionPrimary() {
  return (
    <div className="h-screen w-full bg-linear-to-b from-blue-100 to-pink-100">
      <div className="gap-7 h-full w-full flex flex-col items-center justify-center text-black">
        <div className="space-y-4 flex-col text-center">
          <span className="text-[#155DFC] text-xl">Hola soy</span>
          <h1 className="text-6xl">Lorenzo Parra</h1>
          <h2 className="text-3xl text-[#4A5565]">Full Stack Developer</h2>
          <div className="text-base w-full justify-center flex ">
            <p className="w-[60%] text-xl text-[#4A5565]">
              Creo experiencias digitales excepcionales que combinan diseño
              elegante con código robusto. Especializado en desarrollo web
              moderno y soluciones escalables.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  w-36  rounded-md font-medium"
          >
            Contactar
          </Link>

          <Link
            href="/login"
            className="flex  items-center justify-center gap-1 bg-white  text-black  py-2 w-36 rounded-md font-medium"
          >
            Ver proyectos
          </Link>
        </div>

        <div className="flex gap-6 scale-125 my-4">
          <Link href={""} className="cursor-pointer">
            <Image
              src="/svg/linkdl-rounded.svg"
              width={40}
              height={40}
              alt="icon-linkdl"
            />
          </Link>

          <Link href={""} className="cursor-pointer">
            <Image
              src="/svg/github-rounded.svg"
              width={40}
              height={40}
              alt="icon-github"
            />
          </Link>

          <Link href={""}>
            <Image
              className="cursor-pointer"
              src="/svg/email-rounded.svg"
              width={40}
              height={40}
              alt="icon-email"
            />
          </Link>
        </div>

        <div className="flex w-full absolute bottom-16  justify-center  ">
          <Link href={""}>
            <Image
              className="cursor-pointer"
              src="/svg/arrow.svg"
              width={40}
              height={40}
              alt="icon-arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionPrimary;
