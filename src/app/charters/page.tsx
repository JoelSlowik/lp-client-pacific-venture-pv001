import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Anchor, Ship, Gauge, Compass, Shield, Thermometer, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Charter Services & Support Vessels | Pacific Venture',
  description: 'Private fishing charters, whale watching, support vessels, and custom ocean experiences out of Oceanside Harbor, California.',
};

const vesselSpecs = [
  { icon: Ship, label: 'Dimensions', value: '37′ × 12′ beam' },
  { icon: Gauge, label: 'Engines', value: 'Twin 2024 Yanmar Diesel' },
  { icon: Compass, label: 'Range', value: 'Up to 2 days at sea' },
  { icon: Shield, label: 'Safety', value: 'USCG inspected annually' },
];

const amenities = [
  'Sea Keeper Stabilization System',
  'Large bridge with seating for five',
  'Full galley with Corian countertops',
  'Large refrigerator & 7 cu ft freezer',
  'Shower with 80-gallon hot water',
  'Stand-up head with mirror',
  'Flat-screen TV with DVD & DirecTV',
  '300 lb davit hoist',
  'Transom door, swim step & ladder',
  '36-mile radar',
  'Six-man life raft',
  'GPS and chart plotter',
];

const safety = [
  '36-mile radar',
  'Six-man Seafort life raft',
  'Automatic 406 EPIRB',
  'GPS and chart plotter',
  'Two ship-to-shore radios',
  'Cell phone backup',
];

export default function ChartersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <Image
          src="https://h3f5ivd9.b-cdn.net/0a1257ab7879f696462a33118130a433.jpeg"
          alt="Charter vessel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12 w-full">
          <div className="gold-rule mb-4" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
            Charter Services &amp; Vessels
          </h1>
          <p className="text-brand-foam/70 text-lg max-w-xl">
            Private 6-pack charters and support vessel operations out of Oceanside Harbor.
          </p>
        </div>
      </section>

      {/* Private Charters */}
      <section className="py-20 px-4 bg-brand-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto mb-4" />
            <h2 className="section-heading mb-4">Private Charter Experience</h2>
            <p className="text-brand-foam/60 max-w-2xl mx-auto">
              Every charter is private &mdash; just your group and our crew. Up to 6 passengers
              on a fully equipped vessel with the Sea Keeper system that eliminates approximately
              90% of ocean roll, so even those prone to seasickness can enjoy the ride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-hover">
              <h3 className="font-heading text-xl font-bold text-white mb-3">Customized Trips</h3>
              <p className="text-brand-foam/70 text-sm leading-relaxed mb-4">
                Whether you want a family outing, corporate team-building day, bachelor party,
                or serious sportfishing excursion &mdash; we customize every trip to your group.
                Captain Chuck engages all skill levels, from children and first-timers to seasoned anglers.
              </p>
              <Link href="/booking" className="btn-primary text-xs px-5 py-2.5">
                Book a Charter
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="card-hover">
              <h3 className="font-heading text-xl font-bold text-white mb-3">What&rsquo;s Included</h3>
              <ul className="space-y-2.5 text-sm text-brand-foam/70">
                <li className="flex items-start gap-2">
                  <Anchor className="w-4 h-4 text-brand-gold/70 mt-0.5 flex-shrink-0" />
                  All fishing tackle, bait, and gear
                </li>
                <li className="flex items-start gap-2">
                  <Anchor className="w-4 h-4 text-brand-gold/70 mt-0.5 flex-shrink-0" />
                  Deckhand service &mdash; staff baits hooks and assists
                </li>
                <li className="flex items-start gap-2">
                  <Anchor className="w-4 h-4 text-brand-gold/70 mt-0.5 flex-shrink-0" />
                  Ice storage and professional fish cleaning
                </li>
                <li className="flex items-start gap-2">
                  <Anchor className="w-4 h-4 text-brand-gold/70 mt-0.5 flex-shrink-0" />
                  Coffee, snacks, and bottled water
                </li>
                <li className="flex items-start gap-2">
                  <Anchor className="w-4 h-4 text-brand-gold/70 mt-0.5 flex-shrink-0" />
                  Fuel and all operating costs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Vessel */}
      <section className="py-20 px-4 bg-brand-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto mb-4" />
            <h2 className="section-heading mb-4">Support Vessel</h2>
            <p className="text-brand-foam/60 max-w-2xl mx-auto">
              Twin diesel powered vessel with a 6 KW generator. Suitable for marine research,
              at-sea support operations, and water taxi services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {vesselSpecs.map((spec, i) => (
              <div key={i} className="card text-center p-5">
                <spec.icon className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                <p className="text-xs text-brand-foam/50 uppercase tracking-wide mb-1">{spec.label}</p>
                <p className="text-sm text-white font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-heading text-lg font-bold text-white mb-4">Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-brand-foam/70">
                    <Thermometer className="w-3.5 h-3.5 text-brand-gold/60 flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="font-heading text-lg font-bold text-white mb-4">Safety Equipment</h3>
              <div className="space-y-2.5">
                {safety.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-brand-foam/70">
                    <Shield className="w-3.5 h-3.5 text-brand-gold/60 flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand-foam/40 mt-4">
                All fiberglass construction. USCG inspected annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-ink">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Questions About Our Vessels?
          </h2>
          <p className="text-brand-foam/60 mb-8">
            Call Captain Chuck or book your trip online with modern payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book Online
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <a href="tel:+17603411905" className="btn-outline-gold">
              Call (760) 341-1905
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
