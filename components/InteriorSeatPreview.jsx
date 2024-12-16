import Image from "next/image";

function InteriorSeatPreview({interiorseats="red"}) {
  return (
    <div className="md:w-[70%] lg:flex lg:items-center lg:justify-center">
      <Image
        src={`/assets/car_interior_seats/${interiorseats}.webp`}
        width="1000"
        height="1000"
        alt={`${interiorseats}`}
        className="rounded-lg"
      />
    </div>
  );
}

export default InteriorSeatPreview;
