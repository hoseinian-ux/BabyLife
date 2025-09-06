import { heroSlides } from "@/lib/heroSlides";
import HeroSliderClient from "@/components/HeroSliderClient";

// API GET برای برگرداندن JSON اسلایدها
export async function GET() {
  return Response.json({ slides: heroSlides });
}

export default function Hero() {
  return <HeroSliderClient slides={heroSlides} />;
}
