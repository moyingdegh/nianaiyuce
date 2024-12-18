import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { StartNow } from '@/components/home/StartNow';
import { ScrollToTop } from '@/components/common/ScrollToTop';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <StartNow />
      <ScrollToTop />
    </main>
  );
} 