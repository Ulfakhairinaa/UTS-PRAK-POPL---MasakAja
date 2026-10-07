import recipes from "@/data/recipes.json";
import HomeContainer from "@/containers/HomeContainer";

export default function HomePage() {
  return <HomeContainer recipes={recipes} />;
}