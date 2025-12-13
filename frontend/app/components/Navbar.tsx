"use client";
import Link from "next/link";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const links = [
    {
      name: "Sobre mí",
      href: "#sobre-mi",
    },
    {
      name: "Servicios",
      href: "#servicios",
    },
    {
      name: "Proyectos",
      href: "#proyectos",
    },
    {
      name: "Contactos",
      href: "#contactos",
    },
    {
      name: "Consultar",
      href: "#consultar",
    },
  ];

  return (
    <>
      <div className="shadow-2xl shadow-amber-500">
        <Bars3Icon
          onClick={() => setShow(!show)}
          className={`lg:hidden h-14 w-14 ${
            show ? "text-gray-700" : "text-white"
          }    absolute cursor-pointer`}
          style={{
            textShadow: "40px 4px 0 #000000, 40px 4px 0 #000000",
          }}
        />
      </div>

      <nav
        className={`${
          show && "hidden"
        }   flex bg-[#191313] gap-12 lg:gap-0 w-fit h-screen lg:h-auto lg:w-full flex-col lg:flex-row text-white px-12 py-24 lg:px-6 lg:py-4  items-center  lg:justify-between shadow-md`}
      >
        <div className="text-xl lg:text-md  font-semibold">
          Developer Full Stack
        </div>
        <ul className=" flex flex-col lg:flex-row gap-14 lg:gap-4 ">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="hover:text-blue-400 text-xl font-normal"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center  lg:flex-row space-y-8 lg:space-y-0  lg:space-x-4">
          <Link
            href="/login"
            className="flex  items-center justify-center gap-1 bg-white  text-black  py-2 w-36 rounded-md font-medium"
          >
            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
            Iniciar sesion
          </Link>
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  w-36  rounded-md font-medium"
          >
            <UserPlusIcon className={"w-5 h-5"} />
            Registrarse
          </Link>
        </div>
      </nav>
    </>
  );
}
