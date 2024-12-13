"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeaderOptions from "@/components/HeaderOptions";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";

function HomePage() {
  const [activeOptions, setActiveOptions] = useState({
    color: "Blue",
    wheels: "Carrera Wheels",
  });

  function updateOptions(option, value) {
    const newOptions = { ...activeOptions, [option]: value };
    setActiveOptions(newOptions);
  }

  return (
    <div className="bg-slate-600 p-10">
      <Header />
      <HeaderOptions />
      <div className="flex w-full flex-col md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
        <Preview {...activeOptions} />
        <Configurator updateOptions={updateOptions} {...activeOptions} />
      </div>
    </div>
  );
}

export default HomePage;
