import React from 'react';

const AboutMe = () => {
  // Datos para los puntos de "Valores y Enfoque de Trabajo"
  const workValues = [
    { title: 'Calidad ante todo', description: 'Código limpio, testeado y mantenible' },
    { title: 'Responsabilidad', description: 'Cumplimiento de las entregas' },
    { title: 'Constancia', description: 'Capacidad para abordar problemas complejos' },
    { title: 'Evolucion continua', description: 'Vanguardia tecnologica del dia a dia' },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="sobre-mi">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-normal text-center text-gray-800 mb-12">
          Sobre Mí
          <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2"></span>
        </h2>

        <div className="space-y-8 text-gray-700">
          <h3 className="text-xl font-medium text-gray-800">Mi Historia Profesional</h3>
          <p className="text-lg leading-relaxed">
            Soy un desarrollador Full Stack apasionado por crear soluciones digitales que marcan la diferencia. Con un 1 año de experiencia, he trabajado en proyectos web, escritorio y móvil.
          </p>
          <p className="text-lg leading-relaxed">
            Mi enfoque está en escribir código limpio, mantenible y escalable, siempre buscando las mejores prácticas y las últimas tecnologías para ofrecer resultados excepcionales.
          </p>
          <p className="text-lg leading-relaxed">
            Creo firmemente en la colaboración, el aprendizaje continuo y en entregar valor real a los clientes a través de soluciones tecnológicas bien pensadas.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-medium text-gray-800 mb-8">Valores y Enfoque de Trabajo</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {workValues.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-2"
              >
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-sm font-semibold text-gray-800">{value.title}</span>
                </div>
                <p className="text-sm text-gray-500 ml-4">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;