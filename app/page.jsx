"use client";
import { useState } from "react";
import Header from "@/components/Header";
import ExteriorHeader from "@/components/ExteriorHeader";
import ExteriorPreview from "@/components/ExteriorPreview";
import Configurator from "@/components/ExteriorConfigurator";
import InteriorHeader from "@/components/InteriorHeader";
import InteriorPreview from "@/components/InteriorPreview";
import InteriorConfigurator from "@/components/InteriorConfigurator";
import InteriorSeatHeader from "@/components/InteriorSeatHeader";
import InteriorSeatPreview from "@/components/InteriorSeatPreview";
import InteriorSeatConfigurator from "@/components/InteriorSeatConfigurator";

function HomePage() {
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
    <div className="p-10 bg-zinc-700 w-full">
      <Header />
      <ExteriorHeader />
      <div className="flex flex-col md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
        <ExteriorPreview {...activeOptions} />
        <Configurator updateOptions={updateOptions} {...activeOptions} />
      </div>
      <InteriorHeader />
      <div className="flex flex-col md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
        <InteriorPreview {...activeOptions} />
        <InteriorConfigurator
          updateOptions={updateOptions}
          {...activeOptions}
        />
      </div>
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

export default HomePage;
