import Image from 'next/image';
import Link from 'next/link';
import { Clock3, Leaf, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { staticProducts } from '@/lib/static-products';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-linear-to-br from-red-50/30 via-orange-50/20 to-yellow-50/30 dark:from-red-950/10 dark:via-orange-950/10 dark:to-yellow-950/10'>
      <section className='relative overflow-hidden border-b border-orange-200/40 py-16 sm:py-20 lg:py-24'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8'>
          <div className='space-y-6 text-center lg:text-left'>
            <p className='inline-flex rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-orange-700 dark:border-orange-800 dark:bg-gray-900/70 dark:text-orange-300'>
              HOT AND FRESH DAILY
            </p>
            <h1 className='text-4xl font-black leading-tight sm:text-5xl lg:text-6xl'>
              <span className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                Pizza That Feels
              </span>
              <br />
              <span className='text-gray-900 dark:text-white'>Like Home</span>
            </h1>
            <p className='mx-auto max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg lg:mx-0'>
              Crispy crust, premium toppings, and fast delivery. Build your
              perfect order in seconds and enjoy every slice.
            </p>
            <div className='flex flex-col justify-center gap-3 sm:flex-row lg:justify-start'>
              <Link href='/auth?type=signup'>
                <Button className='h-12 w-full rounded-2xl border-0 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 px-8 font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 sm:w-auto'>
                  Start Ordering
                </Button>
              </Link>
              <Link href='/cart'>
                <Button
                  variant='outline'
                  className='h-12 w-full rounded-2xl border-2 border-orange-200 bg-white/80 px-8 font-semibold text-orange-700 transition-all duration-200 hover:bg-orange-50 dark:border-orange-800 dark:bg-gray-900/60 dark:text-orange-300 sm:w-auto'
                >
                  View Cart
                </Button>
              </Link>
            </div>
          </div>

          <div className='relative'>
            <div className='overflow-hidden rounded-3xl border border-orange-200/60 bg-white/70 shadow-2xl dark:border-orange-900/40 dark:bg-gray-900/60'>
              <Image
                src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&auto=format&fit=crop'
                alt='Freshly baked pizza'
                width={1400}
                height={900}
                className='h-75 w-full object-cover sm:h-105'
                priority
              />
            </div>
            <div className='absolute -bottom-5 -left-5 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-gray-700 shadow-lg dark:bg-gray-900/85 dark:text-gray-200'>
              30 min average delivery
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8'>
        <div className='grid gap-4 sm:grid-cols-3'>
          {[
            { label: 'Happy Customers', value: '12k+' },
            { label: 'Pizzas Delivered', value: '48k+' },
            { label: 'Avg Rating', value: '4.9/5' },
          ].map((item) => (
            <div
              key={item.label}
              className='rounded-2xl border border-orange-200/50 bg-white/80 p-5 text-center shadow-sm dark:border-orange-900/40 dark:bg-gray-900/60'
            >
              <p className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-3xl font-black text-transparent'>
                {item.value}
              </p>
              <p className='mt-1 text-sm font-medium text-gray-600 dark:text-gray-300'>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8'>
        <div className='rounded-3xl border border-orange-300/70 bg-linear-to-br from-orange-100 via-amber-100 to-red-100 p-6 shadow-sm backdrop-blur-sm dark:border-orange-800/60 dark:from-orange-950/45 dark:via-orange-900/35 dark:to-red-950/35 sm:p-8 lg:p-10'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold tracking-[0.16em] text-orange-800 dark:text-orange-200'>
              WHY CHOOSE MUAAZ PIZZA
            </p>
            <h2 className='mt-2 text-3xl font-black sm:text-4xl'>
              <span className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                Taste, Trust, and Speed
              </span>
            </h2>
            <p className='mt-4 text-sm leading-relaxed text-orange-900/80 dark:text-orange-100/80 sm:text-base'>
              We do more than deliver pizza. We craft every order with premium
              ingredients, careful preparation, and quick service so every bite
              feels fresh, warm, and satisfying.
            </p>
          </div>

          <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                title: 'Fresh Ingredients',
                description:
                  'Daily-cut vegetables, premium cheese, and hand-made dough in every order.',
                icon: Leaf,
              },
              {
                title: 'Fast Delivery',
                description:
                  'Our kitchen and riders work together to get your pizza to you quickly.',
                icon: Clock3,
              },
              {
                title: 'Quality Guaranteed',
                description:
                  'From oven to doorstep, every pizza passes a strict quality check.',
                icon: ShieldCheck,
              },
              {
                title: 'Signature Flavor',
                description:
                  'Unique sauces and balanced toppings made to keep you coming back.',
                icon: Sparkles,
              },
            ].map((reason) => (
              <div
                key={reason.title}
                className='rounded-2xl border border-orange-300/70 bg-white/80 p-5 shadow-sm dark:border-orange-800/60 dark:bg-gray-950/55'
              >
                <div className='mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-red-500 via-orange-500 to-yellow-500 text-white'>
                  <reason.icon className='h-5 w-5' />
                </div>
                <h3 className='text-base font-bold text-orange-950 dark:text-orange-50'>
                  {reason.title}
                </h3>
                <p className='mt-1 text-sm leading-relaxed text-orange-900/75 dark:text-orange-100/75'>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <p className='text-xs font-bold tracking-[0.16em] text-orange-700 dark:text-orange-300'>
            OUR COMMUNITY
          </p>
          <h2 className='mt-2 text-3xl font-black sm:text-4xl'>
            <span className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
              Loved By Pizza Fans Everywhere
            </span>
          </h2>
          <p className='mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base'>
            Thousands of customers trust Muaaz Pizza for family dinners, late
            night cravings, and celebrations. Here is what our community says
            after trying our signature flavors.
          </p>
        </div>

        <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              name: 'Ayesha Khan',
              role: 'Lahore',
              avatar:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&auto=format',
              comment:
                'The crust is always perfectly baked and delivery is super quick. It has become our weekend tradition.',
            },
            {
              name: 'Ahmed Raza',
              role: 'Karachi',
              avatar:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format',
              comment:
                'I ordered for a game night and everyone loved it. Fresh toppings, rich sauce, and great portion size.',
            },
            {
              name: 'Sara Ali',
              role: 'Islamabad',
              avatar:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format',
              comment:
                'Best pizza experience in town. The quality is consistent and support is always friendly and helpful.',
            },
          ].map((review) => (
            <article
              key={review.name}
              className='rounded-2xl border border-orange-200/50 bg-white/85 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-orange-900/40 dark:bg-gray-900/65'
            >
              <div className='mb-4 flex items-start justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-orange-300/70 dark:ring-orange-700/60'>
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes='44px'
                      className='object-cover'
                    />
                  </div>
                  <div className='text-left'>
                    <p className='text-sm font-bold text-gray-900 dark:text-gray-100'>
                      {review.name}
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      {review.role}
                    </p>
                  </div>
                </div>
                <Quote className='h-5 w-5 text-orange-400' />
              </div>
              <p className='text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                {review.comment}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8'>
        <div className='relative overflow-hidden rounded-3xl border border-orange-300/70 bg-linear-to-br from-orange-200 via-amber-100 to-red-100 p-6 shadow-sm dark:border-orange-800/60 dark:from-orange-950/60 dark:via-orange-900/45 dark:to-red-950/45 sm:p-8'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]'></div>
          <div className='text-center'>
            <p className='text-xs font-bold tracking-[0.16em] text-orange-900 dark:text-orange-200'>
              COMMUNITY IMPACT
            </p>
            <h2 className='mt-2 text-2xl font-black sm:text-3xl'>
              <span className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                Numbers That Show Our Love For Pizza
              </span>
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-sm text-orange-900/80 dark:text-orange-100/80'>
              Real numbers from our growing family of pizza lovers across the city.
            </p>
          </div>

          <div className='relative mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              { label: 'Happy Customers', value: '12,000+' },
              { label: 'Pizzas Delivered', value: '48,000+' },
              { label: 'Awards Won', value: '25+' },
              { label: 'Years of Excellence', value: '7+' },
            ].map((item) => (
              <div
                key={item.label}
                className='rounded-2xl border border-orange-300/70 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm dark:border-orange-700/60 dark:bg-gray-950/60'
              >
                <p className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-3xl font-black text-transparent'>
                  {item.value}
                </p>
                <p className='mt-1 text-sm font-semibold text-orange-900 dark:text-orange-100'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <p className='text-xs font-bold tracking-[0.16em] text-orange-700 dark:text-orange-300'>
            FEATURED MENU
          </p>
          <h2 className='mt-2 text-3xl font-black sm:text-4xl'>
            <span className='bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
              Chef&apos;s Popular Picks
            </span>
          </h2>
          <p className='mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base'>
            A few fan favorites made with fresh dough, rich sauces, and premium
            toppings.
          </p>
        </div>

        <div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {staticProducts.slice(0, 3).map((pizza) => (
            <ProductCard key={pizza.id} product={pizza} />
          ))}
        </div>

        <div className='mt-8 text-center'>
          <Link href='/menu'>
            <Button className='h-11 rounded-xl border-0 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 px-6 font-bold text-white hover:from-red-600 hover:via-orange-600 hover:to-yellow-600'>
              View Full Menu
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
