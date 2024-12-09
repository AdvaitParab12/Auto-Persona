"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeaderOptions from "@/components/HeaderOptions";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";

function HomePage() {
  const [activeOptions, setActiveOptions] = useState({
    color: "Grey",
  });
  function updateOptions(option, value) {
    const newOptions = { ...activeOptions, [option]: value };
    setActiveOptions(newOptions);
  }

  return (
    <div className="h-screen">
      <Header />
      <HeaderOptions />
      <div className="flex justify-between items-center">
        <Preview {...activeOptions}/>
        <Configurator updateOptions={updateOptions} {...activeOptions} />
      </div>
    </div>
  );
}

export default HomePage;
