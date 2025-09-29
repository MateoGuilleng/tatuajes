import Link from 'next/link';
import Image from 'next/image';

export default function WorkGallery({
  title,
  description,
  linkHref,
  imageSrc,
  imageAlt,
}) {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <Link href={linkHref} className="btn-primary inline-block">
          Ver galería
        </Link>
      </div>
    </div>
  );
}

