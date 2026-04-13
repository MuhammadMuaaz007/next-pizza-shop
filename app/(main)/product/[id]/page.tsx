'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Clock3, Flame, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getStaticProductById } from '@/lib/static-products';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = getStaticProductById(params.id);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product) return;

    const storageKey = 'muaaz-cart-items';
    const existingItems = localStorage.getItem(storageKey);
    const parsedItems: CartItem[] = existingItems ? JSON.parse(existingItems) : [];
    const itemIndex = parsedItems.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      parsedItems[itemIndex].quantity += quantity;
    } else {
      parsedItems.push({
        id: product.id,
        name: product.attributeValues.p_title.value,
        price: product.attributeValues.p_price.value,
        quantity,
        image: product.attributeValues.p_image.value.downloadLink,
      });
    }

    localStorage.setItem(storageKey, JSON.stringify(parsedItems));
    window.dispatchEvent(new Event('cart-updated'));
  };

  if (!product) {
    return (
      <section className='mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center'>
        <h1 className='text-3xl font-black text-gray-900 dark:text-white'>
          Product Not Found
        </h1>
        <p className='mt-2 text-gray-600 dark:text-gray-300'>
          The pizza you are looking for is not available.
        </p>
        <Link href='/' className='mt-6'>
          <Button className='bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 text-white'>
            Back to Home
          </Button>
        </Link>
      </section>
    );
  }

  return (
    <section className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
      <div className='grid gap-10 lg:grid-cols-2 lg:items-start'>
        <div className='overflow-hidden rounded-3xl border border-orange-200/60 bg-white/80 shadow-lg dark:border-orange-900/40 dark:bg-gray-900/60'>
          <Image
            src={product.attributeValues.p_image.value.downloadLink}
            alt={product.attributeValues.p_title.value}
            width={1400}
            height={1000}
            className='h-85 w-full object-cover sm:h-115'
            priority
          />
        </div>

        <div className='rounded-3xl border border-orange-200/60 bg-white/85 p-6 shadow-sm dark:border-orange-900/40 dark:bg-gray-900/70 sm:p-8'>
          <p className='text-xs font-bold tracking-[0.14em] text-orange-700 dark:text-orange-300'>
            PRODUCT DETAILS
          </p>
          <h1 className='mt-2 text-3xl font-black text-gray-900 dark:text-white sm:text-4xl'>
            {product.attributeValues.p_title.value}
          </h1>
          <p className='mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base'>
            {product.details.longDescription}
          </p>

          <div className='mt-5 flex flex-wrap gap-3'>
            <span className='inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-200'>
              <Clock3 className='mr-1.5 h-3.5 w-3.5' />
              {product.details.prepTime}
            </span>
            <span className='inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-200'>
              <Flame className='mr-1.5 h-3.5 w-3.5' />
              {product.details.calories}
            </span>
            <span className='inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-200'>
              <Star className='mr-1.5 h-3.5 w-3.5' />
              {product.details.rating} Rating
            </span>
          </div>

          <div className='mt-6'>
            <h2 className='text-sm font-bold tracking-wide text-gray-900 dark:text-gray-100'>
              Ingredients
            </h2>
            <ul className='mt-2 space-y-1.5 text-sm text-gray-600 dark:text-gray-300'>
              {product.details.ingredients.map((ingredient) => (
                <li key={ingredient}>• {ingredient}</li>
              ))}
            </ul>
          </div>

          <div className='mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <p className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-3xl font-black text-transparent'>
              ${product.attributeValues.p_price.value.toFixed(2)}
            </p>
            <div className='flex flex-col items-stretch gap-2 sm:items-end'>
              <div className='flex items-center gap-2 rounded-xl border border-orange-200/70 bg-orange-50/70 px-2 py-1 dark:border-orange-800/60 dark:bg-orange-950/20'>
                <button
                  type='button'
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className='h-7 w-7 rounded-md bg-white text-orange-700 shadow-sm transition hover:bg-orange-100 dark:bg-gray-900 dark:text-orange-300 dark:hover:bg-orange-900/40'
                  aria-label='Decrease quantity'
                >
                  -
                </button>
                <span className='w-6 text-center text-sm font-bold text-gray-800 dark:text-gray-100'>
                  {quantity}
                </span>
                <button
                  type='button'
                  onClick={() => setQuantity((value) => Math.min(20, value + 1))}
                  className='h-7 w-7 rounded-md bg-white text-orange-700 shadow-sm transition hover:bg-orange-100 dark:bg-gray-900 dark:text-orange-300 dark:hover:bg-orange-900/40'
                  aria-label='Increase quantity'
                >
                  +
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                className='h-11 rounded-xl border-0 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 px-6 font-bold text-white hover:from-red-600 hover:via-orange-600 hover:to-yellow-600'
              >
                <ShoppingCart className='mr-2 h-4 w-4' />
                Add {quantity} to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
