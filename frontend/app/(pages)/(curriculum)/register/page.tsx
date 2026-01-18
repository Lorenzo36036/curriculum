/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import FormField from "@/app/components/input/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, RegisterDataSchema } from "@/app/tools/Zod";
import registerPost from "@/app/api/registerPost";
import { useState } from "react";
import ToastSucefully from "@/app/components/toast/ToastSucefully";
import Spiner from "@/app/components/Spiner";
import ToastError from "@/app/components/toast/ToastError";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDataSchema>({
    resolver: zodResolver(RegisterData),
  });
  const [load, setLoad] = useState(false);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [sucefullyToast, setSucefullyToast] = useState(false);

  const onSubmitData = async (data: RegisterDataSchema): Promise<void> => {
    setLoad(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...dataSend } = data;
    try {
      await registerPost(dataSend);
      setText("Creacion exitosa");
      setSucefullyToast(true);
    } catch (error: any) {
      setSucefullyToast(false);
      if (error.response.data.statusCode === 409) {
        return setText("Email o Usuario existentes");
      }
      setText("Ocurrio un error");
    } finally {
      setLoad(false);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitData)} method="POST">
      <div
        className={`${
          show ? "opacity-100 translate-x-0" : "translate-x-full opacity-0 "
        } right-0 w-100 fixed transition-all transition-discrete duration-700 ease-in-out animate-bounce  `}
      >
        {sucefullyToast ? (
          <ToastSucefully text={text} setShow={setShow} />
        ) : (
          <ToastError text={text} setShow={setShow} />
        )}
      </div>

      <section className="bg-white h-screen w-screen flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg  md:mt-0 sm:max-w-xl xl:p-0 bg-gray-50 border-gray-200 border-2 shadow-2xl">
            <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl text-center ">
                Registro
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Usuario
                  </label>
                  <FormField
                    id="username"
                    type="text"
                    placeholder="Usuario"
                    name="username"
                    register={register}
                    error={errors.username}
                    disable={false}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
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
                    disable={false}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium  text-gray-900 "
                  >
                    Contraseña
                  </label>
                  <FormField
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    register={register}
                    error={errors.password}
                    id={"password"}
                    disable={false}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirmar contraseña
                  </label>

                  <FormField
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="confirmPassword"
                    register={register}
                    error={errors.confirmPassword}
                    id={"confirm-password"}
                    disable={false}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50    "
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-900">
                      Yo accepto{" "}
                      <span className="font-medium text-blue-600 hover:underline">
                        Terminos y condiciones
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  disabled={load}
                  type="submit"
                  className="flex justify-center items-center w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  {load ? <Spiner /> : "Crear cuenta"}
                </button>
                <p className="text-sm font-light text-gray-900 ">
                  ya tienes una cuenta?{" "}
                  <a
                    href="/login"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Iniciar sesión aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
