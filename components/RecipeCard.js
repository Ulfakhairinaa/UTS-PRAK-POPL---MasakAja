import Link from "next/link";

const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

export default function RecipeCard({ recipe }) {
  return (
    <Link
      href={`/resep/${recipe.id}`}
      className="block rounded-xl border p-4 transition hover:shadow-md"
    >
      <p className="text-xs uppercase text-orange-600">{recipe.kategori}</p>
      <h3 className="mt-1 text-lg font-semibold">{recipe.judul}</h3>
      <p className="mt-2 text-sm text-gray-500">
        {recipe.waktuMasak} menit · {recipe.porsi} porsi
      </p>
      <p className="mt-1 font-medium">{rupiah(recipe.biayaPerPorsi)} / porsi</p>
    </Link>
  );
}