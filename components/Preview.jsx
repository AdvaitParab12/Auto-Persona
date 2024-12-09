import Image from "next/image";

function Preview({ color = "grey" }) {
  return (
    <div className="flex justify-center items-center w-[70%]">
      <Image
        src={`/assets/car_colors/${color}.webp`}
        height={900}
        width={900}
        alt={`${color}`}
        className="rounded-md"
      />
    </div>
  );
}

export default Preview;
