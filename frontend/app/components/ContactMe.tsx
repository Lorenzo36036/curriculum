// components/ContactPage.js
"use client";
import { Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";
import IconSocials from "./IconSocials";
import FormField from "./input/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContactSchema, formContactData } from "../tools/Zod";
import FormFieldTextarea from "./input/FormFieldTextarea";
import { sendEmailToUser } from "../api/send";
import { useState } from "react";
import Spiner from "./Spiner";

const ContactPage = () => {
  const [send, setSend] = useState<boolean | null>(null);
  const [dowload, setDowload] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormContactSchema>({
    resolver: zodResolver(formContactData),
  });

  const onSubmitData = async (data: FormContactSchema): Promise<void> => {
    try {
      setDowload(true);
      const res = await sendEmailToUser(data);
      console.log("SUCCESS", res);
      setSend(res.success);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Ocurrió un error inesperado");
      }
    } finally {
      setDowload(false);
    }
  };

  return (
    <div
      id="contacto"
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
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
                      href="tel:+5804249701950"
                      className="text-xl text-blue-600 font-semibold hover:underline"
                    >
                      +58 04249701950
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
                    <p className="flex items-center gap-2 text-base text-green-700 mt-2 font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
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

            <form
              className="space-y-6 text-gray-500"
              onSubmit={handleSubmit(onSubmitData)}
              method="POST"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Nombre 
                </label>
                <FormField
                  id="name"
                  type="text"
                  placeholder="Nombre completo"
                  name="name"
                  register={register}
                  error={errors.name}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email 
                </label>
                <FormField
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  register={register}
                  error={errors.email}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Asunto 
                </label>

                <FormField
                  id="subject"
                  type="text"
                  placeholder="Asunto del mensaje"
                  name="subject"
                  register={register}
                  error={errors.subject}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Mensaje 
                </label>
                <FormFieldTextarea
                  id="message"
                  placeholder="Motivo del mensaje"
                  name="message"
                  register={register}
                  error={errors.message}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className={`${
                    send === true
                      ? "bg-gray-400"
                      : "hover:bg-blue-700 hover:shadow-xl"
                  } w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg text-lg font-bold text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:outline-blue-500 transition-all duration-200 shadow-lg `}
                  disabled={send === true}
                >
                  {dowload ? (
                    <Spiner />
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send
                        className="w-6 h-6 ml-3 -rotate-12"
                        strokeWidth={2}
                      />
                    </>
                  )}
                </button>

                <div className="w-full text-center">
                  <span
                    className={`${
                      send === null ? "opacity-0" : "opacity-100"
                    } ${
                      send ? "text-green-600" : "text-red-600"
                    } ase-in-out transition-all duration-399   mt-4 text-xl font-medium text-gray-700 block`}
                  >
                    {" "}
                    {send === true
                      ? "Mensaje enviado correctamente"
                      : "Ocurrio un error vuelve a intentarlo"}
                  </span>

                  <span className="text-red-600 text-lg"></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
