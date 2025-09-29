import ProductCard from './ProductCard';

export default function CategorySection({ title, products, bgColor, description }) {
  return (
    <div className={`relative z-10 ${bgColor} py-16 sm:py-24 lg:py-32 rounded-lg shadow-xl mb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-md text-center relative p-8 flex flex-col items-center justify-center min-h-[150px]">
        {/* Frame image (on top) */}
        {/* <img
          src="/images/marco-texto.jpg"
          alt="Marco de texto"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        /> */}

        {/* Text content container, removed background */}
        <div className="relative flex flex-col items-center justify-center py-4 px-4 rounded-lg max-w-sm mx-auto z-0">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-none">{title}</h2>
          <p className="mt-2 pb-5 text-base leading-6 text-[var(--foreground)]">
            {description}
          </p>
        </div>
      </div>

      {/* Grid de productos con más espacio entre tarjetas */}
      <div className="bg-transparent mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
