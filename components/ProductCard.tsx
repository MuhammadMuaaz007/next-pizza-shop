'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import type { ProductCardProduct } from '@/lib/static-products';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const ProductCard = ({ product }: { product: ProductCardProduct }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (selectedProduct: ProductCardProduct) => {
    const storageKey = 'muaaz-cart-items';
    const existingItems = localStorage.getItem(storageKey);
    const parsedItems: CartItem[] = existingItems ? JSON.parse(existingItems) : [];
    const itemId = String(selectedProduct.id);
    const itemIndex = parsedItems.findIndex((item) => item.id === itemId);

    if (itemIndex >= 0) {
      parsedItems[itemIndex].quantity += 1;
    } else {
      parsedItems.push({
        id: itemId,
        name: selectedProduct.attributeValues.p_title.value || 'Product',
        price: selectedProduct.attributeValues.p_price.value || 0,
        quantity: 1,
        image: selectedProduct.attributeValues.p_image.value.downloadLink,
      });
    }

    localStorage.setItem(storageKey, JSON.stringify(parsedItems));
    window.dispatchEvent(new Event('cart-updated'));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const availability = product.attributeValues.p_available || 'Unavailable';
  const rawDescription = product.attributeValues.p_description.value;
  const descriptionHtml =
    Array.isArray(rawDescription) &&
    rawDescription[0] &&
    typeof rawDescription[0] === 'object' &&
    'htmlValue' in (rawDescription[0] as Record<string, unknown>)
      ? String((rawDescription[0] as { htmlValue?: string }).htmlValue || '')
      : typeof rawDescription === 'string'
        ? rawDescription
        : 'No description available';

  return (
    <div className='group relative h-full'>
      <div className='relative overflow-hidden h-full flex flex-col rounded-3xl shadow-lg border border-orange-200/50 dark:border-orange-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 hover:border-orange-300 dark:hover:border-orange-600'>
        <Link
          href={`/product/${product.id}`}
          className='relative w-full pt-[75%] bg-linear-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-t-3xl overflow-hidden cursor-pointer'
        >
          <Image
            src={product.attributeValues.p_image.value.downloadLink}
            alt={product.attributeValues.p_title.value}
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw'
          />
        </Link>

        <div className='p-6 grow flex flex-col'>
          <Link href={`/product/${product.id}`} className='cursor-pointer'>
            <h3 className='text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200 line-clamp-2 leading-tight'>
              {product.attributeValues.p_title.value}
            </h3>
          </Link>

          <div
            className='text-gray-600 dark:text-gray-400 line-clamp-3 text-sm mb-4 grow leading-relaxed'
            dangerouslySetInnerHTML={{
              __html: descriptionHtml,
            }}
          />

          <div className='flex items-center justify-between mb-4'>
            <p className='text-2xl font-black bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
              ${product.attributeValues.p_price.value.toFixed(2)}
            </p>
            <div className='flex items-center space-x-1'>
              <>
                <div
                  className={`w-2 h-2 rounded-full ${
                    availability === 'Available' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></div>
                <span
                  className={`text-xs font-semibold ${
                    availability === 'Available'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {availability}
                </span>
              </>
            </div>
          </div>
        </div>

        <div className='p-6 pt-0'>
          <Button
            className={`w-full h-12 font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 border-0 cursor-pointer text-base ${
              availability === 'Available'
                ? 'bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white'
                : 'bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed opacity-60'
            }`}
            disabled={availability !== 'Available'}
            onClick={() => {
              if (availability === 'Available') {
                handleAddToCart(product);
              }
            }}
          >
            {availability === 'Available' ? (
              added ? (
                <>
                  <Check className='w-5 h-5 mr-2' />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className='w-5 h-5 mr-2' />
                  Add to Cart 🍕
                </>
              )
            ) : (
              <>
                <ShoppingCart className='w-5 h-5 mr-2' />
                Out of Order ❌
              </>
            )}
          </Button>
        </div>

        {/* Simplified decorative gradient bar */}
        <div className='absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-b-3xl'></div>
      </div>
    </div>
  );
};

export default ProductCard;