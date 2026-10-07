import RecipeCard from "@/components/RecipeCard";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="text-gray-500">Resep tidak ditemukan.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}