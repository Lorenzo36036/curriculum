import React from "react";

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-[#0b162c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p className="text-gray-400">
            © 2025 Lorenzo Parra. Todos los derechos reservados.
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-blue-300 font-medium">
            Desarrollador Full Stack | Web Developer | Desarrollador
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
