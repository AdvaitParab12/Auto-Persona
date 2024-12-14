/* eslint-disable @next/next/no-img-element */

function Configurator({ color, wheel, updateOptions }) {
  const exteriorColors = [
    {
      id: 1,
      name: "blue",
      color: "#3864b4",
    },
    {
      id: 2,
      name: "darkblue",
      color: "#00194b",
    },
    {
      id: 3,
      name: "grey",
      color: "#646970",
    },
    {
      id: 4,
      name: "jetblack",
      color: "#000000",
    },
    {
      id: 5,
      name: "red",
      color: "#cc0033",
    },
    {
      id: 6,
      name: "silver",
      color: "#cccccc",
    },
    {
      id: 7,
      name: "slategrey",
      color: "#4e4e53",
    },
    {
      id: 8,
      name: "white",
      color: "#efefef",
    },
    {
      id: 9,
      name: "yellow",
      color: "#ced27b",
    },
  ];
  const wheelOptions = [
    {
      id: 0,
      name: "Carrera_Wheels",
      src: "/assets/wheels/carrera_wheel.png",
    },
    {
      id: 1,
      name: "Carrera_S_Wheels",
      src: "/assets/wheels/carrera_s_wheel.png",
    },
    {
      id: 2,
      name: "Carrera_Exclusive_Wheels",
      src: "/assets/wheels/carrera_exclusive_wheel.png",
    },
    {
      id: 3,
      name: "Carrera_Classic_Wheels",
      src: "/assets/wheels/carrera_classic_wheel.png",
    },
    {
      id: 4,
      name: "Spyder Wheels",
      src: "/assets/wheels/spyder_wheel.png",
    },
    {
      id: 5,
      name: "Carbon Blades",
      src: "/assets/wheels/carbon_blades.png",
    },
  ];
  return (
    <div className="w-full md:w-[30%]">
      <div className="mb-10 mt-10 flex flex-col items-center justify-start rounded-lg bg-slate-400 p-1 md:items-center md:justify-center">
        <h3 className="font-inter text-lg font-semibold">EXTERIOR COLOURS</h3>
        <div className="flex flex-wrap gap-2 md:items-start md:justify-center lg:flex lg:flex-wrap lg:gap-2 lg:p-4">
          {exteriorColors.map((exterior) => (
            <button
              key={exterior.id}
              onClick={() => updateOptions("color", exterior.name)}
              className={`transition-transform duration-100 hover:scale-105 ${
                color === exterior.name
                  ? "rounded-full border-2 border-blue-900"
                  : ""
              }`}
            >
              <div
                style={{ backgroundColor: exterior.color }}
                className="md:w-50 m-1 h-10 w-10 rounded-lg md:h-10 lg:m-0 lg:h-10 lg:w-40"
              ></div>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-10 mt-10 flex flex-col items-center justify-start rounded-lg bg-slate-400 p-1 md:items-center md:justify-center">
        <h3 className="font-inter text-lg font-semibold">WHEEL OPTIONS</h3>
        <div className="flex flex-wrap gap-2 md:items-start md:justify-center lg:flex lg:flex-wrap lg:gap-2 lg:p-4">
          {wheelOptions.map((wheelOption) => {
            return (
              <button
                key={wheelOption.id}
                onClick={() => updateOptions("wheel", wheelOption.name)}
                className={`transition-transform duration-100 hover:scale-105 ${
                  wheel === wheelOption.name
                    ? "rounded-full border-2 border-blue-900"
                    : ""
                }`}
              >
                <img src={wheelOption.src} alt={wheelOption.name} className="mx-4 w-16" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
