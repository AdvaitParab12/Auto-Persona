/* eslint-disable @next/next/no-img-element */
import PropTypes from "prop-types";

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
    { id: 0, name: "Carrera_Wheels", src: "/assets/wheels/carrera_wheel.png" },
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
    { id: 4, name: "Spyder Wheels", src: "/assets/wheels/spyder_wheel.png" },
    { id: 5, name: "Carbon Blades", src: "/assets/wheels/carbon_blades.png" },
  ];

  return (
    <div className="w-full md:w-[30%]">
      <div className="mb-10 mt-10 flex flex-col items-center justify-start rounded-lg bg-slate-400 p-4">
        <h3 className="font-inter text-lg font-semibold">EXTERIOR COLORS</h3>
        <div className="flex flex-wrap gap-2">
          {exteriorColors.map((exterior) => (
            <button
              key={exterior.id}
              onClick={() => updateOptions("color", exterior.name)}
              aria-pressed={color === exterior.name}
              className={`transition-transform duration-100 hover:scale-105 ${
                color === exterior.name
                  ? "rounded-full border-2 border-blue-900"
                  : ""
              }`}
            >
              <div
                style={{ backgroundColor: exterior.color }}
                className="m-1 h-10 w-10 rounded-full"
                aria-label={exterior.name}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="mb-10 flex flex-col items-center justify-start rounded-lg bg-slate-400 p-4">
        <h3 className="font-inter text-lg font-semibold">WHEEL OPTIONS</h3>
        <div className="flex flex-wrap gap-2">
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

Configurator.propTypes = {
  color: PropTypes.string,
  wheel: PropTypes.string,
  updateOptions: PropTypes.func.isRequired,
};

export default Configurator;
