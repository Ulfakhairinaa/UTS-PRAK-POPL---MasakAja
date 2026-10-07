import { useMemo, useState } from "react";
import { Recipe } from "@/models/Recipe";

export function useBahan(dataAwal) {
  const semua = useMemo(() => dataAwal.map((r) => new Recipe(r)), [dataAwal]);

  const daftarBahan = useMemo(() => {
    const nama = new Set();
    semua.forEach((r) => r.bahan.forEach((b) => nama.add(b.nama)));
    return [...nama].sort((a, b) => a.localeCompare(b));
  }, [semua]);

  const [dipilih, setDipilih] = useState([]);

  const toggle = (nama) =>
    setDipilih((d) =>
      d.includes(nama) ? d.filter((x) => x !== nama) : [...d, nama]
    );

  const reset = () => setDipilih([]);

  const hasil = useMemo(() => {
    if (dipilih.length === 0) return [];
    return semua
      .map((r) => ({
        recipe: r,
        cocok: r.jumlahBahanCocok(dipilih),
        total: r.bahan.length,
      }))
      .filter((h) => h.cocok > 0)
      .sort(
        (a, b) => b.cocok / b.total - a.cocok / a.total || b.cocok - a.cocok
      );
  }, [semua, dipilih]);

  return { semua, daftarBahan, dipilih, toggle, reset, hasil };
}