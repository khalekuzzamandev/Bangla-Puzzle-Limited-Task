import Hero from "@/Components/Home/Hero";
import PopularLinks from "@/Components/Home/PopularLinks";
import PremiumFeatures from "@/Components/Home/PremiumFeatures";
import Pricing from "@/Components/Home/Pricing";
import Stats from "@/Components/Home/Stats";
import Testimonials from "@/Components/Home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <PopularLinks />
      <PremiumFeatures />
      <Pricing />
      <Testimonials />
    </main>
  );
}
