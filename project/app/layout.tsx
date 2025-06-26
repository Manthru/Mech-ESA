import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MechEsa Club - IIT Indore Mechanical Student Association',
  description: 'Official website of MechEsa Club, the premier mechanical engineering student association at IIT Indore.',
  keywords: 'MechEsa, IIT Indore, Mechanical Engineering, Student Association, College Club',
  authors: [{ name: 'MechEsa Club' }],
  openGraph: {
    title: 'MechEsa Club - IIT Indore',
    description: 'Official website of MechEsa Club, the premier mechanical engineering student association at IIT Indore.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}