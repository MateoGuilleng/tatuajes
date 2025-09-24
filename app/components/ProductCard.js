export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-gray-800 border border-[var(--secondary-color)] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="w-full min-h-80 bg-gray-700 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="p-4 flex flex-col justify-between items-start">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          <a href={product.href} className="hover:text-[var(--primary-color)]">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="text-md font-bold text-[var(--primary-color)] mt-2">{product.price}</p>
      </div>
    </div>
  );
}
