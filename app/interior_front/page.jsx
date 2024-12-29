"use client";
import React, { useState } from "react";
import InteriorSeatHeader from "@/app/interior_front/InteriorSeatHeader";
import InteriorSeatPreview from "@/app/interior_front/InteriorSeatPreview";
import InteriorSeatConfigurator from "@/app/interior_front/InteriorSeatConfigurator";

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
      <InteriorSeatHeader />
      <div className="flex flex-col md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
        <InteriorSeatPreview activeOptions={activeOptions} />
        <InteriorSeatConfigurator
          updateOptions={updateOptions}
          {...activeOptions}
        />
      </div>
    </div>
  );
}

export default Page;
