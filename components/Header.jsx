import Image from "next/image";
function Header() {
  return (
    <div className="flex items-center justify-center mb-10">
      <Image
        src="/configuration_black.png"
        alt="configuration"
        height={50}
        width={50}
        sizes="100vw"
        className="m-4 hidden md:block border border-black rounded-xl p-2"
      />
      <h1 className="m-4 text-center font-inter text-5xl font-light tracking-widest text-black border-2 border-black p-2 rounded-xl">
        AUTO PERSONA
      </h1>
      <Image
        src="/configuration_black.png"
        alt="configuration"
        height={50}
        width={50}
        sizes="100vw"
        className="m-4 hidden md:block border border-black rounded-xl p-2"
      />
    </div>
  );
}

export default Header;
