// ✏️ EDIT: Semua tipe data portofolio. Tidak perlu diubah kecuali menambah field baru.

export interface SocialLink {
  name: string;
  url: string;
  // ✏️ EDIT: nama ikon lucide yang tersedia: Github, Linkedin, Instagram, Twitter, Youtube, Mail, Globe
  icon: string;
}

export interface Profile {
  // ✏️ EDIT: Nama lengkap Anda
  name: string;
  // ✏️ EDIT: Gelar/brand singkat, mis. "Full-Stack Developer"
  title: string;
  // ✏️ EDIT: Kata profesi yang muncul di typing effect Hero
  typingProfessions: string[];
  // ✏️ EDIT: Ringkasan bio singkat (1-2 kalimat)
  bio: string;
  // ✏️ EDIT: Bio lebih lengkap untuk section About
  about: string;
  // ✏️ EDIT: Path foto profil di folder public/
  photo: string;
  // ✏️ EDIT: Email utama
  email: string;
  // ✏️ EDIT: Nomor telepon (opsional, isi "" jika tidak mau tampil)
  phone: string;
  // ✏️ EDIT: Lokasi, mis. "Jakarta, Indonesia"
  location: string;
  // ✏️ EDIT: URL file CV di folder public/, mis. "/images/cv.pdf"
  resumeUrl: string;
  // ✏️ EDIT: Teks tombol download CV
  resumeLabel: string;
  // ✏️ EDIT: Link sosial media
  socials: SocialLink[];
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools';

export interface Skill {
  // ✏️ EDIT: Nama skill, mis. "React"
  name: string;
  // ✏️ EDIT: Kategori: Frontend | Backend | Database | Tools
  category: SkillCategory;
  // ✏️ EDIT: Level keahlian 1-100 (untuk bar indikator)
  level: number;
  // ✏️ EDIT: Deskripsi singkat skill (opsional)
  description?: string;
}

export interface Experience {
  // ✏️ EDIT: Judul posisi / pendidikan
  title: string;
  // ✏️ EDIT: Nama institusi / perusahaan / organisasi
  organization: string;
  // ✏️ EDIT: Lokasi kerja/sekolah
  location: string;
  // ✏️ EDIT: Tanggal mulai, mis. "Jan 2022"
  start: string;
  // ✏️ EDIT: Tanggal selesai, atau "Sekarang" jika masih berjalan
  end: string;
  // ✏️ EDIT: Jenis: "work" | "education" | "organization"
  type: 'work' | 'education' | 'organization';
  // ✏️ EDIT: Daftar poin pencapaian / deskripsi
  points: string[];
}

export interface Certificate {
  // ✏️ EDIT: Judul sertifikat
  name: string;
  // ✏️ EDIT: Penerbit, mis. "Dicoding", "Google", "FreeCodeCamp"
  issuer: string;
  // ✏️ EDIT: Tanggal terbit, mis. "Mei 2024"
  date: string;
  // ✏️ EDIT: Kategori untuk filter, mis. "Web", "Cloud", "Data"
  category: string;
  // ✏️ EDIT: Path gambar sertifikat di public/images/
  image: string;
  // ✏️ EDIT: Credential ID (opsional, "" jika tidak ada)
  credentialId?: string;
  // ✏️ EDIT: URL verifikasi (opsional)
  verifyUrl?: string;
}

export interface Project {
  // ✏️ EDIT: Judul proyek
  title: string;
  // ✏️ EDIT: Deskripsi singkat proyek
  description: string;
  // ✏️ EDIT: Deskripsi detail untuk modal
  detail: string;
  // ✏️ EDIT: Kategori untuk filter, mis. "Web App", "Mobile", "API"
  category: string;
  // ✏️ EDIT: Daftar teknologi yang dipakai
  technologies: string[];
  // ✏️ EDIT: Path gambar thumbnail di public/images/
  image: string;
  // ✏️ EDIT: Link repository GitHub ("" jika tidak ada)
  githubUrl: string;
  // ✏️ EDIT: Link live demo ("" jika tidak ada)
  liveUrl: string;
  // ✏️ EDIT: true = proyek unggulan (tampil lebih dulu / badge featured)
  featured: boolean;
}
