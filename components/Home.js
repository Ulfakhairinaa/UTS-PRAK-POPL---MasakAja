import Link from "next/link";

export default function Home({ populer }) {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">
          Masak Aja, <span className="text-orange-600">Hemat Tetap Jaya</span>
        </h1>
        <p className="mt-3 text-gray-600">
          Katalog resep murah untuk anak kos. Cari berdasarkan budget, waktu
          masak, dan bahan yang ada.
        </p>

        <form action="/resep" className="mx-auto mt-6 flex max-w-md gap-2">
          <input
            name="q"
            type="text"
            placeholder="Cari resep..."
            className="flex-1 rounded-lg border px-3 py-2"
          />
          <button
            type="submit"
            className="rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
          >
            Cari
          </button>
        </form>

        <Link
          href="/resep"
          className="mt-4 inline-block text-sm text-orange-600 hover:underline"
        >
          atau lihat semua resep
        </Link>
      </section>

      <h2 className="mb-4 text-xl font-semibold">Resep Hemat Pilihan</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {populer.map((r) => (
          <Link
            key={r.id}
            href={`/resep/${r.id}`}
            className="block rounded-xl border p-4 transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{r.judul}</h3>
            <p className="mt-2 text-sm text-gray-500">{r.waktuMasak} menit</p>
            <p className="mt-1 font-medium">{r.biaya} / porsi</p>
          </Link>
        ))}
      </div>
    </main>
  );
}