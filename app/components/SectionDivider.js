import Image from "next/image";

export default function SectionDivider({ title, backgroundImage }) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden my-12">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)', // Darken the image slightly
        }}
      ></div>
      <h2 className="text-5xl font-bold tracking-tight text-white uppercase z-10 text-center">
        {title}
      </h2>
    </div>
  );
}

