export class Recipe {
  constructor({ id, judul, kategori, waktuMasak, porsi, bahan, langkah }) {
    this.id = id;
    this.judul = judul;
    this.kategori = kategori;
    this.waktuMasak = waktuMasak;
    this.porsi = porsi;
    this.bahan = bahan;
    this.langkah = langkah;
  }

  get totalBiaya() {
    return this.bahan.reduce((sum, b) => sum + b.harga, 0);
  }

  get biayaPerPorsi() {
    return Math.round(this.totalBiaya / this.porsi);
  }

  biayaUntuk(jumlahPorsi) {
    return Math.round(this.biayaPerPorsi * jumlahPorsi);
  }

  punyaBahan(daftar) {
    return daftar.some((d) =>
      this.bahan.some((b) => b.nama.toLowerCase() === d.toLowerCase())
    );
  }
}