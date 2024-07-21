import React from "react";
import BackButton from "../components/intro-back-button";
import SpeechBox from "../components/speech-box";
import ForwardButton from "../components/intro-forward-button";


export default function Page() {
  return (
  <div className= "flex  items-center flex-col h-screen">
    <BackButton />
    <SpeechBox 
    title="Hi! I am Digi, your math buddy!" 
    text="To get started, let's create an account." 
    imgSrc="/onboarding/Icon/monster31.png"/>
    <ForwardButton />
  </div>
    );
}
