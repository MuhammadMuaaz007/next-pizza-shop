import ProductCard from '@/components/ProductCard';
import { staticProducts } from '@/lib/static-products';

export default function PizzasPage() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mb-10 text-center'>
        <p className='text-xs font-bold tracking-[0.16em] text-orange-700 dark:text-orange-300'>
          OUR STORE
        </p>
        <h1 className='mt-2 text-3xl font-black sm:text-4xl lg:text-5xl'>
          <span className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
            All Pizzas
          </span>
        </h1>
        <p className='mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base'>
          Browse all available pizzas in one place and open any product for full
          details.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {staticProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
