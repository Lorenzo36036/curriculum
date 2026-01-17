"use client"

import FormField from '@/app/components/input/FormField';
import { LoginData, LoginDataSchema } from '@/app/tools/Zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';

export default function Login() {
  
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginDataSchema>({
      resolver: zodResolver(LoginData),
    });

    const onSubmitData = async (data: LoginDataSchema): Promise<void> => {
      console.log("SUCCESS", data);
    };
  
  return (
    <form onSubmit={handleSubmit(onSubmitData)} className="bg-white h-screen w-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg  md:mt-0 sm:max-w-xl xl:p-0 bg-gray-50 border-gray-200 border-2 shadow-2xl">
          <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl text-center ">
              Iniciar sesión
            </h1>
            <div className="space-y-4 md:space-y-6">
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
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Iniciar sesión 
              </button>
              <p className="text-sm font-light text-gray-900 ">
                No tienes cuenta?{" "}
                <a
                  href="/register"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Registrate aqui
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

