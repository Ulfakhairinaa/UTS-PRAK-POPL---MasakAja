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

  return { semua, daftarBahan, dipilih, toggle, reset };
}