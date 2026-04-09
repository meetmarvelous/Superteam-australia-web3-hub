import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, login, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between border-black/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
            S
          </div>
          <span className="font-heading font-bold tracking-tight text-lg text-black">Superteam AU</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Mission', 'Events', 'Talent', 'Directory'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
          
          {user ? (
            <div className="flex items-center gap-4 border-l border-black/5 pl-8">
              <div className="flex items-center gap-3">
                <div className="text-right hidden lg:block">
                  <p className="text-[10px] font-bold text-black uppercase tracking-wider leading-none mb-1">{user.displayName}</p>
                  <button onClick={logout} className="text-[8px] font-bold text-muted-foreground hover:text-destructive uppercase tracking-widest">Logout</button>
                </div>
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ''} className="w-8 h-8 rounded-full border border-black/10" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-muted-foreground"><User size={14} /></div>
                )}
              </div>
            </div>
          ) : (
            <Button onClick={login} variant="default" className="rounded-full bg-black text-white hover:bg-black/90 font-bold px-6 h-10 text-xs tracking-widest uppercase">
              Login
            </Button>
          )}
        </div>

        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass rounded-2xl p-6 flex flex-col gap-4 border-black/5"
        >
          {['Mission', 'Events', 'Talent', 'Directory'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-black uppercase tracking-widest">{item}</a>
          ))}
          {user ? (
            <Button onClick={logout} className="w-full rounded-full bg-black/5 text-black font-bold h-12">Logout</Button>
          ) : (
            <Button onClick={login} className="w-full rounded-full bg-black text-white font-bold h-12">Login</Button>
          )}
        </motion.div>
      )}
    </nav>
  );
}

