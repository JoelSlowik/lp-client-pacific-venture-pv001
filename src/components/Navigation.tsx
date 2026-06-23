'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { href: '/trips', label: 'Fishing Trips' },
  { href: '/charters', label: 'Charters' },
  { href: '/booking', label: 'Book Now' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-ink/95 backdrop-blur-md border-b border-brand-ocean/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://h3f5ivd9.b-cdn.net/775f917ca29ec61a08f9ef2778ddf26c.png"
              alt="Pacific Venture"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-semibold text-white tracking-wide">
                Pacific Venture
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-foam/60">
                Sportfishing &amp; Charters
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  l.href === '/booking'
                    ? 'btn-primary text-xs px-5 py-2.5'
                    : 'text-sm font-medium text-brand-foam/80 hover:text-white transition-colors'
                }
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+17603411905"
              className="flex items-center gap-2 text-sm text-brand-gold hover:text-brand-ember transition-colors"
            >
              <Phone className="w-4 h-4" />
              (760) 341-1905
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-brand-foam hover:bg-brand-deep"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-ocean/20 bg-brand-ink px-4 py-6 space-y-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 px-4 rounded-lg text-brand-foam/80 hover:text-white hover:bg-brand-deep/60 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+17603411905"
            className="flex items-center gap-2 py-3 px-4 text-brand-gold"
          >
            <Phone className="w-4 h-4" />
            (760) 341-1905
          </a>
        </div>
      )}
    </nav>
  );
}
