
import Hero from "./(home)/hero";
import FeaturesList from "@/components/FeaturesList";
import ProductsList from "@/components/ProductsList";
import CartBanner from "@/components/CartBanner";
import SpecialOffersCarousel from "@/components/SpecialOffersCarousel";
import BlogList from "@/components/BlogList";
import SEO from "@/components/SEO";


export default function Home() {
  return (
    <>
      <SEO 
      title="فروشگاه آنلاین BabyLife - محصولات با کیفیت"
        description="BabyLife بهترین فروشگاه آنلاین برای خرید محصولات با کیفیت. ارسال سریع و تضمین رضایت."
        keywords="فروشگاه آنلاین, BabyLife, خرید محصولات, محصولات با کیفیت"
        url="https://www.BabyLife.com"
        image="https://www.BabyLife.com/og-image.jpg"
        type="website"
        />
      <Hero />
  <FeaturesList/>
  <ProductsList/>
  <CartBanner/>
  <SpecialOffersCarousel/>
  <BlogList/>
  
    </>
  );
}
