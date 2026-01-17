/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import loginPost from "@/app/api/loginPost";
import FormField from "@/app/components/input/FormField";
import Spiner from "@/app/components/Spiner";
import ToastError from "@/app/components/toast/ToastError";
import ToastSucefully from "@/app/components/toast/ToastSucefully";
import { saveToken } from "@/app/store-redux/saveToken";
import { LoginData, LoginDataSchema } from "@/app/tools/Zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataSchema>({
    resolver: zodResolver(LoginData),
  });
  const dispatch = useDispatch<any>();
  const [SendSucefullyBlock, setSendSucefullyBlock] = useState(false);
  const [load, setLoad] = useState(false);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [sucefullyToast, setSucefullyToast] = useState(false);

  const onSubmitData = async (data: LoginDataSchema): Promise<void> => {
    setLoad(true);
    try {
      const response = await loginPost(data);
      setSendSucefullyBlock(true);
      setSucefullyToast(true);
      setText("Login Exitoso");
      setShow(true);
      if (response) dispatch(saveToken(response.access_token));
      setTimeout(() => {
        redirect("/");
      }, 700);
    } catch (error: any) {
      setSucefullyToast(false);
      if (error.response.data.statusCode === 401) {
        return setText("Contrasena incorrecta");
      }

      if (error.response.data.statusCode === 404) {
        return setText("Usuario no existe");
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
    <form onSubmit={handleSubmit(onSubmitData)}>
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

      <div className="bg-white h-screen w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
                disabled={load || SendSucefullyBlock}
                type="submit"
                className={`flex justify-center w-full text-white ${SendSucefullyBlock ? "bg-gray-500 pointer-none" : " bg-blue-600 hover:bg-blue-700"} focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center` }
              >
                {load ? <Spiner /> : "Iniciar sesion"}
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
  );
}
