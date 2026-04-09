import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { Badge } from '@/components/ui/badge';
import { Twitter, Github, ExternalLink } from 'lucide-react';
import { Member } from '../types';

interface MemberCardProps {
  member: Member;
  key?: string | number;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <GlassCard className="h-full flex flex-col p-8 group border-black/5">
      <div className="flex items-start justify-between mb-8">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden glass p-1 group-hover:rotate-3 transition-transform duration-500 border-black/5">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full rounded-xl object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {member.isCore && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[8px] font-bold px-2 py-0.5 rounded-full tracking-widest border border-black/10">
              CORE
            </div>
          )}
        </div>
        <div className="flex gap-3">
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <Twitter size={14} />
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <Github size={14} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-heading font-bold mb-1 text-black group-hover:text-primary transition-colors">{member.name}</h3>
      <p className="text-primary/80 text-sm font-medium mb-4 tracking-wide uppercase text-[10px]">{member.role}</p>
      
      {member.company && (
        <div className="text-muted-foreground text-xs mb-6 flex items-center gap-2 font-light">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> {member.company}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {member.skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="bg-black/5 text-[9px] font-medium tracking-wider uppercase px-2 py-0.5 border-black/5 text-muted-foreground">
            {skill}
          </Badge>
        ))}
      </div>
    </GlassCard>
  );
}
