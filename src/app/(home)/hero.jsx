import { heroSlides } from "@/lib/heroSlides";
import HeroSliderClient from "@/components/HeroSliderClient";

export default function Hero() {
  return <HeroSliderClient slides={heroSlides} />;
}
