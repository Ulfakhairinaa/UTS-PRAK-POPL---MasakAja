"use client";

import { usePorsi } from "@/hooks/usePorsi";
import PorsiCalculator from "@/components/PorsiCalculator";

const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

export default function PorsiCalculatorContainer({ biayaPerPorsi, porsiAwal }) {
  const { porsi, tambah, kurang } = usePorsi(porsiAwal);

  return (
    <PorsiCalculator
      porsi={porsi}
      totalBiaya={rupiah(biayaPerPorsi * porsi)}
      onTambah={tambah}
      onKurang={kurang}
    />
  );
}