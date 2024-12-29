"use client";
import React, { useState } from "react";
import InteriorSeatHeader from "@/components/InteriorSeatHeader";
import InteriorSeatPreview from "@/components/InteriorSeatPreview";
import InteriorSeatConfigurator from "@/components/InteriorSeatConfigurator";

function Page() {
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
    <div className="h-screen bg-zinc-950 overflow-hidden p-5 md:p-10">
      <InteriorSeatHeader />
      <div className="flex flex-col md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
        <InteriorSeatPreview {...activeOptions} />
        <InteriorSeatConfigurator
          updateOptions={updateOptions}
          {...activeOptions}
        />
      </div>
    </div>
  );
}

export default Page;
