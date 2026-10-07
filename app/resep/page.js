import recipes from "@/data/recipes.json";
import RecipeListContainer from "@/containers/RecipeListContainer";

export default async function DaftarResepPage({ searchParams }) {
  const { q } = await searchParams;
  return <RecipeListContainer recipes={recipes} kataAwal={q ?? ""} />;
}