import { Recipe } from "@/models/Recipe";
import Home from "@/components/Home";

const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

export default function HomeContainer({ recipes }) {
  const populer = recipes
    .map((r) => new Recipe(r))
    .sort((a, b) => a.biayaPerPorsi - b.biayaPerPorsi)
    .slice(0, 3)
    .map((r) => ({
      id: r.id,
      judul: r.judul,
      waktuMasak: r.waktuMasak,
      biaya: rupiah(r.biayaPerPorsi),
    }));

  return <Home populer={populer} />;
}