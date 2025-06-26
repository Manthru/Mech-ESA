'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Award, GraduationCap } from 'lucide-react';

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: 500,
      label: 'Active Members',
      suffix: '+',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: 50,
      label: 'Events Organized',
      suffix: '+',
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: 100,
      label: 'Achievements',
      suffix: '+',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: 200,
      label: 'Alumni Network',
      suffix: '+',
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and community building
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {inView ? stat.number : 0}{stat.suffix}
                    </h3>
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}