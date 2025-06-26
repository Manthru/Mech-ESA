'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cog, Users, Target, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Fostering creative thinking and innovative solutions in mechanical engineering.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Building strong networks and collaborative relationships within the engineering community.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Striving for the highest standards in academic and professional pursuits.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Achievement',
      description: 'Celebrating and recognizing outstanding accomplishments of our members.',
    },
  ];

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
              About MechEsa Club
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The premier mechanical engineering student association at IIT Indore, 
              dedicated to fostering innovation, collaboration, and excellence in 
              mechanical engineering education and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To create a vibrant community of mechanical engineering students 
                    that promotes academic excellence, professional development, and 
                    innovative thinking. We strive to bridge the gap between theoretical 
                    knowledge and practical application through hands-on projects, 
                    industry interactions, and collaborative learning experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the leading student organization that shapes the future 
                    of mechanical engineering by nurturing talent, fostering innovation, 
                    and creating lasting impact in the field. We envision a community 
                    where every member achieves their full potential and contributes 
                    meaningfully to society through engineering excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our actions and shape our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Founded with the vision of creating a dynamic community for mechanical 
                    engineering students at IIT Indore, MechEsa Club has grown from a small 
                    group of passionate students to a thriving organization that serves as 
                    the backbone of mechanical engineering activities on campus.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Over the years, we have organized numerous technical events, workshops, 
                    industrial visits, and competitions that have helped thousands of students 
                    develop their skills and advance their careers. Our alumni network spans 
                    across leading companies and research institutions worldwide.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="text-blue-600">Technical Excellence</Badge>
                    <Badge variant="outline" className="text-purple-600">Innovation</Badge>
                    <Badge variant="outline" className="text-green-600">Community Impact</Badge>
                    <Badge variant="outline" className="text-orange-600">Industry Connect</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}