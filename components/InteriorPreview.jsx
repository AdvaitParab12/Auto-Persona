import Image from "next/image";

function InteriorPreview({interiorcolor="red"}) {
  console.log(`interiorcolor`, interiorcolor);
  return (
    <div className="md:w-[70%] lg:flex lg:items-center lg:justify-center">
      <Image
        src={`/assets/car_interior_front/${interiorcolor}.webp`}
        width="1000"
        height="1000"
        alt={`${interiorcolor}`}
        className="rounded-lg"
      />
    </div>
  );
}

export default InteriorPreview;
