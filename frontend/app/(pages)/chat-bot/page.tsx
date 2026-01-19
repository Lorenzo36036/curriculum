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
      let contextoWeb = "";
      try {
        const res = await fetch(
          "https://curriculum-lorenzis-projects.vercel.app/",
        );
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        contextoWeb = doc.body.innerText.replace(/\s+/g, " ");
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

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  async function chatBot(userPrompt: string) {
    if (!webContext) return;

    setLoading(true);
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: userPrompt,
    };
    setMessages((prev) => [...prev, userMessage]);

    let attempts = 0;
    const maxAttempts = 3;
    let success = false;

    while (attempts < maxAttempts && !success) {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: `...tu instrucción...`,
        });

        const result = await model.generateContent(userPrompt);
        const botText = result.response.text();

        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, sender: "bot", text: botText },
        ]);
        success = true;
      } catch (error: any) {
        attempts++;
        const isQuotaError =
          error.status === 429 ||
          error.message?.includes("429") ||
          error.message?.includes("quota");

        if (isQuotaError && attempts < maxAttempts) {
          await delay(attempts * 2000);
        } else {
          const errorMsg = isQuotaError
            ? "Lo siento, Lorenzo ha recibido muchas consultas hoy. Intenta de nuevo en un minuto."
            : "¡Vaya! He respondido muchas preguntas hoy. Por favor, espera un minuto o contáctame directamente a alejandro36036@email.com.";

          setMessages((prev) => [
            ...prev,
            { id: Date.now(), sender: "bot", text: errorMsg },
          ]);
          break;
        }
      }
    }
    setLoading(false); // Se apaga solo al final de todo el proceso
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
          className="px-4 py-1.5 font-semibold text-red-600 hover:scale-125 text-lg hover:bg-red-50 rounded-full transition-all"
          onClick={() => {
            alert("Si sales el chat se reseteara");
            redirect("/");
          }}
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
              className={`px-4 py-2 rounded-2xl max-w-220 shadow-sm ${
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
