
# MasakAja

Katalog resep hemat untuk anak kos. Cari resep berdasarkan budget, waktu masak, dan bahan yang ada, lalu hitung otomatis biayanya sesuai jumlah porsi.

Tugas UTS Praktikum POPL.

## Docker Hub

Image: https://hub.docker.com/r/khairinaulfa/masakaja

```bash
docker pull khairinaulfa/masakaja:v1-UTS
docker run -p 3000:3000 khairinaulfa/masakaja:v1-UTS
```

Buka `http://localhost:3000`.

## Fitur

| Halaman       | Rute            | Fitur                                                                      |
| ------------- | --------------- | -------------------------------------------------------------------------- |
| Home          | `/`           | Hero, pencarian cepat, 3 resep termurah                                    |
| Daftar Resep  | `/resep`      | Kartu resep, filter budget, filter waktu masak + kategori, pencarian judul |
| Detail Resep  | `/resep/[id]` | Bahan, langkah, ubah jumlah porsi dan hitung biaya otomatis                |
| Cari by Bahan | `/cari-bahan` | Checklist bahan yang dimiliki, hasil resep yang cocok                      |

Nice to have (masih di backlog): Favorit dan Menu Seminggu.

## Tech Stack

- Next.js (App Router, JavaScript)
- Tailwind CSS
- Data statis `data/recipes.json` (tanpa backend)
- Docker (multi-stage build, `node:22-alpine`)

## Struktur Folder

```
masakaja/
├── app/            # Routing (page.js, layout.js, resep/)
├── components/     # Presenter: komponen UI murni
├── containers/     # Container: logika dan penyusun data
├── hooks/          # Custom hooks (useRecipes, usePorsi, ...)
├── models/         # Class OOP (Recipe)
├── data/           # recipes.json
├── docs/           # Dokumen Sprint Review dan Retrospective
├── Dockerfile
└── next.config.mjs
```

## Menjalankan Secara Lokal

```bash
git clone https://github.com/Ulfakhairinaa/UTS-PRAK-POPL---MasakAja.git
cd UTS-PRAK-POPL---MasakAja
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build Docker Sendiri

```bash
docker build -t khairinaulfa/masakaja:v1-UTS .
docker run -p 3000:3000 khairinaulfa/masakaja:v1-UTS
```

## OOP

Model data memakai class `Recipe` di `models/Recipe.js`.

| Anggota                | Jenis  | Fungsi                                                 |
| ---------------------- | ------ | ------------------------------------------------------ |
| `totalBiaya`         | getter | Jumlah harga semua bahan                               |
| `biayaPerPorsi`      | getter | `totalBiaya` dibagi jumlah porsi                     |
| `punyaBahan(daftar)` | method | Mengecek apakah resep cocok dengan bahan yang dimiliki |

Data mentah dari JSON dibungkus `new Recipe(data)` agar perhitungan biaya ada di satu tempat, bukan tersebar di komponen.

## Design Pattern

### 1. Container-Presenter

Komponen dipisah menjadi dua peran:

- **Container** (`containers/`): mengambil data, memakai hooks, menghitung nilai turunan, lalu mengirimkannya sebagai props.
- **Presenter** (`components/`): hanya menampilkan UI dari props, tanpa logika bisnis.

| Container                    | Presenter                                         |
| ---------------------------- | ------------------------------------------------- |
| `HomeContainer`            | `Home`                                          |
| `RecipeListContainer`      | `RecipeList`, `RecipeFilters`, `RecipeCard` |
| `RecipeDetailContainer`    | `RecipeDetail`                                  |
| `PorsiCalculatorContainer` | `PorsiCalculator`                               |

Contoh alurnya:

```
HomeContainer  --(populer)-->  Home
  (urutkan resep termurah,       (hanya render kartu)
   format rupiah)
```

Manfaatnya: UI mudah diubah tanpa menyentuh logika, dan logika mudah dites tanpa UI.

### 2. Custom Hooks

Logika yang memakai state dipisah ke hooks agar bisa dipakai ulang.

| Hook           | Tugas                                                                       |
| -------------- | --------------------------------------------------------------------------- |
| `useRecipes` | State filter (keyword, budget, waktu, kategori) dan hasil penyaringan resep |
| `usePorsi`   | State jumlah porsi dengan`tambah` dan `kurang` (minimal 1)              |

## Agile / Scrum

- Backlog dikelola di Jira (space `MasakAja`, key `MAS`): 5 Epic, 13 User Story + 2 nice to have.
- 2 sprint, masing-masing 20 story point.
- Peran: Product Owner dan Scrum Master (bergantian sesuai kesepakatan tim).
- Dokumen sprint ada di folder `docs/`.

| Sprint   | Sprint Goal                                                                                 |
| -------- | ------------------------------------------------------------------------------------------- |
| Sprint 1 | Pengguna bisa melihat, mencari, memfilter resep, dan membuka detail resep                   |
| Sprint 2 | Fitur pembeda (cari by bahan + hitung biaya) berjalan, Docker ter-push, dokumentasi lengkap |

## Aturan Git

**Branch**

```
feat_{nama_fitur}/{dd-mm-yyyy}
fix_{nama_fitur}/{dd-mm-yyyy}
```

Contoh: `feat_home/07-10-2026`

**Commit**

| Prefix     | Dipakai untuk                    |
| ---------- | -------------------------------- |
| `feat:`  | Fitur baru                       |
| `fix:`   | Perbaikan bug                    |
| `style:` | Perubahan tampilan atau format   |
| `chore:` | Konfigurasi, Docker, dokumentasi |

Alur: satu branch = satu user story, lalu Pull Request ke `main`.

## Tim

| Nama                 | GitHub                                            |
| -------------------- | ------------------------------------------------- |
| Ulfa Khairina        | [@Ulfakhairinaa](https://github.com/Ulfakhairinaa) |
| Meurahmah Nushsharie | [@meurahmah](https://github.com/meurahmah)         |
