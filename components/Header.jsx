import Image from "next/image";
function Header() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/configuration.png"
        alt="configuration"
        height={50}
        width={50}
        sizes="100vw"
        className="m-4"
      />
      <h1 className="font-inter font-light text-5xl text-center m-4 rounded-md tracking-widest">
        AUTO PERSONA
      </h1>
      <Image
        src="/configuration.png"
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
