export default function ProductCard({ product }) {
  return (
    <div className="group relative rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-between w-full mx-auto p-4 border border-[var(--primary-color)] bg-[var(--card-bg)]">
      {/* Product Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center mb-4 overflow-hidden rounded-md">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Name and Price */}
      <div className="flex flex-col items-center text-center w-full">
        <h3 className="text-base sm:text-lg font-semibold text-[var(--foreground)] mb-1 leading-tight">
          <a href={product.href} className="hover:text-[var(--primary-color)]">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="text-sm sm:text-base font-bold text-[var(--primary-color)]">
          {product.price}
        </p>
      </div>
    </div>
  );
}
