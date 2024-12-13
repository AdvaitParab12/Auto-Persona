import Image from "next/image";
function Header() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/configuration_black.png"
        alt="configuration"
        height={50}
        width={50}
        sizes="100vw"
        className="m-4"
      />
      <h1 className="m-4 rounded-md text-center font-inter text-5xl font-light tracking-widest">
        AUTO PERSONA
      </h1>
      <Image
        src="/configuration_black.png"
        alt="configuration"
        height={50}
        width={50}
        sizes="100vw"
        className="m-4"
      />
    </div>
  );
}

export default Header;
