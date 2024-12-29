/* eslint-disable @next/next/no-img-element */


function Configurator({ color = "", wheel = "", updateOptions }) {
  const exteriorColors = [
    { id: 1, name: "Blue", color: "#3864b4" },
    { id: 2, name: "Dark Blue", color: "#00194b" },
    { id: 3, name: "Grey", color: "#646970" },
    { id: 4, name: "Jet Black", color: "#000000" },
    { id: 5, name: "Red", color: "#cc0033" },
    { id: 6, name: "Silver", color: "#cccccc" },
    { id: 7, name: "Slate Grey", color: "#4e4e53" },
    { id: 8, name: "White", color: "#efefef" },
    { id: 9, name: "Yellow", color: "#ced27b" },
  ];

  const wheelOptions = [
    { id: 0, name: "Carrera Wheels", src: "/assets/wheels/carrera_wheel.png" },
    {
      id: 1,
      name: "Carrera S Wheels",
      src: "/assets/wheels/carrera_s_wheel.png",
    },
    {
      id: 2,
      name: "Carrera Exclusive Wheels",
      src: "/assets/wheels/carrera_exclusive_wheel.png",
    },
    {
      id: 3,
      name: "Carrera Classic Wheels",
      src: "/assets/wheels/carrera_classic_wheel.png",
    },
    { id: 4, name: "Spyder Wheels", src: "/assets/wheels/spyder_wheel.png" },
    { id: 5, name: "Carbon Blades", src: "/assets/wheels/carbon_blades.png" },
  ];

  return (
    <div className="w-full mr-[12rem] md:mr-[0rem] md:w-[30%]">
      <div className="mb-5 mt-10 w-full md:w-[26rem] flex flex-col items-center justify-start rounded-lg bg-white p-4 border-2 border-zinc-400">
        <h3 className="font-inter text-lg font-semibold mb-2 text-black border-2 w-full text-center rounded-md border-black">EXTERIOR COLORS</h3>
        <div className="flex flex-wrap gap-2">
          {exteriorColors.map((exterior) => (
            <button
              key={exterior.id}
              onClick={() => updateOptions("color", exterior.name)}
              aria-pressed={color === exterior.name}
              className={`transition-transform duration-100 hover:scale-105 ${
                color === exterior.name
                  ? "rounded-xl border-2 border-blue-900"
                  : ""
              }`}
            >
              <div
                style={{ backgroundColor: exterior.color }}
                className="m-1 ml-1 h-10 w-12 md:ml-1  md:h-10 md:w-44 rounded-xl shadow-3xl"
                aria-label={exterior.name}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="mb-10 w-full md:w-[26rem] flex flex-col items-center justify-center rounded-lg bg-white p-4 border-2 border-zinc-400">
        <h3 className="font-inter text-lg font-semibold mb-2 text-black border-2 w-full text-center rounded-md border-black">WHEEL OPTIONS</h3>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {wheelOptions.map((wheelOption) => (
            <button
              key={wheelOption.id}
              onClick={() => updateOptions("wheel", wheelOption.name)}
              aria-pressed={wheel === wheelOption.name}
              className={`transition-transform duration-100 hover:scale-105 ${
                wheel === wheelOption.name
                  ? "rounded-full border-2 border-blue-900"
                  : ""
              }`}
            >
              <img
                src={wheelOption.src}
                alt={wheelOption.name}
                className="w-16"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}



export default Configurator;
