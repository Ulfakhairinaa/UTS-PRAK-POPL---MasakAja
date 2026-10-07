"use client";

import { useRecipes } from "@/hooks/useRecipes";
import RecipeList from "@/components/RecipeList";
import RecipeFilters from "@/components/RecipeFilters";

export default function RecipeListContainer({ recipes, kataAwal }) {
  const { hasil, filters, setFilter } = useRecipes(recipes, kataAwal);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Daftar Resep</h1>
      <RecipeFilters filters={filters} onChange={setFilter} />
      <RecipeList recipes={hasil} />
    </main>
  );
}