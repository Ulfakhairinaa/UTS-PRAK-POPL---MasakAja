import { notFound } from "next/navigation";
import recipes from "@/data/recipes.json";
import { Recipe } from "@/models/Recipe";
import RecipeDetailContainer from "@/containers/RecipeDetailContainer";

export default async function DetailResepPage({ params }) {
  const { id } = await params;
  const data = recipes.find((r) => r.id === Number(id));
  if (!data) notFound();

  return <RecipeDetailContainer recipe={new Recipe(data)} />;
}