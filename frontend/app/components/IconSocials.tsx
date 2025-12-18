import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function IconSocials() {
  return (
    <div className="flex space-x-5">
      <Link
        href="https://www.linkedin.com/in/lorenzo-parra-594456217/
"
        className="p-3 border-2 border-gray-500 rounded-full text-gray-500 hover:border-blue-500 hover:text-blue-500 transition duration-300"
      >
        <Linkedin className="w-7 h-7" strokeWidth={1.5} />
      </Link>
      <Link
        href="https://github.com/Lorenzo36036?tab=repositories"
        className="p-3 border-2 border-gray-500 rounded-full text-gray-500 hover:border-blue-500 hover:text-blue-500 transition duration-300"
      >
        <Github className="w-7 h-7" strokeWidth={1.5} />
      </Link>
      <Link
        href="https://www.facebook.com/lorenzo.parra.127"
        className="p-3 border-2 border-gray-500 rounded-full text-gray-500 hover:border-blue-500 hover:text-blue-500 transition duration-300"
      >
        <Facebook className="w-7 h-7" strokeWidth={1.5} />
      </Link>
    </div>
  );
}

export default IconSocials;
