import { useState } from "react";

export function usePorsi(porsiAwal) {
  const [porsi, setPorsi] = useState(porsiAwal);
  const tambah = () => setPorsi((p) => p + 1);
  const kurang = () => setPorsi((p) => Math.max(1, p - 1));
  return { porsi, tambah, kurang };
}