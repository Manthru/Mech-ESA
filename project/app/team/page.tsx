'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';
import { teamData } from '@/data/team';

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who make MechEsa Club a thriving 
              community of mechanical engineering enthusiasts at IIT Indore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">The visionaries leading our club to new heights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.leadership.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      >
                        {member.position}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.department}</p>
                    <p className="text-sm text-gray-500 mb-6 line-clamp-3">{member.bio}</p>
                    <div className="flex justify-center gap-2">
                      <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Team</h2>
            <p className="text-xl text-gray-600">The backbone of our organization</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.core.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">{member.position}</p>
                    <p className="text-xs text-gray-500">{member.department}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Volunteers</h2>
            <p className="text-xl text-gray-600">Our dedicated volunteers who make events possible</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {teamData.volunteers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-sm font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-xs text-gray-500">{member.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}