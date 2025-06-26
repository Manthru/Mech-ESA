'use client';

import { Hero } from '@/components/Hero';
import { FeaturedEvents } from '@/components/FeaturedEvents';
import { SuccessStories } from '@/components/SuccessStories';
import { CompanyLogos } from '@/components/CompanyLogos';
import { Stats } from '@/components/Stats';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <FeaturedEvents />
      <SuccessStories />
      <CompanyLogos />
      <Newsletter />
    </div>
  );
}