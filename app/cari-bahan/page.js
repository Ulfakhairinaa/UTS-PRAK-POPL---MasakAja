import recipes from "@/data/recipes.json";
import CariBahanContainer from "@/containers/CariBahanContainer";

export default function CariBahanPage() {
  return <CariBahanContainer recipes={recipes} />;
}