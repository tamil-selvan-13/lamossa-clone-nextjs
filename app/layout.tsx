import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import ScrollProgress from '@/components/ui/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://lamossa.framer.website'),
  title: 'lamosa Studio — Premium agency / SaaS template',
  description: 'Lamosa is a sleek, high-quality website template designed for creative studios. With a stylish, high-contrast design and a structured layout, it provides a smooth user experience while remaining conversion-optimized.',
  openGraph: {
    type: 'website',
    title: 'lamosa Studio — Premium agency / SaaS template',
    description: 'Lamosa is a sleek, high-quality website template designed for creative studios.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'lamosa Studio — Premium agency / SaaS template',
    description: 'Lamosa is a sleek, high-quality website template designed for creative studios.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F9F9F9] text-[#171717] antialiased">
        <ScrollProgress />
        <Navigation />
        <SmoothScroll>
          <main className="pt-[72px]">
            {children}
          </main>
          <div className="fixed inset-x-0 bottom-0 h-[80px] pointer-events-none z-40" style={{ 
            maskImage: 'linear-gradient(to top, transparent, black 65%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent, black 65%)',
            backgroundColor: '#F9F9F9'
          }} />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}