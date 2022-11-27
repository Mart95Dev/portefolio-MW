import React from "react";

export default function Home() {
  return (
    <div className="h-screen bg-[#fbf8f8] ">
      <div className="h-20"></div>
      <div className="h-auto text-md">
        <p className="pt-16 pl-10 text-lg md:text-xl 2xl:text-2xl">
          Bonjour, je suis freelance développeur Front-End React.
        </p>
        <p className="pl-10 text-lg md:text-xl 2xl:text-2xl">
          Bienvenue sur mon portefolio !
        </p>
        <div className="flex flex-wrap item-center justify-between">
          <div className="mt-20 ml-6 md:ml-20 lg:ml-11 lg:mt-32 ">
            <img
              className="w-[140%]] lg:w-[80%] xl:w-[80%]"
              src="/martial_wehrling.png"
              alt="Texte martial wehrling freelance Front developer"
            />
          </div>
          <div className="w-[80%] ml-16 pr-5 sm:ml-28 md:ml-28 lg:ml-16 lg:mt-32 lg:pr-10 lg:w-[26%] xl:ml-16 xl:w-[43%]">
            <img
              className="h-80 rounded-tl-[36px] rounded-br-[36px] md:h-96 lg:h-48 lg:w-58"
              src="/dev_code.jpg"
              alt="ecran ordinateur avec vs code et du javascript"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
