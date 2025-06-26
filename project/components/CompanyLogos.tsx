'use client';

import { motion } from 'framer-motion';

export function CompanyLogos() {
  const companies = [
    { name: 'Microsoft', logo: '🔷' },
    { name: 'Google', logo: '🔴' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Meta', logo: '🌐' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Uber', logo: '🚗' },
    { name: 'Adobe', logo: '🎨' },
    { name: 'Spotify', logo: '🎵' },
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Companies Visiting Our Campus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading global companies regularly visit IIT Indore for recruitment, 
            offering exciting opportunities to our students.
          </p>
        </motion.div>

        {/* Scrolling Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-in-left">
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-3xl hover:shadow-lg transition-shadow duration-300">
                  {company.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Average package offered: <span className="font-bold text-blue-600">₹15 LPA</span> | 
            Highest package: <span className="font-bold text-purple-600">₹50 LPA</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {companies.slice(0, 5).map((company, index) => (
              <motion.span
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
              >
                {company.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}