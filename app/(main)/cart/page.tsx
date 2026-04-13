'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const STORAGE_KEY = 'muaaz-cart-items';

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  const loadItems = () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setItems([]);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as CartItem[];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch {
      setItems([]);
    }
  };

  const saveItems = (nextItems: CartItem[]) => {
    setItems(nextItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
    window.dispatchEvent(new Event('cart-updated'));
  };

  useEffect(() => {
    loadItems();

    const sync = () => loadItems();
    window.addEventListener('storage', sync);
    window.addEventListener('cart-updated', sync);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('cart-updated', sync);
    };
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );
  const delivery = items.length > 0 ? 2.99 : 0;
  const total = subtotal + delivery;

  const increase = (id: string) => {
    const nextItems = items.map((item) =>
      item.id === id ? { ...item, quantity: Math.min(20, item.quantity + 1) } : item
    );
    saveItems(nextItems);
  };

  const decrease = (id: string) => {
    const nextItems = items
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    saveItems(nextItems);
  };

  const removeItem = (id: string) => {
    saveItems(items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    saveItems([]);
  };

  return (
    <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mb-8 rounded-3xl border border-orange-200/60 bg-linear-to-br from-orange-100 via-amber-100 to-red-100 p-6 dark:border-orange-800/60 dark:from-orange-950/60 dark:via-orange-900/45 dark:to-red-950/45 sm:p-8'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div>
            <p className='text-xs font-bold tracking-[0.16em] text-orange-700 dark:text-orange-300'>
              YOUR CART
            </p>
            <h1 className='mt-1 text-3xl font-black text-gray-900 dark:text-white sm:text-4xl'>
              Cart Items
            </h1>
            <p className='mt-2 text-sm text-orange-900/80 dark:text-orange-100/80'>
              Review your order, adjust quantities, and checkout when ready.
            </p>
          </div>
          {items.length > 0 && (
            <div className='inline-flex items-center rounded-full border border-orange-300/70 bg-white/70 px-3 py-1 text-xs font-bold text-orange-800 dark:border-orange-700/60 dark:bg-gray-900/50 dark:text-orange-200'>
              {itemCount} item{itemCount === 1 ? '' : 's'} selected
            </div>
          )}
        </div>

        {items.length > 0 && (
          <Button
            onClick={clearCart}
            variant='outline'
            className='mt-5 border-red-200 bg-white/70 text-red-600 hover:bg-red-50 dark:border-red-900/60 dark:bg-gray-900/50 dark:text-red-300 dark:hover:bg-red-950/30'
          >
            <Trash2 className='mr-2 h-4 w-4' />
            Clear Cart
          </Button>
        )}
      </div>

      {items.length === 0 ? (
        <div className='rounded-3xl border border-orange-200/60 bg-white/85 p-10 text-center shadow-sm dark:border-orange-900/40 dark:bg-gray-900/60'>
          <div className='mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-red-500 via-orange-500 to-yellow-500 text-white'>
            <ShoppingCart className='h-7 w-7' />
          </div>
          <p className='mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100'>
            Your cart is empty
          </p>
          <p className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
            Add your favorite pizza and it will appear here.
          </p>
          <Link href='/' className='mt-6 inline-block'>
            <Button className='bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 text-white'>
              Browse Pizzas
            </Button>
          </Link>
        </div>
      ) : (
        <div className='grid gap-6 lg:grid-cols-[1fr_360px]'>
          <div className='space-y-4'>
            {items.map((item) => (
              <article
                key={item.id}
                className='rounded-2xl border border-orange-200/60 bg-white/90 p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:border-orange-900/40 dark:bg-gray-900/70 sm:p-5'
              >
                <div className='flex items-center gap-4'>
                  <div className='relative h-20 w-20 overflow-hidden rounded-xl'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes='80px'
                      className='object-cover'
                    />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h2 className='truncate text-base font-bold text-gray-900 dark:text-gray-100'>
                      {item.name}
                    </h2>
                    <p className='text-sm font-semibold text-orange-700 dark:text-orange-300'>
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <button
                    type='button'
                    onClick={() => removeItem(item.id)}
                    className='rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30'
                    aria-label='Remove item'
                  >
                    <Trash2 className='h-4 w-4' />
                  </button>
                </div>

                <div className='mt-4 flex items-center justify-between'>
                  <div className='flex items-center gap-2 rounded-xl border border-orange-200/70 bg-orange-50/70 px-2 py-1 dark:border-orange-800/60 dark:bg-orange-950/20'>
                    <button
                      type='button'
                      onClick={() => decrease(item.id)}
                      className='h-7 w-7 rounded-md bg-white text-orange-700 shadow-sm transition hover:bg-orange-100 dark:bg-gray-900 dark:text-orange-300 dark:hover:bg-orange-900/40'
                      aria-label='Decrease quantity'
                    >
                      <Minus className='mx-auto h-3.5 w-3.5' />
                    </button>
                    <span className='w-6 text-center text-sm font-bold text-gray-800 dark:text-gray-100'>
                      {item.quantity}
                    </span>
                    <button
                      type='button'
                      onClick={() => increase(item.id)}
                      className='h-7 w-7 rounded-md bg-white text-orange-700 shadow-sm transition hover:bg-orange-100 dark:bg-gray-900 dark:text-orange-300 dark:hover:bg-orange-900/40'
                      aria-label='Increase quantity'
                    >
                      <Plus className='mx-auto h-3.5 w-3.5' />
                    </button>
                  </div>
                  <p className='text-base font-black text-gray-900 dark:text-gray-100'>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <aside className='h-fit rounded-2xl border border-orange-200/60 bg-white/90 p-5 shadow-sm dark:border-orange-900/40 dark:bg-gray-900/70 lg:sticky lg:top-24'>
            <h2 className='text-lg font-black text-gray-900 dark:text-white'>
              Order Summary
            </h2>
            <p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>
              Prices include taxes where applicable.
            </p>

            <div className='mt-4 space-y-2 text-sm'>
              <div className='flex items-center justify-between text-gray-600 dark:text-gray-300'>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className='flex items-center justify-between text-gray-600 dark:text-gray-300'>
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className='mt-2 flex items-center justify-between border-t border-orange-200 pt-2 text-base font-bold text-gray-900 dark:border-orange-900/60 dark:text-white'>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className='mt-4 rounded-xl border border-orange-200/70 bg-orange-50/70 p-3 text-xs text-orange-800 dark:border-orange-800/60 dark:bg-orange-950/20 dark:text-orange-200'>
              Spend $25 more to unlock free delivery on your next order.
            </div>

            <Button className='mt-5 h-11 w-full rounded-xl border-0 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 font-bold text-white hover:from-red-600 hover:via-orange-600 hover:to-yellow-600'>
              Checkout
            </Button>
          </aside>
        </div>
      )}
    </section>
  );
}
