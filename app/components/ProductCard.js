export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-black rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 aspect-square flex flex-col justify-center items-center w-full sm:w-64 md:w-72 lg:w-80 mx-auto">
      {/* Frame overlay con menos inset */}
      <div
        className="absolute -inset-4 sm:-inset-4 md:-inset-6 lg:-inset-6 z-20 pointer-events-none"
        style={{
          backgroundImage: `url('/images/marcoo.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
        }}
      />

      {/* Content wrapper */}
      <div className="absolute inset-x-4 p-10 sm:inset-x-2 md:inset-x-2 lg:inset-x-2 inset-y-8 sm:inset-y-10 md:inset-y-12 lg:inset-y-12 z-10 flex flex-col items-center justify-center bg-black p-2 rounded-md">
        {/* Product Name and Price */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm sm:text-base font-semibold text-[var(--foreground)] mt-2">
            <a href={product.href} className="hover:text-[var(--primary-color)]">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="text-sm sm:text-base font-bold text-[var(--primary-color)] mb-2">
            {product.price}
          </p>
        </div>

        {/* Product Image */}
        <div className="relative w-full h-full bg-black aspect-square rounded-md flex items-center justify-center mt-2">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
