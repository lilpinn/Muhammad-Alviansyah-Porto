// ✏️ EDIT SEMUA DATA DI SINI — ganti isinya dengan data diri kamu sendiri.
// Struktur field lihat di src/types/portfolio.ts

import type {
  Certificate,
  Experience,
  Profile,
  Project,
  Skill,
} from "@/types/portfolio";

// ============================================================
// 👤 PROFIL — nama, bio, foto, email, sosmed, CV
// ============================================================
export const profile: Profile = {
  // ✏️ EDIT: Nama lengkap
  name: "Muhammad Alviansyah",
  // ✏️ EDIT: Gelar/brand, tampil di navbar & footer
  title: "Full-Stack Developer",
  // ✏️ EDIT: Kata yang muncul bergantian di typing effect Hero
  typingProfessions: [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Cyber Security",
    "Problem Solver",
  ],
  // ✏️ EDIT: Bio singkat 1-2 kalimat untuk Hero/SEO description
  bio: "Saya membangun aplikasi web yang cepat, indah, dan mudah dipakai. Fokus di React, Next.js, dan Node.js.",
  // ✏️ EDIT: Bio lengkap untuk section About (beberapa kalimat)
  about:
    "Saya adalah seorang Full-Stack Developer dan antusias di bidang Cybersecurity yang memiliki minat dalam membangun aplikasi web modern, fungsional, dan aman. Saya senang mengembangkan aplikasi secara menyeluruh, mulai dari merancang antarmuka pengguna (front-end), membangun sistem sisi server (back-end), hingga mengelola basis data. " +
    "Saya juga memiliki ketertarikan pada keamanan aplikasi, penetration testing, dan riset kerentanan untuk memahami cara kerja sistem serta mengidentifikasi potensi celah keamanan. Saya terus mengembangkan kemampuan teknis dan mempelajari teknologi baru untuk menghasilkan solusi digital yang efektif, efisien, dan andal. " +
    " Saya suka belajar teknologi baru dan " +
    "berkontribusi pada proyek open source.", // ✏️ EDIT: Path foto di folder public/ (timpa file-nya dengan foto kamu, nama sama)
  photo: "/images/profile.jpg",
  // ✏️ EDIT: Email yang tampil & form contact
  email: "muhammadalviansyah22@gmail.com",
  // ✏️ EDIT: Nomor HP ("" = disembunyikan)
  phone: "+62 813-8572-8468",
  // ✏️ EDIT: Lokasi
  location: "Serang, Indonesia",
  // ✏️ EDIT: File CV di public/ (timpa cv.pdf dengan CV asli)
  resumeUrl: "/images/cv.pdf",
  // ✏️ EDIT: Teks tombol CV
  resumeLabel: "Download CV",
  // ✏️ EDIT: Sosial media — icon yang tersedia: Github, Linkedin, Instagram, Twitter, Youtube, Mail, Globe
  socials: [
    { name: "GitHub", url: "https://github.com/lilpinn", icon: "Github" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhammad-alviansyahh",
      icon: "Linkedin",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/alv.nnn_",
      icon: "Instagram",
    },
    { name: "Email", url: "mailto:muhammadalviansyah22@gmail.com", icon: "Mail" },
  ],
};

// ============================================================
// 🧠 SKILL — keahlian + level (1-100)
// Kategori: Frontend | Backend | Database | Tools
// ============================================================
export const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    level: 90,
    description: "Hooks, state management, komponen reusable",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 88,
    description: "App Router, SSG/SSR, static export",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 85,
    description: "Type safety di seluruh stack",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 90,
    description: "Utility-first, design system modern",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    level: 95,
    description: "Semantic, aksesibel, responsive",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 82,
    description: "REST API, Express, auth",
  },
  {
    name: "Python",
    category: "Backend",
    level: 70,
    description: "Scripting, automation, data",
  },
  {
    name: "REST API",
    category: "Backend",
    level: 85,
    description: "Desain & integrasi API",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: 78,
    description: "Query, relasi, optimasi",
  },
  {
    name: "MySQL",
    category: "Database",
    level: 75,
    description: "Schema design, CRUD",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: 88,
    description: "Branching, PR, CI/CD",
  },
  {
    name: "Docker",
    category: "Tools",
    level: 65,
    description: "Containerisasi aplikasi",
  },
  {
    name: "VS Code",
    category: "Tools",
    level: 95,
    description: "Productivity & extension",
  },
  {
    name: "Figma",
    category: "Tools",
    level: 70,
    description: "Mockup & design handoff",
  },
];

