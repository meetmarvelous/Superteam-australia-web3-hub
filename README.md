# Superteam Australia Web3 Hub

A premium, world-class directory and ecosystem hub for Superteam Australia, built with React, Vite, Tailwind CSS 4, and Firebase.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your credentials:

```env
# Firebase Configuration (See FIREBASE_SETUP.md for details)
# These are already configured in firebase-applet-config.json, 
# but you can move them here if you prefer using import.meta.env

# Gemini AI API Key (Required for AI features)
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Running Locally
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

---

## 🛠 Tech Stack

- **Frontend:** React 19, Vite 6
- **Styling:** Tailwind CSS 4 (using the new Vite plugin architecture)
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React
- **Backend:** Firebase (Auth & Firestore)
- **Typography:** Geist Variable Font

---

## 📂 Project Structure

- `src/components/`: Reusable UI components (Navbar, Footer, GlassCard, etc.)
- `src/context/`: React Context providers (e.g., `AuthContext.tsx`)
- `src/lib/`: Utility functions and service initializations (`firebase.ts`, `utils.ts`)
- `src/types/`: TypeScript interfaces and types
- `src/index.css`: Global styles and Tailwind 4 configuration
- `vite.config.ts`: Vite configuration with path aliases and environment handling

---

## 🎨 Design System

The project follows a **Premium Light Theme** aesthetic:
- **Background:** `#FAF9F6` (Off-white)
- **Primary:** `#D4AF37` (Ochre Gold)
- **Typography:** Geist Sans (Editorial style)
- **Effects:** Glassmorphism with subtle internal strokes and soft shadows.

---

## 🧩 UI Components (shadcn/ui)

This project uses **shadcn/ui** for high-quality, accessible components.
- **Configuration:** `components.json`
- **Location:** `src/components/ui/`
- **Utility:** `src/lib/utils.ts` (contains the `cn()` helper)

To add more components locally:
```bash
npx shadcn@latest add [component-name]
```

---

## 🔐 Security & Database

For detailed instructions on setting up your Firestore database, security rules, and authentication, please refer to:
👉 **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)**

---

## 📦 Building for Production

```bash
npm run build
```
The production-ready files will be generated in the `dist/` folder.
