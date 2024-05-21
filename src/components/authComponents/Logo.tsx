import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/Logo_Trello.svg"
      alt="Trello Logo"
      width={120}
      height={300}
      className="object-contain pb-10 w-30 md:w-50 md:pb-0"
      priority
    />
  );
};

export default Logo;
