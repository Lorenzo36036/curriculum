import { Code2, Database, Globe, Smartphone, Server, Cpu } from "lucide-react";
const projects = [
  {
    title: "Eprisma Blog",
    description: "Blog informativo desarrollado con arquitectura moderna para alto rendimiento y SEO.",
    technologies: [
      { name: "React", icon: <Code2 size={14} /> },
      { name: "Next.js", icon: <Globe size={14} /> },
      { name: "Tailwind", icon: <Cpu size={14} /> },
      { name: "Strapi", icon: <Database size={14} /> },
      { name: "GraphQL", icon: <Server size={14} /> },
    ],
  },
  {
    title: "Torna App",
    description: "Desarrollo de una aplicación móvil de streaming; trabajé de la mano en la maquetación y en el frontend.",
    technologies: [
      { name: "React Native", icon: <Smartphone size={14} /> },
      { name: "Tailwind", icon: <Cpu size={14} /> },
      { name: "Rest API", icon: <Server size={14} /> },
      { name: "Firebase", icon: <Database size={14} /> },
    ],
  },
  {
    title: "PgAdmin Web",
    description: "Gestor web para PgAdmin4 que permite un análisis fácil de datos y administración de bases de datos relacionales.",
    technologies: [
      { name: "React", icon: <Code2 size={14} /> },
      { name: "Next.js", icon: <Globe size={14} /> },
      { name: "Nest.js", icon: <Server size={14} /> },
      { name: "Tailwind", icon: <Cpu size={14} /> },
      { name: "PostgreSQL", icon: <Database size={14} /> },
    ],
  },
];

export default function ProjectCarousel() {
  return (
    <div id="proyectos" className="bg-gray-50 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-normal text-gray-800">
          Proyectos Profesionales
        </h2>
        <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2"></span>
      </div>

      <div className="2xl:justify-center flex overflow-x-auto gap-6 px-8 pb-8 snap-x snap-mandatory scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[320px] md:min-w-100 shrink-0 snap-center"
          >
            <div className="w-120 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    <span className="text-gray-500">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-gray-400 text-sm mt-4 md:hidden">
        ← Desliza para ver más →
      </p>
    </div>
  );
}