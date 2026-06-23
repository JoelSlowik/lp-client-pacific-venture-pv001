import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const heading = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Pacific Venture Sportfishing & Charters | Oceanside, CA',
  description: 'Premier private sportfishing charters and ocean tours out of Oceanside, California. Deep sea fishing, whale watching, and private charters with Captain Chuck White.',
  keywords: 'sportfishing Oceanside CA, fishing charter Oceanside, deep sea fishing San Diego, whale watching Oceanside, private fishing charter, Pacific Venture',
  openGraph: {
    title: 'Pacific Venture Sportfishing & Charters | Oceanside, CA',
    description: 'Premier private sportfishing charters and ocean tours out of Oceanside, California.',
    type: 'website',
  },
  other: {
    'theme-color': '#0B1D33',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-body bg-brand-ink text-brand-text antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
