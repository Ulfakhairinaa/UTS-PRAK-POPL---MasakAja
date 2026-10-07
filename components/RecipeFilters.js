export default function RecipeFilters({ filters, onChange }) {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <label className="flex min-w-[200px] flex-1 flex-col text-sm">
        Cari judul resep
        <input
          type="text"
          value={filters.keyword}
          onChange={(e) => onChange("keyword", e.target.value)}
          placeholder="contoh: nasi"
          className="mt-1 rounded border p-2"
        />
      </label>

      <label className="flex flex-col text-sm">
        Budget maksimal per porsi
        <select
          value={filters.maxBudget}
          onChange={(e) => onChange("maxBudget", e.target.value)}
          className="mt-1 rounded border p-2"
        >
          <option value="">Semua</option>
          <option value="5000">≤ Rp5.000</option>
          <option value="10000">≤ Rp10.000</option>
          <option value="15000">≤ Rp15.000</option>
          <option value="20000">≤ Rp20.000</option>
        </select>
      </label>

      <label className="flex flex-col text-sm">
        Waktu masak
        <select
          value={filters.maxWaktu}
          onChange={(e) => onChange("maxWaktu", e.target.value)}
          className="mt-1 rounded border p-2"
        >
          <option value="">Semua</option>
          <option value="10">≤ 10 menit</option>
          <option value="15">≤ 15 menit</option>
          <option value="20">≤ 20 menit</option>
          <option value="30">≤ 30 menit</option>
        </select>
      </label>

      <label className="flex flex-col text-sm">
        Kategori
        <select
          value={filters.kategori}
          onChange={(e) => onChange("kategori", e.target.value)}
          className="mt-1 rounded border p-2"
        >
          <option value="">Semua</option>
          <option value="sarapan">Sarapan</option>
          <option value="makan berat">Makan berat</option>
          <option value="camilan">Camilan</option>
          <option value="tanpa kompor">Tanpa kompor</option>
          <option value="rice cooker only">Rice cooker only</option>
        </select>
      </label>
    </div>
  );
}