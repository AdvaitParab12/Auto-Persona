"use client";
import React from "react";
import { useState } from "react";
import ExteriorHeader from "@/app/exterior/ExteriorHeader";
import ExteriorPreview from "@/app/exterior/ExteriorPreview";
import ExteriorConfigurator from "@/app/exterior/ExteriorConfigurator";

function Exterior() {
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
    <div className="bg-zinc-200 h-screen">
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
