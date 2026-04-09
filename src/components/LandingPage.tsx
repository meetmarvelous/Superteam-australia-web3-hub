import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BentoGrid, BentoItem } from './BentoGrid';
import { GlassCard } from './GlassCard';
import { StatsCounter } from './StatsCounter';
import { MemberCard } from './MemberCard';
import { ArrowRight, Globe, Zap, Users, Rocket } from 'lucide-react';
import { Member, Project } from '../types';

const MOCK_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    skills: ['Rust', 'React', 'Solana'],
    avatar: 'https://picsum.photos/seed/sarah-vibrant/200/200',
    twitter: '#',
    company: 'Solana Labs',
    isCore: true
  },
  {
    id: '2',
    name: 'Alex Rivera',
    role: 'Product Designer',
    skills: ['Figma', 'UI/UX', 'Motion'],
    avatar: 'https://picsum.photos/seed/alex-vibrant/200/200',
    twitter: '#',
    company: 'Superteam'
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Growth Lead',
    skills: ['Marketing', 'Strategy', 'Community'],
    avatar: 'https://picsum.photos/seed/james-vibrant/200/200',
    twitter: '#',
    company: 'Helius'
  }
];

const MOCK_PROJECTS: Project[] = [
  { name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png', url: '#' },
  { name: 'Jupiter', logo: 'https://jup.ag/svg/jupiter-logo.svg', url: '#' },
  { name: 'Helius', logo: 'https://www.helius.dev/favicon.ico', url: '#' },
  { name: 'Pyth', logo: 'https://pyth.network/favicon.ico', url: '#' },
];

import { EventsSection } from './EventsSection';

export function LandingPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <div className="h-px w-8 bg-brand-gold/50" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase">
                Superteam Australia Ecosystem
              </span>
            </div>
            
            <h1 className="text-7xl md:text-[120px] font-heading font-bold tracking-tight leading-[0.85] mb-12 text-black">
              The Home of <br />
              <span className="text-primary">Solana Builders</span> <br />
              Down Under.
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed font-light">
                Accelerating internet capital markets on Solana by bridging local talent with global opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-lg font-bold shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  Get Involved <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg font-bold border-black/10 hover:bg-black/5 backdrop-blur-sm">
                  Explore
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Bento Grid Refined */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <GlassCard className="md:col-span-1 flex flex-col justify-center py-16 text-center">
              <StatsCounter value={250} label="Members" suffix="+" />
            </GlassCard>
            <GlassCard className="md:col-span-1 flex flex-col justify-center py-16 text-center">
              <StatsCounter value={45} label="Events Hosted" />
            </GlassCard>
            <GlassCard className="md:col-span-1 flex flex-col justify-center py-16 text-center">
              <StatsCounter value={120} label="Projects Built" suffix="+" />
            </GlassCard>
            <GlassCard className="md:col-span-1 flex flex-col justify-center py-16 text-center">
              <StatsCounter value={1.2} label="Bounties Won" suffix="M+" />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Mission Section - Editorial Style */}
      <section id="mission" className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase">01 / MISSION</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-10 tracking-tight leading-tight">
                Empowering the <br />Next Generation.
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                Superteam Australia is a community of the best builders, founders, and creatives in the Australian Solana ecosystem. We help you find your next big opportunity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: Zap, title: 'Accelerate', desc: 'Resources to scale your ideas.' },
                  { icon: Users, title: 'Connect', desc: 'Like-minded individuals across the continent.' },
                  { icon: Rocket, title: 'Launch', desc: 'From hackathons to mainnet support.' },
                  { icon: Globe, title: 'Global', desc: 'Connected to 12+ regions worldwide.' }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-black">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden glass p-3 rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://picsum.photos/seed/vibrant-australia/1000/1250" 
                  alt="Australia Web3" 
                  className="w-full h-full object-cover rounded-[3rem] transition-all duration-1000 scale-110 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden xl:block border-black/5"
              >
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-heading font-bold text-primary">12+</div>
                  <div className="h-10 w-px bg-black/10" />
                  <div className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Global <br />Regions</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <EventsSection />

      {/* Talent Showcase */}
      <section id="talent" className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase">02 / TALENT</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">Ecosystem Talent</h2>
            </div>
            <Button variant="outline" className="rounded-full px-8 h-12 border-white/10 hover:bg-white/5 font-bold">
              View Directory <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_MEMBERS.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <h2 className="text-sm font-bold mb-16 text-muted-foreground uppercase tracking-[0.3em]">Powering the Solana Renaissance</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 relative z-10">
              {MOCK_PROJECTS.map((project) => (
                <img 
                  key={project.name} 
                  src={project.logo} 
                  alt={project.name} 
                  className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
