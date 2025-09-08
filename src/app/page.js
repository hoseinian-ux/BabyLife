
import Hero from "./(home)/hero";
import FeaturesList from "@/components/FeaturesList";
import ProductsList from "@/components/ProductsList";
import CartBanner from "@/components/CartBanner";
import SpecialOffersCarousel from "@/components/SpecialOffersCarousel";
import BlogList from "@/components/BlogList";


export default function Home() {
  return (
    <>
      
      <Hero />
  <FeaturesList/>
  <ProductsList/>
  <CartBanner/>
  <SpecialOffersCarousel/>
  <BlogList/>
  
    </>
  );
}
