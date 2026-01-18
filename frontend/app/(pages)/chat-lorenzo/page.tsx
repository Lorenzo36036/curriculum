"use client";

import { redirect } from "next/navigation";
import React from "react";
// Comentado temporalmente: Redux y Router
// import { useDispatch } from "react-redux";
// import { clearToken } from "@/app/store-redux/saveToken";
// import { useRouter } from "next/navigation";

export default function ChatView() {
  // Comentado temporalmente: Inicialización de hooks
  // const dispatch = useDispatch();
  // const router = useRouter();

  // Comentado temporalmente: Lógica de cierre de sesión
  /* const handleLogout = () => {
    dispatch(clearToken());
    router.push("/login");
  }; 
  */

  return (
    <div className="flex flex-col h-screen bg-white text-slate-900 font-sans">
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 bg-slate-200/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 to-blue-400 text-white font-bold shadow-sm ring-2 ring-white">
            L
          </div>
          <div>
            <h2 className="text-[15px] font-bold tracking-tight text-slate-800">
              Lorenzo Parra
            </h2>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Activo ahora</span>
            </div>
          </div>
        </div>
        
        <button 
          className="hover:scale-125 px-4 py-1.5 text-lg tracking-wide   font-semibold text-red-600 hover:text-red-500 rounded-full transition-all active:scale-95"
          onClick={() => {redirect('/')}}
       >
          Salir
        </button>
      </header>

      {/* CUERPO CENTRAL */}
      <main className="flex-1 flex items-center justify-center">
        <h1 className="tracking-wide  text-3xl md:text-5xl font-black  text-slate-950 animate-pulse ">
          Escríbeme 
        </h1>
      </main>

      {/* BARRA DE ENTRADA */}
      <footer className="w-full max-w-4xl mx-auto p-6 md:pb-10">
        <div className="relative group">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className="w-full bg-slate-100 border-2 border-transparent focus:border-blue-100 rounded-2xl px-6 py-4 text-base focus:bg-white focus:ring-4 focus:ring-blue-50/50 outline-none placeholder-slate-400 text-slate-800 transition-all shadow-sm"
          />
        </div>
      </footer>
    </div>
  );
}