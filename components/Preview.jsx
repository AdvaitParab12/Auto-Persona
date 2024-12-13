/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import configs from "@/app/assets/configs.json";

function Preview({ color = "Blue", wheels = "Carrera Wheels" }) {
  console.log(configs[color]?.wheels?.[wheels]); 
  return (
    <div className="md:w-[70%] lg:flex lg:items-center lg:justify-center">
      <Image
        // src={`/assets/car_colors/${color}.webp`}
        src={configs[color].wheels[wheels]}
        width="900"
        height="900"
        alt={`${color}, ${wheels}`}
        className="rounded-lg"
      />
    </div>
  );
}

export default Preview;
