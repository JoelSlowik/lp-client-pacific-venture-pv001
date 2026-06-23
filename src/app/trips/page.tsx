import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, Fish, Anchor, ChevronRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fishing Trips | Pacific Venture Sportfishing',
  description: 'Private sportfishing trip packages out of Oceanside, CA. Kids trips, half-day, full-day, and offshore charters. All tackle, bait, and fish cleaning included.',
};

const trips = [
  {
    name: 'Kids 4-Hour Fishing Trip',
    price: '$1,290',
    time: '8:00 AM – 12:00 PM',
    duration: '4 hours',
    passengers: 'Up to 6',
    description: 'Perfect for families — fish closer to the harbor targeting Bass and Sheephead. Our crew is experienced working with children and first-timers.',
    species: ['Bass', 'Sheephead'],
    image: 'https://h3f5ivd9.b-cdn.net/5ed45955027ee0a31bc3f778a61887af.jpg',
  },
  {
    name: '5-Hour Fishing Trip',
    price: '$1,490',
    time: '8:00 AM – 1:00 PM',
    duration: '5 hours',
    passengers: 'Up to 6',
    description: 'Start with Rock Cod and look out for Sharks and Calico Bass. A great half-day adventure with plenty of action.',
    species: ['Rock Cod', 'Sharks', 'Calico Bass', 'Halibut', 'Yellowtail', 'Sand Bass', 'Sheephead'],
    image: 'https://h3f5ivd9.b-cdn.net/9c2084be16f05367bc471b714af6d10c.jpg',
  },
  {
    name: '8-Hour Fishing Trip',
    price: '$1,990',
    time: '7:30 AM – 3:30 PM',
    duration: '8 hours',
    passengers: 'Up to 6',
    description: 'Fish for Rock Cod inshore, head offshore up to 10 miles for Yellowtail or Shark, then finish off with Bass fishing.',
    species: ['Rock Cod', 'Yellowtail', 'Shark', 'Bass'],
    image: 'https://h3f5ivd9.b-cdn.net/d94c2267ebbe23dd4141d29561b8ad63.jpg',
  },
  {
    name: '9-Hour Offshore Trip',
    price: '$2,550',
    time: '6:30 AM – 3:30 PM',
    duration: '9 hours',
    passengers: 'Up to 6',
    description: 'The ultimate offshore experience — travel up to 24 miles out targeting pelagic game fish. For serious anglers chasing trophy catches.',
    species: ['Tuna', 'Mahi Mahi', 'Yellowtail'],
    image: 'https://h3f5ivd9.b-cdn.net/2f94e7d627344b4a94634c6b58604772.jpg',
  },
];

const included = [
  'All tackle and gear',
  'Bait service',
  'Ice storage',
  'Fish cleaning',
  'Deckhand service',
  'Coffee, snacks & water',
];

export default function TripsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <Image
          src="https://h3f5ivd9.b-cdn.net/a79cb61891f466ddee8c94e927672a19.jpg"
          alt="Deep sea fishing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12 w-full">
          <div className="gold-rule mb-4" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
            Fishing Trip Packages
          </h1>
          <p className="text-brand-foam/70 text-lg max-w-xl">
            Private 6-pack charters out of Oceanside Harbor. Every trip includes tackle, bait, and fish cleaning.
          </p>
        </div>
      </section>

      {/* Trips */}
      <section className="py-16 px-4 bg-brand-ink">
        <div className="max-w-7xl mx-auto space-y-8">
          {trips.map((trip, i) => (
            <div
              key={i}
              className="card-hover grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 overflow-hidden rounded-xl"
            >
              <div className="relative h-64 lg:h-auto -mx-6 -mt-6 lg:m-[-24px] lg:mr-0">
                <Image src={trip.image} alt={trip.name} fill className="object-cover" />
              </div>
              <div className="lg:col-span-2 py-4 lg:py-2">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-white mb-1">{trip.name}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-brand-foam/60">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-gold/60" />
                        {trip.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-brand-gold/60" />
                        {trip.passengers}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-heading font-bold text-brand-gold">{trip.price}</span>
                    <span className="block text-xs text-brand-foam/40">per charter</span>
                  </div>
                </div>
                <p className="text-brand-foam/70 leading-relaxed mb-5">{trip.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {trip.species.map((s, j) => (
                    <span key={j} className="inline-flex items-center gap-1.5 text-xs bg-brand-ocean/30 text-brand-foam/80 px-3 py-1.5 rounded-full border border-brand-ocean/20">
                      <Fish className="w-3 h-3 text-brand-gold/70" />
                      {s}
                    </span>
                  ))}
                </div>
                <Link href="/booking" className="btn-primary text-xs px-6 py-3">
                  Book This Trip
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-10">Every Trip Includes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-brand-deep/60 rounded-lg p-4 border border-brand-ocean/20">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm text-brand-foam/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-brand-foam/40 mt-6">
            Note: California fishing license not included &mdash; purchase at the harbor or online before your trip.
          </p>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 px-4 bg-brand-ink">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-hover">
            <div className="relative h-52 -mx-6 -mt-6 mb-5 rounded-t-xl overflow-hidden">
              <Image
                src="https://h3f5ivd9.b-cdn.net/d954ca2d0c89114832145f24e0175a6d.jpeg"
                alt="Whale watching"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">Whale Watching</h3>
            <p className="text-brand-foam/60 text-sm mb-2">$600 &middot; 2 hours &middot; January – April</p>
            <p className="text-brand-foam/70 text-sm leading-relaxed">
              California Grey, Humpback, Fin, and Blue whale tours along the Oceanside coast.
              Call for availability and seasonal details.
            </p>
          </div>
          <div className="card-hover">
            <div className="relative h-52 -mx-6 -mt-6 mb-5 rounded-t-xl overflow-hidden">
              <Image
                src="https://h3f5ivd9.b-cdn.net/431331a003db6ad69d0be10179367af6.jpeg"
                alt="Burial at sea"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">Burial at Sea</h3>
            <p className="text-brand-foam/60 text-sm mb-2">$600 &middot; Up to 6 people</p>
            <p className="text-brand-foam/70 text-sm leading-relaxed">
              A dignified offshore ceremony for your loved one. Call for more information
              and to arrange a private service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-deep border-t border-b border-brand-ocean/20">
        <div className="max-w-3xl mx-auto text-center">
          <Anchor className="w-8 h-8 text-brand-gold mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-brand-foam/60 mb-8">
            Pay online with credit card, PayPal, Venmo, or other modern payment methods.
          </p>
          <Link href="/booking" className="btn-primary text-base px-10 py-4">
            Book &amp; Pay Online
          </Link>
        </div>
      </section>
    </>
  );
}
