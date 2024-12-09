"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeaderOptions from "@/components/HeaderOptions";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";

function HomePage() {
  const [activeOptions, setActiveOptions] = useState({
    color: "grey",
  });
  function updateOptions(option, value) {
    const newOptions = { ...activeOptions, [option]: value };
    setActiveOptions(newOptions);
  }

  return (
    <div className="h-screen lg:h-screen bg-slate-600 p-10">
      <Header />
      <HeaderOptions />
      <div className="flex flex-col md:flex-col md:justify-between md:items-center lg:flex-row md:gap-3">
        <Preview {...activeOptions}/>
        <Configurator updateOptions={updateOptions} {...activeOptions} />
      </div>
    </div>
  );
}

export default HomePage;
