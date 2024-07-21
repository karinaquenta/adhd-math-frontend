import React from "react";
import Image from "next/image";
import Check from "../../../public/onboarding/Icon/Vector.svg";

export default function IntroForwardButton() {
  return (
  <div className="fixed inset-0">
  <div className="absolute bottom-20 right-10">
  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20 shadow-lg">Lets Go &rarr;</button>
  </div>
</div>
  );
}