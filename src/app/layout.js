import Header from "@/components/Header";
import "./globals.css";
import Providers from "./providers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "فروشگاه آنلاین BabyLife - محصولات با کیفیت",
  description: "BabyLife بهترین فروشگاه آنلاین برای خرید محصولات با کیفیت. ارسال سریع و تضمین رضایت.",
  keywords: "فروشگاه آنلاین, BabyLife, خرید محصولات, محصولات با کیفیت",
  authors: [{ name: "BabyLife" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "فروشگاه آنلاین BabyLife",
    description: "BabyLife بهترین فروشگاه آنلاین برای خرید محصولات با کیفیت.",
    url: "https://www.BabyLife.com",
    siteName: "BabyLife",
    images: [
      {
        url: "https://www.BabyLife.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BabyLife Store",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "فروشگاه آنلاین BabyLife",
    description: "BabyLife بهترین فروشگاه آنلاین برای خرید محصولات با کیفیت.",
    images: ["https://www.BabyLife.com/og-image.jpg"],
    creator: "@BabyLife",
  },
  alternates: {
    canonical: "https://www.BabyLife.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className="bg-white"> 
        <Header/>
        <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}
