import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Anchor, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-ink border-t border-brand-ocean/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://h3f5ivd9.b-cdn.net/074e89773849ead55b3b82a039b99a90.png"
                alt="Pacific Venture"
                width={56}
                height={56}
              />
            </div>
            <p className="text-sm text-brand-foam/60 leading-relaxed">
              Premier private sportfishing charters and ocean tours out of Oceanside, California since 1992.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <div className="space-y-2.5 text-sm">
              <Link href="/trips" className="block text-brand-foam/60 hover:text-brand-gold transition-colors">Fishing Trips</Link>
              <Link href="/charters" className="block text-brand-foam/60 hover:text-brand-gold transition-colors">Charter Services</Link>
              <Link href="/booking" className="block text-brand-foam/60 hover:text-brand-gold transition-colors">Book a Trip</Link>
              <Link href="/gallery" className="block text-brand-foam/60 hover:text-brand-gold transition-colors">Gallery</Link>
              <Link href="/about" className="block text-brand-foam/60 hover:text-brand-gold transition-colors">About Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+17603411905" className="flex items-center gap-2.5 text-brand-foam/60 hover:text-brand-gold transition-colors">
                <Phone className="w-4 h-4 text-brand-gold/60" />
                (760) 341-1905
              </a>
              <a href="mailto:pacificventurecharters@gmail.com" className="flex items-center gap-2.5 text-brand-foam/60 hover:text-brand-gold transition-colors">
                <Mail className="w-4 h-4 text-brand-gold/60" />
                pacificventurecharters@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-brand-foam/60">
                <MapPin className="w-4 h-4 text-brand-gold/60 flex-shrink-0 mt-0.5" />
                Oceanside, CA
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/pacificventuresportfishing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-foam/60 hover:text-brand-gold transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @pacificventuresportfishing
            </a>
            <div className="mt-6">
              <Link href="/booking" className="btn-primary text-xs px-5 py-2.5">
                Book Your Trip
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-ocean/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-foam/40">
            &copy; {new Date().getFullYear()} Pacific Venture Sportfishing &amp; Charters. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-brand-foam/40">
            <Anchor className="w-3 h-3" />
            Oceanside Harbor, California
          </div>
        </div>
      </div>
    </footer>
  );
}
