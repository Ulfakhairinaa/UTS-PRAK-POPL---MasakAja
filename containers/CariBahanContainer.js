"use client";

import { useBahan } from "@/hooks/useBahan";
import BahanChecklist from "@/components/BahanChecklist";

export default function CariBahanContainer({ recipes }) {
  const { daftarBahan, dipilih, toggle, reset } = useBahan(recipes);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Cari by Bahan</h1>
      <p className="mb-6 mt-1 text-gray-600">
        Centang bahan yang ada di kosan.
      </p>
      <BahanChecklist
        daftarBahan={daftarBahan}
        dipilih={dipilih}
        onToggle={toggle}
        onReset={reset}
      />
    </main>
  );
}