// ============================================================
// 💼 PENGALAMAN / PENDIDIKAN / ORGANISASI
// type: 'work' | 'education' | 'organization'
// ============================================================
export const experiences: Experience[] = [
  {
    title: "Full-Stack Developer",
    organization: "PT Contoh Teknologi",
    location: "Jakarta",
    start: "Jan 2024",
    end: "Sekarang",
    type: "work",
    points: [
      "Membangun dashboard analitik berbasis Next.js yang dipakai 2.000+ pengguna aktif.",
      "Merancang REST API Node.js yang menurunkan waktu respons rata-rata 40%.",
      "Menerapkan CI/CD GitHub Actions untuk deploy otomatis.",
    ],
  },
  {
    title: "Frontend Developer (Intern)",
    organization: "Startup Contoh",
    location: "Remote",
    start: "Jul 2023",
    end: "Des 2023",
    type: "work",
    points: [
      "Mengembangkan komponen UI reusable dengan React + TypeScript.",
      "Berkolaborasi dengan tim desain mengimplementasikan design system.",
    ],
  },
  {
    title: "S1 Teknik Informatika",
    organization: "Universitas Contoh",
    location: "Bandung",
    start: "2020",
    end: "2024",
    type: "education",
    points: [
      "IPK 3.7/4.0",
      "Skripsi: Sistem Rekomendasi Berbasis Machine Learning",
      "Aktif di himpunan mahasiswa sebagai koordinator divisi teknologi.",
    ],
  },
  {
    title: "Ketua Divisi IT",
    organization: "Komunitas Developer Lokal",
    location: "Jakarta",
    start: "2022",
    end: "2023",
    type: "organization",
    points: [
      "Mengorganisir 12+ workshop pemrograman dengan 500+ peserta.",
      "Membangun website resmi komunitas.",
    ],
  },
];

// ============================================================
// 📜 SERTIFIKAT — timpa gambar di public/images/ (cert-1.jpg dst)
// ============================================================
export const certificates: Certificate[] = [
  {
    name: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    date: "Mei 2024",
    category: "Web",
    image: "/images/cert-1.svg",
    credentialId: "DCD-XXXX-001",
    verifyUrl: "https://dicoding.com/certificates/XXXX",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Mar 2024",
    category: "Web",
    image: "/images/cert-2.svg",
    credentialId: "fcc-xxxx-002",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    date: "Nov 2023",
    category: "Cloud",
    image: "/images/cert-3.svg",
    credentialId: "AWS-XXXX-003",
    verifyUrl: "https://aws.amazon.com/verification",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    date: "Agu 2023",
    category: "Data",
    image: "/images/cert-4.svg",
    credentialId: "IBM-XXXX-004",
  },
];

// ============================================================
// 🚀 PROYEK — timpa gambar di public/images/ (project-1.jpg dst)
// ============================================================
export const projects: Project[] = [
  {
    title: "Website Portofolio",
    description:
      "Website portofolio full-stack-ready dengan dark mode, animasi, dan deploy gratis di GitHub Pages.",
    detail:
      "Website portofolio ini sendiri. Dibangun dengan Next.js (App Router), TypeScript, dan Tailwind CSS, " +
      "lalu di-static-export untuk hosting gratis di GitHub Pages lewat GitHub Actions. " +
      "Fitur: dark/light mode, typing effect, scroll-spy navbar, filter sertifikat & proyek dengan modal, " +
      "timeline pengalaman, form kontak Web3Forms, toast notification, serta optimasi SEO (Open Graph, sitemap-ready).",
    category: "Web App",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    image: "/images/project-4.svg",
    githubUrl: "https://github.com/lilpinn/Muhammad-Alviansyah-Porto",
    liveUrl: "https://lilpinn.github.io/Muhammad-Alviansyah-Porto",
    featured: true,
  },
];

// ============================================================
// ⚙️ KONTAK — Web3Forms (gratis, tanpa backend)
// Daftar di https://web3forms.com → dapat access_key → tempel di sini
// ============================================================
export const contactConfig = {
  // ✏️ EDIT: access key Web3Forms (kosongkan = form hanya simulasi/success palsu)
  web3FormsAccessKey: "",
  // ✏️ EDIT: URL endpoint (biasanya tidak perlu diubah)
  endpoint: "https://api.web3forms.com/submit",
};
