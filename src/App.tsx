import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { MembersDirectory } from './components/MembersDirectory';
import { OnboardingForm } from './components/OnboardingForm';
import { Footer } from './components/Footer';
import { MeshBackground } from './components/MeshBackground';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen selection:bg-brand-gold selection:text-black relative">
        <MeshBackground />
        <Navbar />
        <main>
          <LandingPage />
          <MembersDirectory />
          <OnboardingForm />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
