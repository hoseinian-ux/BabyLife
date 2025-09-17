import { products } from "../../lib/product";
import ShopContent from "./shop-content";

export const metadata = {
  title: "محصولات - فروشگاه BabyLife",
  description: "خرید عمده لباس نوزادی از 0 تا 2 سال در BabyLife",
  keywords: "لباس نوزاد, خرید عمده, BabyLife",
  openGraph: {
    title: "محصولات - فروشگاه BabyLife",
    description: "خرید عمده لباس نوزادی از 0 تا 2 سال در BabyLife",
    url: "https://www.BabyLife.com/shop",
    images: [
      {
        url: "https://www.BabyLife.com/shop-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function ShopPage() {
  return <ShopContent products={products} />;
}
