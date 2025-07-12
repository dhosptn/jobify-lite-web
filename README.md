# 💼 Jobify Lite

**Jobify Lite** adalah aplikasi pencari kerja modern berbasis web yang dirancang untuk memberikan pengalaman pengguna yang intuitif dan responsif. Proyek ini dikembangkan sebagai bagian dari portfolio magang saya untuk menunjukkan pemahaman terhadap teknologi fullstack modern, termasuk **Next.js**, **Firebase**, dan **Tailwind CSS**.

---

## 🚀 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: Firebase Authentication (Google Sign-In)
- **Database**: Firebase Firestore
- **Deployment**: Vercel / Firebase Hosting *(optional)*

---

## 🎯 Tujuan Proyek

Proyek ini bertujuan untuk:

- Menerapkan konsep **Fullstack Web Development** dengan framework modern.
- Mengembangkan aplikasi **auth-protected** berbasis Firebase.
- Mendesain UI/UX yang **responsif dan profesional** untuk pengguna umum.
- Mengasah kemampuan dalam penggunaan **real-time database (Firestore)** dan **user session management**.

---

## 🔑 Fitur Utama

- ✅ **Login dengan Google** menggunakan Firebase Authentication
- 🔎 **Pencarian lowongan kerja** dengan tampilan bersih dan mudah dinavigasi
- 📌 **Penyimpanan data pekerjaan** di Firebase Firestore
- 🎨 **Antarmuka responsif** dengan Tailwind CSS
- 🎬 **Animasi transisi halus** dengan Framer Motion
- 🔒 **Routing yang dilindungi** (hanya user login yang dapat mengakses halaman tertentu)

---

## 🧪 Cara Menjalankan Proyek (Local Setup)

### 1. Clone repositori

```bash
git clone https://github.com/username/jobify-lite.git
cd jobify-lite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Konfigurasi Firebase
Buat project baru di Firebase Console, lalu aktifkan:

- Authentication (Google Sign-In)
- Firestore Database

Lalu buat file .env.local dan tambahkan:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Jalankan project
```bash
npm run dev
```
Akses di http://localhost:3000.
