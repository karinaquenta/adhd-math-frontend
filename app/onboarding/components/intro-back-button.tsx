import React from "react";
import Image from "next/image";
import Check from "../../../public/onboarding/Icon/Vector.svg";

export default function IntroBackButton() {
  return (
  <div className="fixed inset-0">
  <div className="absolute top-0 left-0">
  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20 shadow-lg">&larr;</button>
  </div>
</div>
  );
}
