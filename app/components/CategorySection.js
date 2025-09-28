export default function CategorySection({ title, products }) {
  return (
    <div className="relative z-10 bg-trasparent py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md text-center relative p-8 flex flex-col items-center justify-center min-h-[200px]">
        {/* Frame image (on top) */}
        <img
          src="/images/marco-texto.jpg"
          alt="Marco de texto"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        />
        {/* Text content container with semi-transparent background (behind frame) */}
        <div className="relative flex flex-col items-center justify-center bg-black bg-opacity-60 py-8 px-4 rounded-lg max-w-xs mx-auto z-0">
          <h2 className="text-2xl pt-5 font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-4 pb-5 text-base leading-6 text-white">
            Descubre una amplia gama de productos para tu estudio de tatuaje.
          </p>
        </div>
      </div>

      <div className="bg-transparent mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:gap-32">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

import ProductCard from './ProductCard';
