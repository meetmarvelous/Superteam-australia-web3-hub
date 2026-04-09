import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MemberCard } from './MemberCard';
import { Search, Filter } from 'lucide-react';
import { Member } from '../types';
import { db, collection, onSnapshot, OperationType, handleFirestoreError } from '../lib/firebase';
import { cn } from '@/lib/utils';

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
  },
  {
    id: '4',
    name: 'Emily Zhang',
    role: 'Smart Contract Engineer',
    skills: ['Rust', 'Anchor', 'Security'],
    avatar: 'https://picsum.photos/seed/emily-vibrant/200/200',
    twitter: '#',
    company: 'Anza'
  },
  {
    id: '5',
    name: 'Michael Scott',
    role: 'Community Manager',
    skills: ['Events', 'Discord', 'Growth'],
    avatar: 'https://picsum.photos/seed/michael-vibrant/200/200',
    twitter: '#',
    company: 'Solana Foundation'
  }
];

const SKILLS = ['Rust', 'React', 'Solana', 'Figma', 'Marketing', 'Anchor', 'Events'];

export function MembersDirectory() {
  const [search, setSearch] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = 'users';
    const unsubscribe = onSnapshot(collection(db, path), 
      (snapshot) => {
        const membersData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Member[];
        
        setMembers(membersData.length > 0 ? membersData : MOCK_MEMBERS);
        setLoading(false);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, path);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(search.toLowerCase()) || 
                         member.role.toLowerCase().includes(search.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => member.skills.includes(skill));
    return matchesSearch && matchesSkills;
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <section id="directory" className="px-6 py-32 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight text-black">Members Directory</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Connect with the builders, founders, and creatives in the Superteam Australia ecosystem.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input 
              placeholder="Search by name or role..." 
              className="pl-12 h-14 rounded-2xl bg-white border-black/10 focus:border-primary/50 transition-all shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Filter size={20} className="text-muted-foreground mr-2" />
            {SKILLS.map(skill => (
              <Badge 
                key={skill}
                variant={selectedSkills.includes(skill) ? 'default' : 'outline'}
                className={cn(
                  'cursor-pointer rounded-full px-4 py-1.5 transition-all text-[10px] font-bold uppercase tracking-wider',
                  selectedSkills.includes(skill) ? 'bg-primary text-primary-foreground' : 'border-black/10 hover:border-primary/50 bg-white'
                )}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map(member => (
            <div key={member.id}>
              <MemberCard member={member} />
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && !loading && (
          <div className="text-center py-20 text-muted-foreground">
            No members found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}
