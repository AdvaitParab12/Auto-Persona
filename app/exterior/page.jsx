"use client";
import React from "react";
import { useState } from "react";
import ExteriorHeader from "@/components/ExteriorHeader";
import ExteriorPreview from "@/components/ExteriorPreview";
import ExteriorConfigurator from "@/components/ExteriorConfigurator";

function Exterior() {
  const [activeOptions, setActiveOptions] = useState({
    color: "Blue",
    wheel: "Carrera Wheels",
    interiorcolor: "red",
  });
  function updateOptions(option, value) {
    const newOptions = { ...activeOptions, [option]: value };
    setActiveOptions(newOptions);
  }
  return (
    <div className="bg-zinc-200 h-screen overflow-hidden">
        <ExteriorHeader />
      <div className="mt-5 flex flex-col md:mt-0 md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
        <ExteriorPreview activeOptions={activeOptions} />
        <ExteriorConfigurator
          updateOptions={updateOptions}
          {...activeOptions}
        />
      </div>
    </div>
  );
}

export default Exterior;
