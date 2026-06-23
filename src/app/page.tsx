import Link from 'next/link';
import Image from 'next/image';
import { Star, Anchor, Fish, Ship, Eye, ChevronRight, Phone, Shield } from 'lucide-react';

const trips = [
  {
    name: 'Kids 4-Hour Trip',
    price: '$1,290',
    time: '8:00 AM – 12:00 PM',
    species: 'Bass, Sheephead',
    image: 'https://h3f5ivd9.b-cdn.net/e5a69b18523f6f3a5725064f7fdd7d84.jpg',
  },
  {
    name: '5-Hour Fishing Trip',
    price: '$1,490',
    time: '8:00 AM – 1:00 PM',
    species: 'Rock Cod, Calico Bass, Yellowtail',
    image: 'https://h3f5ivd9.b-cdn.net/a9c464b1a9423bc45490b88f2238f782.jpg',
  },
  {
    name: '8-Hour Fishing Trip',
    price: '$1,990',
    time: '7:30 AM – 3:30 PM',
    species: 'Rock Cod, Yellowtail, Shark',
    image: 'https://h3f5ivd9.b-cdn.net/22fa6ecdd67a168325317e1e856dd92b.jpg',
  },
  {
    name: '9-Hour Offshore',
    price: '$2,550',
    time: '6:30 AM – 3:30 PM',
    species: 'Tuna, Mahi Mahi, Yellowtail',
    image: 'https://h3f5ivd9.b-cdn.net/2f3f3f20c3886e1c589e54839e692b6e.JPG',
  },
];

const features = [
  { icon: Ship, title: 'Sea Keeper Stabilization', desc: 'Reduces boat roll by up to 90% for a smooth ride' },
  { icon: Fish, title: 'All Tackle & Bait Included', desc: 'Premium gear, bait, ice storage, and fish cleaning' },
  { icon: Eye, title: 'Whale Watching', desc: 'California Grey, Humpback, and Blue whale tours Jan–Apr' },
  { icon: Shield, title: 'Military Discounts', desc: 'Proud to offer discounts for active military personnel' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <Image
          src="https://h3f5ivd9.b-cdn.net/9557d04c04ffa4203ae4affb699150e2.jpg"
          alt="Pacific Venture at sea"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/70 via-brand-ink/50 to-brand-ink" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-[0.15em] mb-6">
            <Anchor className="w-4 h-4" />
            Oceanside, California
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Your Ocean<br />Adventure Awaits
          </h1>
          <p className="text-lg md:text-xl text-brand-foam/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premier private sportfishing charters with Captain Chuck White.
            Over 30 years of experience on the California coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary text-base px-10 py-4">
              Book Your Trip
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
            <a href="tel:+17603411905" className="btn-secondary text-base px-10 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Captain Chuck
            </a>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="py-16 px-4 bg-brand-navy">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 p-5">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                <f.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wide mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-brand-foam/60 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trip Cards */}
      <section className="py-20 px-4 bg-brand-ink">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto mb-4" />
            <h2 className="section-heading mb-4">Fishing Trip Packages</h2>
            <p className="text-brand-foam/60 max-w-xl mx-auto">
              Private 6-pack charters with all tackle, bait, and fish cleaning included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trips.map((t, i) => (
              <div key={i} className="card-hover group overflow-hidden rounded-xl">
                <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-brand-gold text-brand-ink text-xs font-bold px-3 py-1.5 rounded-md">
                    {t.price}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-1">{t.name}</h3>
                <p className="text-xs text-brand-foam/50 mb-2">{t.time}</p>
                <p className="text-sm text-brand-foam/70">{t.species}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/trips" className="btn-outline-gold">
              View All Trips
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Captain Section */}
      <section className="py-20 px-4 bg-brand-navy">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://h3f5ivd9.b-cdn.net/cf5f235d18477cdf3164deeb8b13a13f.jpg"
              alt="Captain Chuck White"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="gold-rule mb-4" />
            <h2 className="section-heading mb-6">Meet Captain Chuck White</h2>
            <p className="text-brand-foam/70 leading-relaxed mb-4">
              Captain Chuck has owned Pacific Venture for over 30 years. He got his first powerboat
              at age 11 in 1955 and has held a 100-ton Masters U.S. Coast Guard License since 1992.
            </p>
            <p className="text-brand-foam/70 leading-relaxed mb-6">
              Featured on the Outdoor Channel, Captain Chuck is known for his personable approach
              engaging all skill levels &mdash; from first-timers to seasoned anglers, families with
              children to corporate groups.
            </p>
            <Link href="/about" className="btn-outline-gold">
              Our Story
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-brand-ink">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(n => (
              <Star key={n} className="w-6 h-6 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <blockquote className="font-heading text-2xl md:text-3xl text-white font-medium leading-relaxed mb-6">
            &ldquo;Really there aren&rsquo;t enough stars. Captain Chuck and Jerry are the best&hellip;
            limited out on rock fish.&rdquo;
          </blockquote>
          <cite className="text-brand-foam/60 text-sm not-italic">&mdash; Kevin Peters</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4">
        <Image
          src="https://h3f5ivd9.b-cdn.net/2738d75b8fac5d687f4d57de0eb568d6.jpg"
          alt="Sunset fishing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-ink/80" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Hit the Water?
          </h2>
          <p className="text-brand-foam/70 mb-8">
            Book online with modern payment options &mdash; credit card, PayPal, Venmo, and more.
            No more routing numbers.
          </p>
          <Link href="/booking" className="btn-primary text-base px-10 py-4">
            Book &amp; Pay Online
          </Link>
        </div>
      </section>
    </>
  );
}
