export default function Register() {
  return (
    <section className="bg-white h-screen w-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg  md:mt-0 sm:max-w-xl xl:p-0 bg-gray-50 border-gray-200 border-2 shadow-2xl">
          <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl text-center ">
              Registro
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 focus:outline-blue-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="Tucorreo@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  text-gray-900 "
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="focus:outline-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5   "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="focus:outline-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  required
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
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-900"
                  >
                    Yo accepto{" "}
                    <a
                      className="font-medium text-blue-600 hover:underline"
                      href="#"
                    >
                      Terminos y condiciones
                    </a>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
