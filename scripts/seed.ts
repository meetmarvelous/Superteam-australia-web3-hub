import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import localConfig from "../firebase-applet-config.json" assert { type: "json" };

const firebaseConfig = {
  apiKey: localConfig.apiKey,
  authDomain: localConfig.authDomain,
  projectId: localConfig.projectId,
  storageBucket: localConfig.storageBucket,
  messagingSenderId: localConfig.messagingSenderId,
  appId: localConfig.appId,
  firestoreDatabaseId: localConfig.firestoreDatabaseId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

const SEED_DATA = {
  users: [
    {
      uid: "placeholder-1",
      name: "Sarah Chen",
      role: "Full Stack Developer",
      skills: ["Rust", "React", "Solana"],
      avatar: "https://picsum.photos/seed/sarah-vibrant/200/200",
      twitter: "@sarah_sol",
      company: "Solana Labs",
      isCore: true
    },
    {
      uid: "placeholder-2",
      name: "Alex Rivera",
      role: "Product Designer",
      skills: ["Figma", "UI/UX", "Motion"],
      avatar: "https://picsum.photos/seed/alex-vibrant/200/200",
      twitter: "@alex_design",
      company: "Superteam"
    }
  ],
  events: [
    {
      title: "Solana Australia Day",
      date: "2024-05-15T18:00:00Z",
      location: "Sydney Startup Hub",
      lumaUrl: "https://lu.ma/solana-au",
      image: "https://picsum.photos/seed/event1/800/400",
      type: "upcoming"
    }
  ],
  projects: [
    { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png", url: "https://solana.com" },
    { name: "Jupiter", logo: "https://jup.ag/svg/jupiter-logo.svg", url: "https://jup.ag" }
  ]
};

async function seed() {
  console.log("🚀 Starting database seeding...");

  for (const [collName, items] of Object.entries(SEED_DATA)) {
    const colRef = collection(db, collName);
    for (const item of items) {
      // Use name as ID for projects, or random/placeholder for others
      const id = (item as any).uid || (item as any).name?.toLowerCase().replace(/\s+/g, "-") || Math.random().toString(36).substring(7);
      await setDoc(doc(colRef, id), item);
      console.log(`✅ Added to ${collName}: ${id}`);
    }
  }

  console.log("✨ Seeding complete!");
  process.exit(0);
}

seed().catch(console.error);
