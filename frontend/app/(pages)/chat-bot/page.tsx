/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RootState } from "./../../store-redux/store";
import { redirect } from "next/navigation";
import { useState, useEffect, FormEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_CHATBOT_API_KEY as string,
);

const ChatPage = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [webContext, setWebContext] = useState(""); 
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (token === null || token === "") {
      alert("Por favor logéate primero antes de hacer consultas");
      redirect("/login");
    }
  }, [token]);

  useEffect(() => {
    const initContext = async () => {
      const cachedContext = localStorage.getItem("lorenzo_cv_cache");

      if (cachedContext) {
        setWebContext(cachedContext);
        return;
      }

      let contextoWeb = "";
      try {
        const res = await fetch(
          "https://curriculum-lorenzis-projects.vercel.app/",
        );
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        contextoWeb = doc.body.innerText.replace(/\s+/g, " ");
        localStorage.setItem("lorenzo_cv_cache", contextoWeb);
      } catch (error: any) {
        console.error("Error leyendo la URL, usando respaldo local.");
        contextoWeb =
          "Lorenzo Parra es un Desarrollador Full Stack experto en React, Node.js y Redux.";
      }
      setWebContext(contextoWeb);
    };
    initContext();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function chatBot(userPrompt: string) {
    if (!webContext) return;

    setLoading(true);
    try {
      const userMessage: Message = {
        id: Date.now(),
        sender: "user",
        text: userPrompt,
      };
      setMessages((prev) => [...prev, userMessage]);

      const model = genAI.getGenerativeModel({
        model: "gemini-3-flash-preview",
        systemInstruction: `
          Eres un asistente IA de Lorenzo Parra. Tu objetivo es ayudar a los visitantes.
          REGLAS:
          1. Usa EXCLUSIVAMENTE este contexto: ${webContext}
          2. Si no sabes algo, ofrece contacto: alejandro36036@email.com.
          3. Tono: Profesional y tecnológico.
          4. Temperatura: 0.
          ESTRUCTURA DE RESPUESTA:
          - Sé conciso. Al final ofrece siempre 3 sugerencias: 
            1. 🛠️ Servicios | 2. 📄 Experiencia | 3. ✉️ Contacto
        `,
      });

      const result = await model.generateContent(userPrompt);
      const botText = await result.response.text();
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: botText,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error en ChatBot:", error);
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Lo siento he respondido muchas preguntas hoy, contactar a alejandro36036@gmail.com",
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || loading) return;

    const textToSend = inputValue;
    setInputValue("");
    await chatBot(textToSend);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 bg-slate-200/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 to-blue-400 text-white font-bold shadow-sm ring-2 ring-white">
            LP
          </div>
          <div>
            <h2 className="text-[15px] font-bold tracking-tight text-slate-800">
              Lorenzo Assistant
            </h2>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[11px] text-slate-500 font-medium">
                En línea
              </span>
            </div>
          </div>
        </div>
        <button
          className="hover:scale-125 text-lg px-4 py-1.5  font-semibold text-red-600 hover:bg-red-50 rounded-full transition-all"
          onClick={() => {
            alert("Si sales se reseteara el chat")
            redirect("/")}}
        >
          Salir
        </button>
      </header>

      <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[80%] shadow-sm ${
                message.sender === "user"
                  ? "bg-blue-600 text-white rounded-tr-none"
                  : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex space-x-1">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white border-t border-slate-100 flex gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Pregunta sobre servicios o experiencia..."
          className="flex-1 border border-slate-300 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:bg-slate-300 transition-colors shadow-lg shadow-blue-200"
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
