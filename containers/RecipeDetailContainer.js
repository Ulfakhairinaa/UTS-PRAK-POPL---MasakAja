import RecipeDetail from "@/components/RecipeDetail";

const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

export default function RecipeDetailContainer({ recipe }) {
  return (
    <RecipeDetail
      judul={recipe.judul}
      kategori={recipe.kategori}
      waktuMasak={recipe.waktuMasak}
      porsi={recipe.porsi}
      totalBiaya={rupiah(recipe.totalBiaya)}
      bahan={recipe.bahan.map((b) => ({ ...b, harga: rupiah(b.harga) }))}
      langkah={recipe.langkah}
    />
  );
}