# 🦘 Superteam Australia Web3 Hub

A premium, world-class directory and ecosystem hub for the **Superteam Australia** community. Built with a "Local-First" architecture using React 19, Vite 6, Tailwind CSS 4, and Firebase.

![Superteam AU](https://picsum.photos/seed/vibrant-australia/1200/400)

## ✨ Key Features

- **🏆 Talent Directory**: A searchable, high-fidelity showcase of the best builders in the AU Solana ecosystem.
- **📅 Events Hub**: Stay updated with local Luma events and workshops.
- **🔐 Firebase Auth**: Secure Google authentication integrated directly into the onboarding flow.
- **💎 Premium UI**: Editorial-grade design featuring glassmorphism, mesh gradients, and Geist typography.
- **🛠 Universal Config**: Zero-hardcoding architecture. All social links and Firebase credentials managed via `.env`.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory. You can use `.env.example` as a template:
```bash
cp .env.example .env
```
*Note: Ensure you fill in your Firebase credentials in the `.env` file.*

### 3. Database Seeding
To populate your local Firestore with initial projects and members:
```bash
npm run seed
```

### 4. Running Locally
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

---

## 🛠 Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 4 (Vite plugin architecture)
- **Animations:** Framer Motion (`motion/react`)
- **Backend:** Firebase (Auth & Firestore)
- **Typography:** Geist Variable Font
- **Icons:** Lucide React

---

## 🌐 Deployment (Vercel)

This project is optimized for deployment on **Vercel**:

1. **Connect your GitHub Repo**: Import this repository into Vercel.
2. **Configure Environment Variables**: Add all the variables from your `.env` file to the Vercel project settings (**Settings > Environment Variables**).
3. **Build Settings**: Vercel will automatically detect Vite and use `npm run build` with the `dist` output directory.
4. **Custom Domains**: Add your custom domain and ensure the URL is added to your **Firebase Console > Authentication > Settings > Authorized Domains**.

---

## 🎨 Design System

The project follows a **Premium Light Theme** aesthetic:
- **Background:** `#FAF9F6` (Off-white)
- **Primary:** `#D4AF37` (Ochre Gold)
- **Typography:** Geist Sans (Editorial / Luxury style)
- **Effects:** Glassmorphism with subtle internal strokes and soft 3D shadows.

---

## 🔐 Firebase & Deployment

For detailed instructions on setting up your Firestore database, security rules, and authentication providers, please refer to:
👉 **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)**

---

## 📂 Developer Resources

- `MASTER_PROMPT.txt`: Contains the "Ultimate Local-Ready" prompt for future AI Studio sessions.
- `scripts/seed.ts`: The data population logic for Firestore.
- `src/lib/config.ts`: The central configuration service for environment variables.

---

© 2026 Superteam Australia. Built for the Solana Renaissance.
