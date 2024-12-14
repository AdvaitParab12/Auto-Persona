import Image from "next/image";
import configs from "@/app/assets/configs.json";

function Preview({ color = "Blue", wheel = "Carrera Wheels" }) {
  return (
    <div className="md:w-[70%] lg:flex lg:items-center lg:justify-center">
      <Image
        // src={`/assets/car_colors/${color}.webp`}
        src={configs[color].wheels[wheel]}
        width="900"
        height="900"
        alt={`${color}, ${wheel}`}
        className="rounded-lg"
      />
    </div>
  );
}

export default Preview;
