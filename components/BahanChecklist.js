export default function BahanChecklist({ daftarBahan, dipilih, onToggle, onReset }) {
  return (
    <section className="rounded-xl border p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Bahan saya</h2>
        <button
          onClick={onReset}
          className="text-sm text-orange-600 hover:underline"
        >
          Hapus pilihan
        </button>
      </div>
      <ul className="grid gap-1 sm:grid-cols-2">
        {daftarBahan.map((nama) => (
          <li key={nama}>
            <label className="flex cursor-pointer items-center gap-2 py-1">
              <input
                type="checkbox"
                checked={dipilih.includes(nama)}
                onChange={() => onToggle(nama)}
                className="h-4 w-4"
              />
              {nama}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}