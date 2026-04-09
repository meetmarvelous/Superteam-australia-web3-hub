import { config } from '../lib/config';

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
              S
            </div>
            <span className="font-heading font-bold tracking-tight text-xl text-black">Superteam AU</span>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Accelerating internet capital markets on Solana by bridging local talent with global opportunities.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-black uppercase text-xs tracking-widest">Resources</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><a href="#onboarding" className="hover:text-primary transition-colors">Apply for Membership</a></li>
            <li><a href={config.ecosystem.bounties} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Bounties</a></li>
            <li><a href={config.ecosystem.grants} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Grants</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Ecosystem Tools</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-black uppercase text-xs tracking-widest">Connect</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter / X</a></li>
            <li><a href={config.social.discord} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord</a></li>
            <li><a href={config.social.luma} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Luma</a></li>
            <li><a href={`mailto:${config.social.email}`} className="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        <p>© 2026 Superteam Australia. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
