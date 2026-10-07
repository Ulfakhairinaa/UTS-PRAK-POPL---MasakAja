import { useMemo, useState } from "react";
import { Recipe } from "@/models/Recipe";

export function useRecipes(dataAwal, kataAwal = "") {
  const semua = useMemo(() => dataAwal.map((r) => new Recipe(r)), [dataAwal]);

  const [filters, setFilters] = useState({
    keyword: kataAwal,
    maxBudget: "",
    maxWaktu: "",
    kategori: "",
  });

  const setFilter = (nama, nilai) =>
    setFilters((f) => ({ ...f, [nama]: nilai }));

  const hasil = useMemo(
    () =>
      semua.filter((r) => {
        if (
          filters.keyword &&
          !r.judul.toLowerCase().includes(filters.keyword.toLowerCase())
        )
          return false;
        if (filters.maxBudget && r.biayaPerPorsi > Number(filters.maxBudget))
          return false;
        if (filters.maxWaktu && r.waktuMasak > Number(filters.maxWaktu))
          return false;
        if (filters.kategori && r.kategori !== filters.kategori) return false;
        return true;
      }),
    [semua, filters]
  );

  return { hasil, filters, setFilter };
}