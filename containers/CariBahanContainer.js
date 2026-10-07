"use client";

import { useBahan } from "@/hooks/useBahan";
import BahanChecklist from "@/components/BahanChecklist";
import HasilCariBahan from "@/components/HasilCariBahan";

export default function CariBahanContainer({ recipes }) {
  const { daftarBahan, dipilih, toggle, reset, hasil } = useBahan(recipes);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Cari by Bahan</h1>
      <p className="mb-6 mt-1 text-gray-600">
        Centang bahan yang ada di kosan, resep yang cocok muncul otomatis.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <BahanChecklist
            daftarBahan={daftarBahan}
            dipilih={dipilih}
            onToggle={toggle}
            onReset={reset}
          />
        </div>
        <div className="md:col-span-2">
          <HasilCariBahan hasil={hasil} adaPilihan={dipilih.length > 0} />
        </div>
      </div>
    </main>
  );
}