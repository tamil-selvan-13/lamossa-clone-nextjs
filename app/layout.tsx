import { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import FloatingBlur from '@/components/ui/FloatingBlur';
import CTAWidget from '@/components/ui/CTAWidget';

export const metadata: Metadata = {
  metadataBase: new URL('https://lamossa.framer.website'),
  title: 'lamosa Studio — Premium agency / SaaS template',
  description: 'Lamosa is a sleek, high-quality website template designed for creative studios.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="lenis">
      <body className="min-h-screen bg-[#f6f7f8] text-[#0a0a0a] antialiased selection:bg-[#e1443a] selection:text-white">
        <SmoothScroll>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <FloatingBlur />
        <CTAWidget />
      </body>
    </html>
  );
}