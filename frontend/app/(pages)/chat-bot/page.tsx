"use client";

import { RootState } from "./../../store-redux/store";
import { redirect } from "next/navigation";
import { useState, useEffect, FormEvent, useRef } from "react";
import { useSelector } from "react-redux";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

const ChatPage = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  
  useEffect(() => {
    if (token === null || token == ""){
      alert("Por favor logeate primero antes de hacer consultas");
      redirect("/login");
    }
  }, [token]);

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: inputValue.trim(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: Date.now() + 1,
          sender: "bot",
          text: data.message,
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        const errorMessage: Message = {
          id: Date.now() + 1,
          sender: "bot",
          text: data.error || "Processing failed",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error("Error fetching chat", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Unexpected error occurred",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 bg-slate-200/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 to-blue-400 text-white font-bold shadow-sm ring-2 ring-white">
            H
          </div>
          <div>
            <h2 className="text-[15px] font-bold tracking-tight text-slate-800">
              Chat-bot
            </h2>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[11px] text-slate-500 font-medium  tracking-wider">
                Pregunta sin compromiso
              </span>
            </div>
          </div>
        </div>

        <button
          className="hover:scale-125 px-4 py-1.5 text-lg tracking-wide   font-semibold text-red-600 hover:text-red-500 rounded-full transition-all active:scale-95"
          onClick={() => {
            redirect("/");
          }}
        >
          Salir
        </button>
      </header>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xl ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start mb-4">
            <div className="flex space-x-1">
              <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
              <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></span>
              <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-400"></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex p-4 bg-white shadow">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe tu consulta"
          className="flex-1 border text-black border-gray-600  px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        />
        <button
          type="submit"
          className="ml-4 bg-blue-500 text-white p-2 rounded-md scale-x-125 hover:bg-blue-600 focus:outline-none disabled:bg-blue-300"
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 rotate-45"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
