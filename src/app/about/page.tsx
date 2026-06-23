import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Anchor, Award, Shield, Star, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Pacific Venture Sportfishing',
  description: 'Meet Captain Chuck White — over 30 years of experience, 100-ton USCG Masters License, and featured on the Outdoor Channel. Oceanside, CA.',
};

const credentials = [
  { icon: Award, title: '100-Ton Masters License', desc: 'U.S. Coast Guard licensed since 1992' },
  { icon: Star, title: 'Outdoor Channel Featured', desc: 'Recognized for excellence in sportfishing' },
  { icon: Shield, title: '30+ Years Experience', desc: 'First powerboat at age 11 in 1955' },
  { icon: Anchor, title: 'Oceanside Angler’s Club', desc: 'Proud member of the local fishing community' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-end">
        <Image
          src="https://h3f5ivd9.b-cdn.net/93be66ff14b5d39d8ec4e0deca1552b6.jpeg"
          alt="Pacific Venture crew"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12 w-full">
          <div className="gold-rule mb-4" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">About Pacific Venture</h1>
        </div>
      </section>

      {/* Captain Bio */}
      <section className="py-20 px-4 bg-brand-ink">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-xl overflow-hidden">
            <Image
              src="https://h3f5ivd9.b-cdn.net/cf5f235d18477cdf3164deeb8b13a13f.jpg"
              alt="Captain Chuck White"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="gold-rule mb-4" />
            <h2 className="section-heading mb-2">Captain Chuck White</h2>
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-6">
              Owner &amp; Captain
            </p>
            <div className="space-y-4 text-brand-foam/70 leading-relaxed">
              <p>
                Captain Chuck has owned Pacific Venture for over 30 years. He obtained his first
                powerboat at age 11 in 1955 and has been a lifetime marine professional dedicated
                to sharing his expertise on the water.
              </p>
              <p>
                Holding a 100-ton Masters U.S. Coast Guard License since 1992 and featured on the
                Outdoor Channel, Captain Chuck is known for his personable approach that engages
                all skill levels &mdash; from first-timers to seasoned anglers, families with
                children to corporate groups.
              </p>
              <p>
                As a proud member of the Oceanside Angler&rsquo;s Club, Captain Chuck is deeply
                rooted in the local fishing community and knows these waters better than anyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crew */}
      <section className="py-16 px-4 bg-brand-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-rule mx-auto mb-4" />
            <h2 className="section-heading">Our Crew</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="card text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://h3f5ivd9.b-cdn.net/cf5f235d18477cdf3164deeb8b13a13f.jpg"
                  alt="Captain Chuck White"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg">Captain Chuck White</h3>
              <p className="text-brand-gold text-xs uppercase tracking-wider">Owner &amp; Captain</p>
            </div>
            <div className="card text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://h3f5ivd9.b-cdn.net/b65cea076c9369ff728be0553803ce01.jpeg"
                  alt="Patrick Hause"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg">Patrick Hause</h3>
              <p className="text-brand-gold text-xs uppercase tracking-wider">Crew</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 bg-brand-ink">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c, i) => (
              <div key={i} className="card text-center p-6">
                <c.icon className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-white text-sm mb-1">{c.title}</h3>
                <p className="text-xs text-brand-foam/50">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vessel */}
      <section className="py-20 px-4 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-rule mx-auto mb-4" />
          <h2 className="section-heading mb-6">Our Vessel</h2>
          <p className="text-brand-foam/70 leading-relaxed max-w-2xl mx-auto mb-4">
            Our 6-pack charter vessel features the Sea Keeper Stabilization System,
            eliminating approximately 90% of ocean roll. Even those prone to seasickness
            can enjoy a smooth, comfortable ride on the Pacific.
          </p>
          <p className="text-brand-foam/60 text-sm mb-8">
            With a large fishing area designed for proper casting, all-fiberglass construction,
            and comprehensive safety equipment, Pacific Venture is built for comfort and safety.
          </p>
          <Link href="/charters" className="btn-outline-gold">
            View Full Vessel Details
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-ink">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Come Fish With Us
          </h2>
          <p className="text-brand-foam/60 mb-8">
            Book your private charter today and experience the Pacific with Captain Chuck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book Your Trip
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
