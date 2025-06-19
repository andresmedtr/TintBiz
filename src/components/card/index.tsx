import Image from "next/image";

export const Card = ({
  img,
  children,
}: {
  img: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md w-full max-w-[320px] bg-[#1a1a1a] transition-all duration-300 transform hover:scale-105  hover:shadow-[0_8px_24px_rgba(229,35,35,0.5)] cursor-pointer"
    >
      <div className="relative w-full h-[200px]">
        <Image src={img} alt="Card image" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </div>
      <div className="p-6 flex flex-col gap-4 text-white">{children}</div>
    </div>
  );
};
