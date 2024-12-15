function InteriorConfigurator({ interiorcolor = "", updateOptions }) {
  const interiorColors = [
    {
      id: 1,
      name: "red",
      color: "#782f2f",
    },
    {
      id: 2,
      name: "darknightblue",
      color: "#4c5464",
    },
    {
      id: 3,
      name: "black",
      color: "#000000",
    },
    {
      id: 4,
      name: "blackcognac",
      color1: "#000000",
      color2: "#BC8C60",
    },
    {
      id: 5,
      name: "blackchalkbeige",
      color1: "#000000",
      color2: "#bcb4ac",
    },
  ];

  return (
    <div className="w-full mr-[12rem] md:w-[30%]">
      <div className="mb-10 mt-10 w-[26rem] flex flex-col items-center justify-start rounded-lg bg-slate-300 p-4">
        <h3 className="font-inter text-lg font-semibold">INTERIOR-FRONT COLORS</h3>
        <div className="flex flex-wrap gap-2">
          {interiorColors.map((interior) => (
            <button
              key={interior.id}
              onClick={() => updateOptions("interiorcolor", interior.name)}
              aria-pressed={interiorcolor === interior.name}
              className={`transition-transform duration-100 hover:scale-105 ${
                interiorcolor === interior.name
                  ? "rounded-xl border-2 border-blue-900"
                  : ""
              }`}
            >
              <div
                className="m-1 h-10 w-44 relative overflow-hidden rounded-xl"
                aria-label={interior.name}
              >
                {interior.color && (
                  <div
                    style={{ backgroundColor: interior.color }}
                    className="absolute inset-0"
                  />
                )}
                {interior.color1 && interior.color2 && (
                  <div>
                    <div
                      style={{
                        backgroundColor: interior.color1,
                        width: "50%",
                      }}
                      className="absolute left-0 top-0 bottom-0 rounded-l-xl"
                    />
                    <div
                      style={{
                        backgroundColor: interior.color2,
                        width: "50%",
                      }}
                      className="absolute right-0 top-0 bottom-0 rounded-r-xl"
                    />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InteriorConfigurator;