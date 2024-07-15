import React from "react";
import Image from "next/image";
import Check from "../../../public/onboarding/Icon/Vector.svg";



export default function SpeechBox({ title, text }: { title: string; text: string }) {
  return (
  
    <div className="flex flex-col items-center">
      <div className="bg-white p-6 rounded-tr-lg rounded-tl-lg rounded-br-lg border border-gray-300 mt-20 flex items-start">
        <div className="text-gray-500 mr-4">&#x1F50A;</div>
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-4 w-10 h-10">
        &#x1F50A;
      </button>
    </div>
  );
}
