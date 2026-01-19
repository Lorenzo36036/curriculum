import React from "react";

interface Car {
  title: string;
}

function card({ title }: Car) {
  return (
<div className="
  px-6 py-2 cursor-pointer 
   text-blue-700 
  flex items-center justify-center 
  rounded-full border-2 border-blue-500 
  transition-all duration-200
  hover:bg-blue-600 hover:text-white 
  hover:shadow-lg active:scale-90
  whitespace-nowrap shrink-0  
">      <div className="text-lg text-center">{title}</div>
    </div>
  );
}

export default card;
