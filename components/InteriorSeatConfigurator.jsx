function InteriorSeatConfigurator({ interiorseats = "", updateOptions }) {
  const interiorSeatColors = [
    { id: 1, name: "red", color: "#782f2f" },
    { id: 2, name: "darknightblue", color: "#4c5464" },
    { id: 3, name: "black", color: "#000000" },
    { id: 4, name: "blackcognac", color1: "#000000", color2: "#BC8C60" },
    { id: 5, name: "blackchalkbeige", color1: "#000000", color2: "#bcb4ac" },
  ];

  return (
    <div className="mr-[12rem] w-full md:mr-[0rem] md:w-[30%]">
      <div className="mb-5 mt-5 flex w-full flex-col items-center justify-start rounded-lg bg-white p-4 md:mb-10 md:mt-10 md:w-[26rem]">
        <h3 className="mb-5 font-inter text-lg font-semibold text-black border-2 border-black w-full text-center rounded-md">
          INTERIOR-SEATS COLORS
        </h3>
        <div className="flex flex-wrap gap-2">
          {interiorSeatColors.map((interior) => (
            <button
              key={interior.id}
              onClick={() => {
                console.log(`Changing to: ${interior.name}`);
                updateOptions("interiorseats", interior.name);
              }}
              aria-pressed={interiorseats === interior.name}
              className={`transition-transform duration-100 hover:scale-105 ${
                interiorseats === interior.name
                  ? "rounded-xl border-2 border-blue-900"
                  : ""
              }`}
            >
              <div
                className="relative m-1 h-10 w-12 overflow-hidden rounded-xl md:h-10 md:w-44"
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
                      className="absolute bottom-0 right-0 top-0"
                    />
                    <div
                      style={{
                        backgroundColor: interior.color2,
                        width: "50%",
                      }}
                      className="absolute bottom-0 left-0 top-0"
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

export default InteriorSeatConfigurator;
