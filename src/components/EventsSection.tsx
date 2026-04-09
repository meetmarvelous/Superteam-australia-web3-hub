import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '../types';
import { db, collection, onSnapshot, OperationType, handleFirestoreError } from '../lib/firebase';

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Solana Sydney Meetup',
    date: 'April 25, 2026',
    location: 'Sydney Startup Hub',
    lumaUrl: '#',
    image: 'https://picsum.photos/seed/sydney-vibrant/600/400',
    type: 'upcoming'
  },
  {
    id: '2',
    title: 'Melbourne Builders Workshop',
    date: 'May 12, 2026',
    location: 'Stone & Chalk Melbourne',
    lumaUrl: '#',
    image: 'https://picsum.photos/seed/melbourne-vibrant/600/400',
    type: 'upcoming'
  },
  {
    id: '3',
    title: 'Brisbane Web3 Night',
    date: 'June 05, 2026',
    location: 'The Precinct, Brisbane',
    lumaUrl: '#',
    image: 'https://picsum.photos/seed/brisbane-vibrant/600/400',
    type: 'upcoming'
  }
];

export function EventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = 'events';
    const unsubscribe = onSnapshot(collection(db, path), 
      (snapshot) => {
        const eventsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Event[];
        
        setEvents(eventsData.length > 0 ? eventsData : MOCK_EVENTS);
        setLoading(false);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, path);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <section id="events" className="px-6 mb-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase">03 / EVENTS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">Upcoming Events</h2>
          </div>
          <Button variant="outline" className="rounded-full px-8 h-12 border-white/10 hover:bg-white/5 font-bold">
            View on Luma <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id}>
              <GlassCard className="p-0 overflow-hidden group border-black/5">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/80 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.2em] border border-black/5">
                      LUMA EVENT
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-black group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-primary">
                        <Calendar size={14} />
                      </div>
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-primary">
                        <MapPin size={14} />
                      </div>
                      {event.location}
                    </div>
                  </div>
                  <a href={event.lumaUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full rounded-2xl bg-black/5 hover:bg-primary hover:text-primary-foreground border border-black/5 transition-all duration-500 h-12 font-bold">
                      Register Now
                    </Button>
                  </a>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
