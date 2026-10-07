import Link from "next/link";

const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

export default function HasilCariBahan({ hasil, adaPilihan }) {
  if (!adaPilihan) {
    return (
      <p className="text-gray-500">
        Centang bahan untuk melihat resep yang cocok.
      </p>
    );
  }

  if (hasil.length === 0) {
    return <p className="text-gray-500">Belum ada resep yang cocok.</p>;
  }

  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold">{hasil.length} resep cocok</h2>
      <div className="grid gap-3">
        {hasil.map(({ recipe, cocok, total }) => (
          <Link
            key={recipe.id}
            href={`/resep/${recipe.id}`}
            className="flex items-center justify-between rounded-xl border p-4 transition hover:shadow-md"
          >
            <div>
              <p className="font-semibold">{recipe.judul}</p>
              <p className="text-sm text-gray-500">
                {rupiah(recipe.biayaPerPorsi)} / porsi · {recipe.waktuMasak} menit
              </p>
            </div>
            <span className="text-sm font-semibold text-orange-600">
              {cocok} dari {total} bahan
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}