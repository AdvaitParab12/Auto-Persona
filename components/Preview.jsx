import Image from "next/image";

function Preview({ color = "Grey" }) {
  console.log(`/assets/car_colors/${color}.webp`);
  return (
    <div className="flex justify-center items-center w-[70%]">
      <Image
        src={`/assets/car_colors/${color}.webp`}
        height={900}
        width={900}
        alt="car image"
        className="rounded-md"
      />
    </div>
  );
}

export default Preview;
