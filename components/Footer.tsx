'use client';

import { Button } from '@/components/ui/button';
import {
  Send,
  Pizza,
  MapPin,
  Phone,
  Clock,
  Heart,
  CreditCard,
  Shield,
  Truck,
  Award,
  Mail,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='relative overflow-hidden border-t border-orange-200/60 bg-linear-to-br from-orange-50 via-white to-red-50 text-gray-900 dark:border-orange-900/40 dark:from-orange-950/30 dark:via-gray-950 dark:to-red-950/20'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.14),transparent_32%)]'></div>
      </div>

      {/* Newsletter Section */}
      <div className='relative border-b border-orange-200/60 dark:border-orange-900/40'>
        <div className='container mx-auto px-4 py-12 md:py-16'>
          <div className='grid items-center gap-8 rounded-3xl border border-orange-200/60 bg-white/75 p-6 shadow-sm backdrop-blur-sm dark:border-orange-900/40 dark:bg-gray-950/40 md:gap-12 lg:grid-cols-2 lg:p-8'>
            <div className='w-full text-center lg:pr-6 lg:text-left'>
              <p className='text-xs font-bold tracking-[0.16em] text-orange-700 dark:text-orange-300'>
                STAY CONNECTED
              </p>
              <h3 className='mb-3 mt-2 text-2xl font-black md:text-3xl lg:text-4xl'>
                <span className='bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                  Stay Updated! 🍕
                </span>
              </h3>
              <p className='text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg'>
                Get exclusive deals, new pizza launches, and mouth-watering
                offers delivered straight to your inbox!
              </p>
            </div>
            <div className='w-full'>
              <div className='mx-auto flex w-full max-w-2xl flex-col gap-3 md:gap-4 sm:flex-row lg:mx-0'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='h-12 w-full flex-1 rounded-2xl border border-orange-200/80 bg-white/95 px-4 text-base text-gray-900 placeholder:text-gray-500 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 dark:border-orange-800/50 dark:bg-gray-950/70 dark:text-gray-100 dark:placeholder:text-gray-400 md:h-14 md:px-6 md:text-lg'
                />
                <Button className='h-12 w-full rounded-2xl border-0 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 px-6 text-base font-semibold whitespace-nowrap text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 sm:w-auto md:h-14 md:px-8 md:text-lg'>
                  Subscribe
                  <Send className='ml-2 h-4 w-4 md:h-5 md:w-5' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='relative container mx-auto px-4 py-12 md:py-16'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 md:gap-12'>
          {/* Brand Section */}
          <div className='space-y-4 text-center md:space-y-6 md:text-left lg:col-span-2'>
            <div className='flex items-center justify-center space-x-3 md:justify-start'>
              <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-red-500 via-orange-500 to-yellow-500 shadow-lg md:h-12 md:w-12'>
                <Pizza className='h-4 w-4 md:h-5 md:w-5 text-white' />
              </div>
              <div>
                <h2 className='text-xl font-black md:text-2xl'>
                  <span className='bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                    MuaazPizza
                  </span>
                </h2>
                <p className='text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
                  Authentic Italian Since 2019
                </p>
              </div>
            </div>

            <p className='text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg'>
              We&apos;re passionate about bringing you the most authentic
              Italian pizza experience with traditional wood-fired ovens and the
              finest imported ingredients.
            </p>

            {/* Social Media */}
            <div>
              <h4 className='mb-3 text-base font-bold text-gray-900 dark:text-white md:mb-4 md:text-lg'>
                Follow Us
              </h4>
              <div className='flex justify-center space-x-3 md:justify-start md:space-x-4'>
                {[
                  { label: 'FB', href: '#', color: 'hover:text-blue-600' },
                  { label: 'IG', href: '#', color: 'hover:text-pink-600' },
                  { label: 'X', href: '#', color: 'hover:text-gray-900' },
                  { label: 'YT', href: '#', color: 'hover:text-red-600' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-orange-200/70 bg-white/80 text-gray-600 shadow-sm transition-all duration-200 hover:scale-110 hover:bg-orange-50 dark:border-orange-800/60 dark:bg-gray-950/50 ${social.color} md:h-12 md:w-12`}
                  >
                    <span className='text-xs md:text-sm font-bold'>{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4 text-center md:space-y-6 md:text-left'>
            <h4 className='text-base font-bold text-gray-900 dark:text-white md:text-lg'>
              Quick Links
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              {[
                { name: 'Our Menu', href: '/menu' },
                { name: 'Order Online', href: '/order' },
                { name: 'Track Order', href: '/track' },
                { name: 'Locations', href: '/locations' },
                { name: 'Careers', href: '/careers' },
                { name: 'Franchise', href: '/franchise' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='inline-block text-sm text-gray-600 transition-colors duration-200 hover:translate-x-1 hover:text-orange-600 dark:text-gray-300 md:text-base'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className='space-y-4 text-center md:space-y-6 md:text-left'>
            <h4 className='text-base font-bold text-gray-900 dark:text-white md:text-lg'>
              Customer Care
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              {[
                { name: 'Help Center', href: '/help' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Food Safety', href: '/safety' },
                { name: 'Nutrition Info', href: '/nutrition' },
                { name: 'Allergen Info', href: '/allergens' },
                { name: 'Feedback', href: '/feedback' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='inline-block text-sm text-gray-600 transition-colors duration-200 hover:translate-x-1 hover:text-orange-600 dark:text-gray-300 md:text-base'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4 text-center md:space-y-6 md:text-left'>
            <h4 className='text-base font-bold text-gray-900 dark:text-white md:text-lg'>
              Get in Touch
            </h4>
            <div className='space-y-3 md:space-y-4'>
              <div className='flex items-start justify-center space-x-3 md:justify-start'>
                <div className='mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 dark:bg-red-950/40 md:h-10 md:w-10'>
                  <MapPin className='h-4 w-4 md:h-5 md:w-5 text-red-600' />
                </div>
                <div className='text-left'>
                  <p className='text-sm font-medium text-gray-900 dark:text-gray-100 md:text-base'>
                    123 Pizza Street
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
                    Downtown, NY 10001
                  </p>
                </div>
              </div>

              <div className='flex items-start justify-center space-x-3 md:justify-start'>
                <div className='mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950/40 md:h-10 md:w-10'>
                  <Phone className='h-4 w-4 md:h-5 md:w-5 text-orange-600' />
                </div>
                <div className='text-left'>
                  <p className='text-sm font-medium text-gray-900 dark:text-gray-100 md:text-base'>
                    +1 (555) 123-PIZZA
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
                    24/7 Order Hotline
                  </p>
                </div>
              </div>

              <div className='flex items-start justify-center space-x-3 md:justify-start'>
                <div className='mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-100 dark:bg-yellow-950/40 md:h-10 md:w-10'>
                  <Clock className='h-4 w-4 md:h-5 md:w-5 text-yellow-600' />
                </div>
                <div className='text-left'>
                  <p className='text-sm font-medium text-gray-900 dark:text-gray-100 md:text-base'>
                    11AM - 11PM
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
                    Daily Delivery Hours
                  </p>
                </div>
              </div>

              <div className='flex items-start justify-center space-x-3 md:justify-start'>
                <div className='mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950/40 md:h-10 md:w-10'>
                  <Mail className='h-4 w-4 md:h-5 md:w-5 text-purple-600' />
                </div>
                <div className='text-left'>
                  <p className='text-sm font-medium text-gray-900 dark:text-gray-100 md:text-base clamp'>
                    hello@Muaaz.com
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
                    Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className='relative border-t border-orange-200/60 dark:border-orange-900/40'>
        <div className='container mx-auto px-4 py-6 md:py-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center'>
            {[
              {
                icon: Shield,
                title: 'Safe & Secure',
                subtitle: 'SSL Protected',
                bgColor: 'bg-blue-100',
                iconColor: 'text-blue-600',
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                subtitle: '25-min Average',
                bgColor: 'bg-green-100',
                iconColor: 'text-green-600',
              },
              {
                icon: CreditCard,
                title: 'Easy Payment',
                subtitle: 'All Cards Accepted',
                bgColor: 'bg-indigo-100',
                iconColor: 'text-indigo-600',
              },
              {
                icon: Award,
                title: 'Quality Assured',
                subtitle: '100% Fresh',
                bgColor: 'bg-amber-100',
                iconColor: 'text-amber-600',
              },
            ].map((badge, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center space-y-2 rounded-2xl border border-orange-200/50 bg-white/70 p-3 shadow-sm backdrop-blur-sm dark:border-orange-900/30 dark:bg-gray-950/45 md:flex-row md:space-y-0 md:space-x-3'
              >
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 ${badge.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <badge.icon
                    className={`h-4 w-4 md:h-5 md:w-5 ${badge.iconColor}`}
                  />
                </div>
                <div className='text-center md:text-left'>
                  <p className='text-xs font-medium text-gray-900 dark:text-gray-100 md:text-sm'>
                    {badge.title}
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='relative border-t border-orange-200/60 bg-white/70 dark:border-orange-900/40 dark:bg-gray-950/45'>
        <div className='container mx-auto px-4 py-4 md:py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0'>
            <div className='flex flex-col items-center space-y-2 text-center text-xs text-gray-500 dark:text-gray-400 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6 md:text-sm'>
              <p>&copy; 2024 MuaazPizza. All rights reserved.</p>
              <div className='flex flex-wrap justify-center space-x-3 md:space-x-4'>
                <Link
                  href='/privacy'
                  className='transition-colors hover:text-orange-600 dark:hover:text-orange-300'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'
                  className='transition-colors hover:text-orange-600 dark:hover:text-orange-300'
                >
                  Terms of Service
                </Link>
                <Link
                  href='/cookies'
                  className='transition-colors hover:text-orange-600 dark:hover:text-orange-300'
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className='flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
              <Heart className='h-4 w-4 md:h-5 md:w-5 text-red-500' />
              <span>Made with love in Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}