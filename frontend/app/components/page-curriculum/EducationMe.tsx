/* eslint-disable @next/next/no-img-element */
"use client";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";

const EducationMe = () => {
  const [positionCarrousel, setPositionCarrousel] = useState<number>(0);

  const certifications = [
    { id: 1, imageSrc: "/certificate/certificado-nestjs.jpg" },
    { id: 2, imageSrc: "/certificate/certificado-backend.jpg" },
    { id: 3, imageSrc: "/certificate/certificado-frontend.jpg" },
  ];

  const onNext = () => {
    setPositionCarrousel((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  const onPrev = () => {
    setPositionCarrousel((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col items-center px-8 ">
      <section className="w-full flex flex-col items-center">
        
        <h2 className="text-3xl font-normal text-gray-800 mb-6 flex justify-center items-center">
          <GraduationCap className="w-10 h-10 text-blue-600 mr-2" />
          Educación
        </h2>
        
        <div className="sm:max-w-155 md:max-w-185  w-full mx-22 sm:mx-0 flex-col bg-white border border-gray-100 p-8 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-sm sm:text-xl font-bold text-gray-900 uppercase tracking-wide">
            Universidad Experimental de Guayana
          </h3>
          <p className="text-lg text-gray-600 mt-2 font-medium">
            Estudiante de Ingeniería Informática
          </p>
          <p className="text-sm text-gray-400 mt-1">En curso</p>
        </div>
      </section>

      <div className="flex flex-col w-screen justify-center items-center py-10">
        <h2 className="text-3xl font-normal text-gray-800 mb-6 flex items-center">
          <GraduationCap className="w-10 h-10 text-blue-600 mr-2" />
          Certificados
        </h2>
        <div id="default-carousel" className="relative w-full max-w-3xl px-4">
          <div className="relative h-87.5 md:h-125 overflow-hidden shadow-lg">
            {certifications.map((item, index) => (
              <div
                key={item.id}
                className={`duration-700 ease-in-out absolute inset-0 transition-all ${
                  index === positionCarrousel
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <img
                  src={item.imageSrc}
                  className="w-full h-full object-contain p-2"
                  alt="Certificado"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="absolute top-1/2 left-4 z-40 -translate-y-1/2 flex items-center justify-center w-12 h-12 cursor-pointer group focus:outline-none"
            onClick={onPrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200/50 group-hover:bg-gray-300/80 transition-all">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-4 z-40 -translate-y-1/2 flex items-center justify-center w-12 h-12 cursor-pointer group focus:outline-none"
            onClick={onNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200/50 group-hover:bg-gray-300/80 transition-all">
              <ChevronRight className="w-6 h-6 text-gray-700" />
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationMe;
