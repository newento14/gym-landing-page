import Hero from "@/components/Home/Hero";
import HeroBlocks from "@/components/Home/HeroBlocks";
import Classes from "@/components/Home/Classes";
import WhyUs from "@/components/Home/WhyUs";
import Trainers from "@/components/Home/Trainers";
import Testimonials from "@/components/Home/Testimonials";
import Bmi from "@/components/Home/Bmi";

export default function Home() {
  return (
    <main>
      <Hero/>
      <HeroBlocks/>
      <Classes />
      <WhyUs />
      <Trainers />
      <Testimonials />
      <Bmi />
    </main>
  )
}
