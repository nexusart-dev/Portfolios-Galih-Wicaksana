# Portfolio — Galih Wicaksana

Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript

```bash
npm install
npm run dev   # http://localhost:2004
```

## Tema

- **Warna** semua berada di token `:root` dan `.dark` pada `src/app/globals.css`
  (`--bg`, `--surface`, `--fg`, `--accent`, dst). Ubah di sana untuk mengganti seluruh tema.
- **Font**: Sora (`next/font/google`, variabel `--font-sora`).
- **Light/Dark**: `src/lib/theme.tsx` — mengikuti sistem, bisa diganti manual, tersimpan di `localStorage`,
  dan tanpa kilatan saat load (skrip kecil di `<head>` pada `layout.tsx`).
- **Konten**: `src/data/index.ts` (profil, kontak, sosial, pengalaman, sertifikat, proyek, tools).

## Struktur

```
src/app/            section halaman (hero, about, certificate, projects, tools, contacts)
src/components/ui/  Navbar, Button, Section, Lightbox, Orbit, ThemeToggle, BrandMark
src/lib/theme.tsx   hook useTheme
```

Form kontak membutuhkan `GMAIL_APP_PASSWORD` di `.env.local`.
