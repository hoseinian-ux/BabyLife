import "./globals.css";

export const metadata = {
  title: "فروشگاه کودک",
  description: "دموی فروشگاهی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className="bg-white">{children}</body>
    </html>
  );
}
