import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Anchor, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Pacific Venture Sportfishing',
  description: 'Contact Pacific Venture Sportfishing & Charters in Oceanside, CA. Call (760) 341-1905 or email pacificventurecharters@gmail.com.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy py-12 px-4 border-b border-brand-ocean/20">
        <div className="max-w-4xl mx-auto">
          <div className="gold-rule mb-4" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
            Get In Touch
          </h1>
          <p className="text-brand-foam/60 text-lg">
            Ready to book or have questions? We&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-ink">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            <a
              href="tel:+17603411905"
              className="card-hover flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                <Phone className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">Call Us</h3>
                <p className="text-brand-gold font-medium">(760) 341-1905</p>
                <p className="text-xs text-brand-foam/40 mt-1">Best way to reach Captain Chuck</p>
              </div>
            </a>

            <a
              href="mailto:pacificventurecharters@gmail.com"
              className="card-hover flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                <Mail className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">Email</h3>
                <p className="text-brand-foam/70 text-sm">pacificventurecharters@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/Pacific+Venture+Charter+Service+Oceanside+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                <MapPin className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">Location</h3>
                <p className="text-brand-foam/70 text-sm">Oceanside Harbor, CA</p>
                <p className="text-xs text-brand-foam/40 mt-1">
                  Serving Oceanside, Carlsbad, Bonsall &amp; Vista
                </p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/pacificventuresportfishing"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                <Instagram className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">Instagram</h3>
                <p className="text-brand-foam/70 text-sm">@pacificventuresportfishing</p>
              </div>
            </a>
          </div>

          {/* Book Online Card */}
          <div>
            <div className="card p-8">
              <div className="text-center mb-6">
                <Anchor className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold text-white mb-2">
                  Book Online
                </h2>
                <p className="text-brand-foam/60 text-sm">
                  Skip the phone tag &mdash; book and pay online with credit card,
                  PayPal, Venmo, Cash App, or Zelle.
                </p>
              </div>
              <Link href="/booking" className="btn-primary w-full text-center">
                Book &amp; Pay Online
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <p className="text-xs text-brand-foam/40 text-center mt-4">
                No more bank routing numbers. Modern, secure checkout.
              </p>
            </div>

            <div className="card mt-6 p-6">
              <h3 className="font-heading font-semibold text-white mb-3">Military Discount</h3>
              <p className="text-brand-foam/60 text-sm leading-relaxed">
                We proudly offer discounts for Active Military Personnel.
                Mention your service when booking or call for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Area */}
      <section className="bg-brand-navy py-12 px-4 border-t border-brand-ocean/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Find Us</h2>
          <div className="rounded-xl overflow-hidden border border-brand-ocean/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.5!2d-117.2544774!3d33.196642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDExJzQ4LjAiTiAxMTfCsDE1JzE2LjEiVw!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pacific Venture location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
