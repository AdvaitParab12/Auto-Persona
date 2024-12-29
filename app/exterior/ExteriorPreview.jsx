import Image from "next/image";
import configs from "@/app/assets/configs.json";

function ExteriorPreview({ color = "Blue", wheel = "Carrera Wheels" }) {
  console.log(configs[color].wheels[wheel]);
  return (
    <div className="md:w-[70%] lg:flex lg:items-center lg:justify-center">
      <Image
        src={configs[color].wheels[wheel]}
        width="1000"
        height="1000"
        alt={`${color}, ${wheel}`}
        className="rounded-lg"
      />
    </div>
  );
}

export default ExteriorPreview;
