"use client";
import Image from "next/image";
function configurator({ color, updateOptions }) {
  console.log(color);
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
  return (
    <div className="w-[30%]">
      <div className="flex flex-col items-center justify-start bg-slate-200 mt-10 p-3 rounded-lg w-96">
        <h3 className="font-inter text-lg">EXTERIOR COLOURS</h3>
        <div className="flex gap-2 flex-wrap items-start justify-start p-4">
          {exteriorColors.map((exterior) => (
            <button
              key={exterior.id}
              onClick={() => updateOptions("color", exterior.name)}
              className={`hover:scale-105 transition-transform duration-100 ${
                exterior === exterior.name
                  ? "border-2 border-blue-300 rounded-full"
                  : ""
              }`}
            >
              <div
                style={{ backgroundColor: exterior.color }}
                className="w-40 h-10 rounded-lg"
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default configurator;
