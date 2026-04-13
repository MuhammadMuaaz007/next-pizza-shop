'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim().length) {
      router.push(
        `/search?searchTerm=${encodeURIComponent(searchQuery.trim())}`
      );
      setIsMobileMenuOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className='sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-950/80 border-b border-gray-200/20 dark:border-gray-800/20 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between gap-3'>
          <div className='flex items-center'>
            <Link href='/' className='shrink-0 group'>
              <span className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent text-2xl sm:text-3xl font-black tracking-tight transition-all duration-300'>
                🍕 MuaazPizza
              </span>
            </Link>
          </div>

          <div className='hidden lg:flex flex-1 items-center justify-end gap-4'>
            <div className='relative w-full max-w-sm group'>
              <form onSubmit={handleSearch} className='relative'>
                <Search className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-red-600' />
                <input
                  type='text'
                  placeholder='Search pizzas...'
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className='h-12 w-full rounded-2xl border border-orange-200/70 dark:border-orange-800/40 bg-orange-50/70 dark:bg-orange-900/15 pl-12 pr-4 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-400 dark:focus:border-orange-600 focus:bg-white dark:focus:bg-orange-900/30 focus:ring-4 focus:ring-orange-200/50 dark:focus:ring-orange-900/40'
                />
              </form>
            </div>

            <Link href='/cart' onClick={handleMenuItemClick}>
              <Button
                size='icon'
                className='relative h-12 w-12 rounded-2xl bg-orange-50/80 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/40 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer'
                variant='ghost'
              >
                <ShoppingCart className='h-6 w-6 text-orange-600 dark:text-orange-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300' />
              </Button>
            </Link>

            <div className='flex items-center gap-3'>
              <Link href='/auth?type=login'>
                <Button
                  variant='outline'
                  className='h-12 px-6 rounded-2xl border-2 border-orange-200 dark:border-orange-700 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold text-orange-700 dark:text-orange-300 cursor-pointer'
                >
                  Login
                </Button>
              </Link>
              <Link href='/auth?type=signup'>
                <Button className='h-12 px-6 rounded-2xl bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 cursor-pointer'>
                  Order Now! 🍕
                </Button>
              </Link>
            </div>
          </div>

          <div className='lg:hidden flex items-center gap-2'>
            <Link href='/cart' onClick={handleMenuItemClick}>
              <Button
                variant='ghost'
                size='icon'
                className='h-12 w-12 rounded-2xl bg-orange-50/80 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/40 transition-all duration-300 hover:scale-105 cursor-pointer'
                aria-label='Open cart'
              >
                <ShoppingCart className='h-6 w-6 text-orange-600 dark:text-orange-400' />
              </Button>
            </Link>

            <Button
              variant='ghost'
              size='icon'
              onClick={handleMobileMenuToggle}
              className='h-12 w-12 rounded-2xl bg-orange-50/80 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/40 transition-all duration-300 hover:scale-105 cursor-pointer relative z-10'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6 text-orange-600 dark:text-orange-400' />
              ) : (
                <Menu className='h-6 w-6 text-orange-600 dark:text-orange-400' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50 shadow-2xl animate-in slide-in-from-top-2 duration-200'>
          <div className='px-6 pt-6 pb-6 space-y-4'>
            <form onSubmit={handleSearch} className='relative group'>
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-red-600' />
              <input
                type='text'
                placeholder='Search pizzas...'
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className='h-12 w-full rounded-2xl border border-orange-200/70 dark:border-orange-800/40 bg-orange-50/70 dark:bg-orange-900/15 pl-12 pr-4 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-400 dark:focus:border-orange-600 focus:bg-white dark:focus:bg-orange-900/30 focus:ring-4 focus:ring-orange-200/50 dark:focus:ring-orange-900/40'
              />
            </form>

            <Link
              href='/auth?type=login'
              className='block w-full p-4 text-center rounded-2xl border-2 border-orange-200 dark:border-orange-700 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 font-semibold text-orange-700 dark:text-orange-300 cursor-pointer'
              onClick={handleMenuItemClick}
            >
              Login
            </Link>
            <Link
              href='/auth?type=signup'
              className='block w-full p-4 text-center rounded-2xl bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg transition-all duration-300 cursor-pointer'
              onClick={handleMenuItemClick}
            >
              Order Now! 🍕
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}