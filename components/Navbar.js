import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-orange-600">
          MasakAja
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <Link href="/resep" className="hover:text-orange-600">Resep</Link>
          <Link href="/cari-bahan" className="hover:text-orange-600">Cari by Bahan</Link>
        </div>
      </div>
    </nav>
  );
}