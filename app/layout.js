import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "MasakAja",
  description: "Katalog resep hemat untuk anak kos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}