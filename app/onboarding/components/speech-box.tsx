import React from "react";
import Image from "next/image";
import Check from "../../../public/onboarding/Icon/Vector.svg";



export default function SpeechBox({ title, text, imgSrc }: { title: string; text: string; imgSrc: string }) {
  return (
  
    <div className="flex flex-col items-center mt-20">
      <div className="flex items-start">
        <div className="mr-4">
          <Image src={imgSrc} alt="monsterIcon" width={400} height={400} />
        </div>
        <div className="bg-white p-10 rounded-tr-lg rounded-tl-lg rounded-br-lg border-4 border-gray-300 flex items-start">
        <div className="bg-gray-500 text-white font-bold w-10 h-10 flex  items-center justify-center rounded-full mr-4">
          &#x1F50A;
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      </div>
    </div>
  );
}
