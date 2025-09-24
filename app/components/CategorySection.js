export default function CategorySection({ title, products }) {
  return (
    <div className="bg-[var(--background)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--primary-color)]">{title}</h2>
        <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)]">
          Descubre una amplia gama de productos para tu estudio de tatuaje.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

import ProductCard from './ProductCard';
