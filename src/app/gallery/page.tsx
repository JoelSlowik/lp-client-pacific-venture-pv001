import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery | Pacific Venture Sportfishing',
  description: 'Photos from Pacific Venture fishing charters out of Oceanside, CA. Big catches, ocean views, and happy anglers.',
};

const photos = [
  { src: 'https://h3f5ivd9.b-cdn.net/d94c2267ebbe23dd4141d29561b8ad63.jpg', alt: 'Fishing action' },
  { src: 'https://h3f5ivd9.b-cdn.net/b41dbee6af3ab2dba867d5d169271505.jpg', alt: 'Big catch' },
  { src: 'https://h3f5ivd9.b-cdn.net/e3aa579100beb61f79e89fe6bd132707.jpg', alt: 'Ocean fishing' },
  { src: 'https://h3f5ivd9.b-cdn.net/aedbbceb0978d7380c7ffb589f084208.jpg', alt: 'Charter trip' },
  { src: 'https://h3f5ivd9.b-cdn.net/df1393f76d91785320660748012e7c6c.jpg', alt: 'Sportfishing' },
  { src: 'https://h3f5ivd9.b-cdn.net/7816c43ddf87703953d98290ebd573df.jpg', alt: 'Deep sea catch' },
  { src: 'https://h3f5ivd9.b-cdn.net/e6a2c84702daa4517fdbcd0ae8b59bb8.jpg', alt: 'Ocean view' },
  { src: 'https://h3f5ivd9.b-cdn.net/5e81db01b5340188279cb94e20172150.jpg', alt: 'Happy anglers' },
  { src: 'https://h3f5ivd9.b-cdn.net/363c9656678cc84d0edb8dc84c35284b.jpg', alt: 'Fishing trip' },
  { src: 'https://h3f5ivd9.b-cdn.net/c5f149562608d25c7d352a62619df60f.jpg', alt: 'Yellowtail catch' },
  { src: 'https://h3f5ivd9.b-cdn.net/e6d2789f5e34723731c19e93258343d6.jpg', alt: 'Charter fishing' },
  { src: 'https://h3f5ivd9.b-cdn.net/f6c5f3035b8b7778a3e85878020b7423.jpg', alt: 'Ocean sunrise' },
  { src: 'https://h3f5ivd9.b-cdn.net/e7c9a7435790ce164c2e9e4e0537a3ff.jpg', alt: 'Fishing haul' },
  { src: 'https://h3f5ivd9.b-cdn.net/86794b5f46d3d5faebf65a7ae8e95b11.jpg', alt: 'At the dock' },
  { src: 'https://h3f5ivd9.b-cdn.net/bc33cd5ceede0ba84f81190b83e209ef.jpg', alt: 'Pacific Venture' },
  { src: 'https://h3f5ivd9.b-cdn.net/e6c60df2cd514134e88aaa925fed9b2f.jpg', alt: 'Crew and guests' },
  { src: 'https://h3f5ivd9.b-cdn.net/ed53e0bdba437ac57c8764a5754c9339.jpg', alt: 'Rock cod' },
  { src: 'https://h3f5ivd9.b-cdn.net/1358b065af6c167215c7cfc6d8deae02.jpg', alt: 'Fishing fun' },
  { src: 'https://h3f5ivd9.b-cdn.net/267d9837ce80cb86074406cd94a4c990.jpg', alt: 'Offshore trip' },
  { src: 'https://h3f5ivd9.b-cdn.net/59f0735b76bcd51c4288490bfb8b5f3a.jpg', alt: 'On the water' },
  { src: 'https://h3f5ivd9.b-cdn.net/c3ba77317c653ec1b984d2702c7a1bfb.jpg', alt: 'Sunset charter' },
  { src: 'https://h3f5ivd9.b-cdn.net/d6c046383a21af08ba3598cd1785cf92.jpg', alt: 'Oceanside harbor' },
  { src: 'https://h3f5ivd9.b-cdn.net/89423992a5ca23a118734018997fcff7.jpg', alt: 'Trophy fish' },
  { src: 'https://h3f5ivd9.b-cdn.net/9c2084be16f05367bc471b714af6d10c.jpg', alt: 'Fishing group' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy py-12 px-4 border-b border-brand-ocean/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-brand-gold" />
            <div className="gold-rule" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">Gallery</h1>
          <p className="text-brand-foam/60 text-lg">
            Catches, ocean views, and memories from Pacific Venture charters.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 px-4 bg-brand-ink">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid relative overflow-hidden rounded-xl border border-brand-ocean/20 group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-12 px-4 bg-brand-navy border-t border-brand-ocean/20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-foam/60 mb-4">See more on Instagram</p>
          <a
            href="https://www.instagram.com/pacificventuresportfishing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            @pacificventuresportfishing
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-ink">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Make Your Own Memories
          </h2>
          <p className="text-brand-foam/60 mb-8">
            Book your private charter and be in the next gallery.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Your Trip
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
