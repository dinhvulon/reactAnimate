import React from "react";
import "./style.css";
export default function index() {
  return (
    <div className="hero">
      <div className="max-w-[1366px] h-full m-auto">
        <div className="flex flex-col h-full justify-center gap-[40px] w-1/2">
          <h2 className="text-3xl text-fuchsia-500 letter tracking-[10px] font-bold">
            HARVEY TYLER
          </h2>
          <h1 className="font-bold text-[88px]">
            Web developer and UI designer
          </h1>
          <div className="space-x-5">
            <button className="p-5 border rounded-lg bg-transparent">
              See the Latest Works
            </button>
            <button className="p-5 border rounded-lg">Contact Me</button>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0"
        src="/src/assets/images/scroll.png"
        width={40}
        alt=""
      />

      <div className="absolute  text-[30vh] text-[#ffffff09] bottom-0 whitespace-nowrap">
        Writer Content Influencer
      </div>
      <img
        src="/src/assets/images/hero.png"
        className="h-full absolute top-0 right-0"
        alt=""
      />
    </div>
  );
}
