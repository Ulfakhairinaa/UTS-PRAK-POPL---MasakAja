export default function RecipeFilters({ filters, onChange }) {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
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
    </div>
  );
}