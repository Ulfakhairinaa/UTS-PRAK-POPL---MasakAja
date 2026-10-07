export default function PorsiCalculator({ porsi, totalBiaya, onTambah, onKurang }) {
  return (
    <section className="mt-6 rounded-lg border bg-orange-50 p-4">
      <h2 className="text-xl font-semibold">Hitung Biaya</h2>
      <div className="mt-3 flex items-center gap-4">
        <button
          onClick={onKurang}
          className="h-9 w-9 rounded-full border bg-white text-lg"
        >
          −
        </button>
        <span className="text-lg font-medium">{porsi} porsi</span>
        <button
          onClick={onTambah}
          className="h-9 w-9 rounded-full border bg-white text-lg"
        >
          +
        </button>
      </div>
      <p className="mt-3">
        Total biaya: <strong>{totalBiaya}</strong>
      </p>
    </section>
  );
}