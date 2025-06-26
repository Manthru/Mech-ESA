'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

export function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: 'Rahul Sharma',
      position: 'Senior Software Engineer',
      company: 'Microsoft',
      year: '2020',
      story: 'MechEsa Club provided me with incredible opportunities to develop leadership skills and technical expertise. The projects and events shaped my career trajectory.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      id: 2,
      name: 'Priya Patel',
      position: 'Mechanical Design Engineer',
      company: 'Tesla',
      year: '2021',
      story: 'The collaborative environment at MechEsa helped me discover my passion for automotive engineering. Now I\'m working on cutting-edge electric vehicle technology.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    {
      id: 3,
      name: 'Arjun Menon',
      position: 'Aerospace Engineer',
      company: 'ISRO',
      year: '2019',
      story: 'Participating in MechEsa\'s rocket design competition ignited my passion for aerospace. Today, I\'m contributing to India\'s space missions.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our alumni who have made their mark in the engineering world 
            and continue to inspire current students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{story.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{story.position}</p>
                      <p className="text-xs text-gray-500">{story.company}</p>
                    </div>
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-blue-300 absolute -top-2 -left-2" />
                    <p className="text-gray-600 italic pl-6 leading-relaxed">
                      "{story.story}"
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      Class of {story.year}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}