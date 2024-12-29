"use client";
// import { useState } from "react";
import Header from "@/components/Header";
// import ExteriorHeader from "@/app/exterior/ExteriorHeader";
// import ExteriorPreview from "@/app/exterior/ExteriorPreview";
// import Configurator from "@/app/exterior/ExteriorConfigurator";
// import InteriorHeader from "@/app/interior/InteriorHeader";
// import InteriorPreview from "@/app/interior/InteriorPreview";
// import InteriorConfigurator from "@/app/interior/InteriorConfigurator";
// import InteriorSeatHeader from "@/app/interior_front/InteriorSeatHeader";
// import InteriorSeatPreview from "@/app/interior_front/InteriorSeatPreview";
// import InteriorSeatConfigurator from "@/app/interior_front/InteriorSeatConfigurator";
import Home from "@/components/Home";

function HomePage() {
  // const [activeOptions, setActiveOptions] = useState({
  //   color: "Blue",
  //   wheel: "Carrera_Wheels",
  //   interiorcolor: "red",
  // });

  // function updateOptions(option, value) {
  //   const newOptions = { ...activeOptions, [option]: value };
  //   setActiveOptions(newOptions);
  // }

  return (
    // <div className="p-10 bg-white w-full">
    //   <Header />
    //   <ExteriorHeader />
    //   <div className="flex flex-col mt-5 md:mt-0 md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
    //     <ExteriorPreview {...activeOptions} />
    //     <Configurator updateOptions={updateOptions} {...activeOptions} />
    //   </div>
    //   <InteriorHeader />
    //   <div className="flex flex-col md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
    //     <InteriorPreview {...activeOptions} />
    //     <InteriorConfigurator
    //       updateOptions={updateOptions}
    //       {...activeOptions}
    //     />
    //   </div>
    //   <InteriorSeatHeader />
    //   <div className="flex flex-col md:flex-col md:items-center md:justify-between md:gap-3 lg:flex-row">
    //     <InteriorSeatPreview {...activeOptions} />
    //     <InteriorSeatConfigurator
    //       updateOptions={updateOptions}
    //       {...activeOptions}
    //     />
    //   </div>
    // </div>
    <div className="h-screen bg-zinc-300">
      <Header />
      <Home className="h-screen bg-zinc-200 overflow-hidden" /> 
    </div>
  );
}

export default HomePage;
