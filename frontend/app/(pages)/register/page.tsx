"use client";
import FormField from "@/app/components/input/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, RegisterDataSchema } from "@/app/tools/Zod"
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDataSchema>({
    resolver: zodResolver(RegisterData),
  });

  const onSubmitData = async (data: RegisterDataSchema): Promise<void> => {
    console.log("SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitData)} method="POST">
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
                      <span
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Terminos y condiciones
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Crear cuenta
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
