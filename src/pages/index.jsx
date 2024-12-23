import { CTA } from "@/components/cta/CTA";
import Carousel from "@/components/features/carousel/Carousel";
import { FeatureGrid } from "@/components/features/grid/FeatureGrid";
import { Stats } from "@/components/features/stats/Stats";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import StackedCardTestimonials from "@/components/features/testimonials/StackedCardTestimonials";
import { Barlow } from "next/font/google";
import { Services } from "@/components/features/services/Services";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={barlowFont.className}>
      <Hero />
      <FeatureGrid />
      <Services />
      <Carousel />
      <StackedCardTestimonials />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
