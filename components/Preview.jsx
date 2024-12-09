import Image from "next/image";

function Preview({ color = "grey" }) {
  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:w-[70%]">
      <Image
        src={`/assets/car_colors/${color}.webp`}
        height={900}
        width={900}
        alt={`${color}`}
        className="rounded-lg"
      />
    </div>
  );
}

export default Preview;
