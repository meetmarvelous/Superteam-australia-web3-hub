import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassCard } from './GlassCard';
import { CheckCircle2, ArrowRight, ArrowLeft, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db, addDoc, collection, OperationType, handleFirestoreError } from '../lib/firebase';

export function OnboardingForm() {
  const { user, login } = useAuth();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '',
    skills: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    if (!user) return;
    setIsSubmitting(true);
    try {
      const path = 'applications';
      await addDoc(collection(db, path), {
        ...formData,
        uid: user.uid,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      nextStep();
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'applications');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <section id="onboarding" className="px-6 py-32">
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-12 text-center border-black/5">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <Lock size={32} />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4 text-black">Join the Superteam</h2>
            <p className="text-muted-foreground mb-8 font-light">Please login with your Google account to apply for membership.</p>
            <Button onClick={login} className="h-14 px-10 rounded-2xl bg-black text-white hover:bg-black/90 font-bold uppercase tracking-widest text-xs">
              Login to Apply
            </Button>
          </GlassCard>
        </div>
      </section>
    );
  }

  return (
    <section id="onboarding" className="px-6 py-32">
      <div className="max-w-3xl mx-auto">
        <GlassCard className="p-8 md:p-12 overflow-visible border-black/5">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-heading font-bold text-black">Join the Superteam</h2>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">STEP {step} OF 3</span>
            </div>
            <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em] text-muted-foreground">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="h-14 rounded-xl bg-secondary border-black/10 focus:border-primary/50 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em] text-muted-foreground">Email Address</label>
                  <Input 
                    placeholder="john@example.com" 
                    className="h-14 rounded-xl bg-secondary border-black/10 focus:border-primary/50 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <Button onClick={nextStep} className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  Next <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em] text-muted-foreground">Location (City)</label>
                  <Input 
                    placeholder="Sydney, Melbourne, etc." 
                    className="h-14 rounded-xl bg-secondary border-black/10 focus:border-primary/50 transition-all"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em] text-muted-foreground">Primary Role</label>
                  <Input 
                    placeholder="Developer, Designer, Growth, etc." 
                    className="h-14 rounded-xl bg-secondary border-black/10 focus:border-primary/50 transition-all"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl border-black/10 hover:bg-black/5 font-bold">
                    <ArrowLeft className="mr-2" /> Back
                  </Button>
                  <Button onClick={nextStep} className="flex-[2] h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                    Next <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center space-y-8"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-black">Ready to join?</h3>
                  <p className="text-muted-foreground font-light">By clicking submit, you're applying to join the Superteam Australia community. We'll review your application and get back to you soon!</p>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl border-black/10 hover:bg-black/5 font-bold">
                    <ArrowLeft className="mr-2" /> Back
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting}
                    className="flex-[2] h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Application Sent!</h3>
                <p className="text-muted-foreground">Thank you for applying. Our team will review your profile and reach out via email.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  );
}

