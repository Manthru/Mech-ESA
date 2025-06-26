'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

export function FeaturedEvents() {
  const events = [
    {
      id: 1,
      title: 'MechFest 2024',
      description: 'Annual technical festival featuring competitions, workshops, and exhibitions.',
      date: 'March 15-17, 2024',
      location: 'IIT Indore Campus',
      attendees: 1000,
      category: 'Festival',
      featured: true,
    },
    {
      id: 2,
      title: 'Industry Expert Lecture',
      description: 'Renowned industry expert sharing insights on future of mechanical engineering.',
      date: 'February 28, 2024',
      location: 'Lecture Hall 1',
      attendees: 200,
      category: 'Seminar',
      featured: false,
    },
    {
      id: 3,
      title: 'CAD Workshop',
      description: 'Hands-on workshop on advanced CAD software and design principles.',
      date: 'March 5, 2024',
      location: 'CAD Lab',
      attendees: 50,
      category: 'Workshop',
      featured: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting events, workshops, and activities designed to enhance 
            your engineering journey and connect with like-minded peers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                event.featured ? 'border-2 border-gradient-to-r from-blue-500 to-purple-600' : ''
              }`}>
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg">
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white text-gray-800">
                      {event.category}
                    </Badge>
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
            asChild
          >
            <Link href="/events">
              View All Events
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}