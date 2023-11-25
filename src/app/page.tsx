import Hero from "@/components/Home/Hero";
import HeroBlocks from "@/components/Home/HeroBlocks";
import Classes from "@/components/Home/Classes";
import WhyUs from "@/components/Home/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero/>
      <HeroBlocks/>
      <Classes />
      <WhyUs />
    </main>
  )
}
