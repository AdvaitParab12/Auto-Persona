"use client";
import React from "react";
import { useState } from "react";
import InteriorHeader from "@/app/interior/InteriorHeader";
import InteriorPreview from "@/app/interior/InteriorPreview";
import InteriorConfigurator from "@/app/interior/InteriorConfigurator";

function Page() {
  const [activeOptions, setActiveOptions] = useState({
    color: "Blue",
    wheel: "Carrera_Wheels",
    interiorcolor: "red",
  });

  function updateOptions(option, value) {
    const newOptions = { ...activeOptions, [option]: value };
    setActiveOptions(newOptions);
  }
  return (
    <div className="h-screen bg-zinc-200 overflow-hidden">
      <InteriorHeader />
      <div className="flex flex-col md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
        <InteriorPreview activeOptions={activeOptions} />
        <InteriorConfigurator
          updateOptions={updateOptions}
          {...activeOptions}
        />
      </div>
    </div>
  );
}

export default Page;
