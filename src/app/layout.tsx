import "./globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GM Buyback Information | Understanding the Process',
  description: 'Learn everything you need to know about GM vehicle buyback programs, eligibility requirements, and the process to follow.',
  keywords: 'GM buyback, Chevrolet Silverado, lemon law, vehicle repurchase, GM warranty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}