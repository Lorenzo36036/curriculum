// components/ContactPage.js
import { Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";
import IconSocials from "./IconSocials";

const ContactPage = () => {
  return (
    <div id="contacto" className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Contacto</h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
            Hablemos y hagamos realidad tus ideas.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Información de Contacto
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                No dudes en contactarme a través de cualquiera de estos medios
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <Mail
                    className="w-7 h-7 text-blue-600 mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:prueba@email.com"
                      className="text-xl text-blue-600 font-semibold hover:underline break-all"
                    >
                      alejandro36036@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <Phone
                    className="w-7 h-7 text-blue-600 mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">
                      Teléfono
                    </p>
                    <a
                      href="tel:+3480000000"
                      className="text-xl text-blue-600 font-semibold hover:underline"
                    >
                      +58 000 00 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <MapPin
                    className="w-7 h-7 text-blue-600 mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">
                      Ubicación
                    </p>
                    <p className="text-xl text-blue-600 font-semibold capitalize">
                      Venezuela, San Félix
                    </p>
                    <p className="text-base text-gray-500 mt-2 font-medium">
                      Disponible para trabajo remoto
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Redes Sociales
              </h2>
              <IconSocials />
            </section>

            <div className="p-6 bg-blue-50 rounded-xl flex items-start space-x-4">
              <div className="mt-1 shrink-0">
                <CheckCircle className="w-7 h-7 text-blue-600 fill-blue-100" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Disponible para nuevos proyectos
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Beneficios de Registrarse: Acceso a mi disponibilidad en
                  tiempo real y respuesta pronta a consultas
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Envíame un Mensaje
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Completa el formulario y te responderé en menos de 24 horas
            </p>

            <form className="space-y-6 text-gray-500">
              <div className="space-y-2">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre completo"
                  className="block w-full px-5 py-4 border-gray-400 rounded-lg shadow-sm placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-base border"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="tu@email.com"
                  className="block w-full px-5 py-4 border-gray-400 rounded-lg shadow-sm placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-base border"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="asunto"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  placeholder="¿De qué quieres hablar?"
                  className="block w-full px-5 py-4 border-gray-400  rounded-lg shadow-sm placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-base border"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={6}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="block w-full px-5 py-4 border-gray-400  rounded-lg shadow-sm placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-base border resize-none"
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-xl"
                >
                  Enviar Mensaje
                  <Send className="w-6 h-6 ml-3 -rotate-12" strokeWidth={2} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
