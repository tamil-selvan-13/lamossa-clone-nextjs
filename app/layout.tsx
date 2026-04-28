import { metadata } from "./metadata";
import "./globals.css";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="min-h-full flex flex-col font-sans transition-all-ease">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen" />}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </>
  );
}