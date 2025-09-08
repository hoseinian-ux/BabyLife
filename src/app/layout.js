import Header from "@/components/Header";
import "./globals.css";
import Providers from "./providers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "فروشگاه کودک",
  description: "دموی فروشگاهی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className="bg-white"> 
        <Header/>
        <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}
