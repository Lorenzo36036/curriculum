import React from "react";
import ServiceCard from "./serviceMe/CardService";
import { servicesData } from "../assets/ServiceMe";

const ServicesMe = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-normal text-gray-800">
            Servicios Profesionales
          </h2>
          <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2 mb-4"></span>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrezco soluciones completas de desarrollo web adaptadas a tus
            necesidades específicas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              price={service.price}
            />
          ))}
        </div>
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Los precios son orientativos. Cada proyecto es único y se cotiza
            según sus necesidades específicas.
          </p>
          <p className="mt-1">
            Ofrezco modalidades por proyecto, por horas, o retainer mensual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesMe;
