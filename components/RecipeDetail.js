import Link from "next/link";

export default function RecipeDetail({
  judul, kategori, waktuMasak, porsi, totalBiaya, bahan, langkah,
}) {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <Link href="/" className="text-sm text-orange-600 hover:underline">
        ← Kembali
      </Link>

      <h1 className="mt-4 text-3xl font-bold">{judul}</h1>
      <p className="mt-1 text-sm capitalize text-gray-500">
        {kategori} · {waktuMasak} menit · {porsi} porsi · Total {totalBiaya}
      </p>

      <h2 className="mt-6 text-xl font-semibold">Bahan</h2>
      <ul className="mt-2 divide-y rounded-lg border">
        {bahan.map((b) => (
          <li key={b.nama} className="flex justify-between p-3">
            <span>{b.nama} <span className="text-gray-500">({b.jumlah})</span></span>
            <span>{b.harga}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Langkah</h2>
      <ol className="mt-2 list-decimal space-y-2 pl-6">
        {langkah.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ol>
    </main>
  );
}