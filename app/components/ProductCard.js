export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-black  rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 aspect-square flex flex-col justify-center items-center">
      {/* Frame overlay */}
      <div
        className="absolute -inset-12 z-20 pointer-events-none"
        style={{
          backgroundImage: `url('/images/marcoo.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
        }}
      />
      
      {/* Content wrapper (text and image) - positioned to fit within the frame's visual border */}
      <div className="absolute inset-x-2 inset-y-12 z-10 flex flex-col items-center justify-center bg-black px-1 py-2 rounded-md">
        

        {/* Product Image */}
        <div className="relative w-full h-full bg-black aspect-square rounded-md flex items-center justify-center mt-2">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Product Name and Price */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-md font-semibold text-[var(--foreground)] mt-2">
            <a href={product.href} className="hover:text-[var(--primary-color)]">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="text-md font-bold text-[var(--primary-color)] mb-2">{product.price}</p>
        </div>

        
      </div>
    </div>
  );
}
