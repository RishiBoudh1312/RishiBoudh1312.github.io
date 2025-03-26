'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { FiSun, FiMoon, FiDownload, FiArrowDown } from 'react-icons/fi';
import SocialButtons from '../components/SocialButtons';
import AnimatedBackground from '../components/AnimatedBackground';
import SkillsSection from '../components/SkillsSection';
import ThreeBackground from '../components/ThreeBackground';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen relative">
      <ThreeBackground />
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding relative">
        {/* Animated Border */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 border-4 border-transparent rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl animate-gradient-x" />
          </div>
          <div className="absolute inset-0 border-4 border-transparent rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-3xl animate-gradient-y" />
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center relative z-10"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-32 h-32 mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-gradient-x"></div>
              <div className="absolute inset-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-gradient-y"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                <img
                  src="/images/Profile.jpg"
                  alt="Rishi Boudh"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              Rishi Boudh
            </motion.h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Building beautiful web experiences with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </motion.a>
          </div>

          <div className="mt-8">
            <SocialButtons />
          </div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiArrowDown size={24} />
          </motion.button>
        </motion.div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* About Section */}
      <section className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-white">Indian Institute of Technology, Mandi</h4>
                    <p className="text-gray-600 dark:text-gray-300">Bachelors in Mechanical Engineering (2022-2026)</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 dark:text-gray-300">📱</span>
                    <span className="text-gray-800 dark:text-white">+91 931072137</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 dark:text-gray-300">✉️</span>
                    <span className="text-gray-800 dark:text-white">rishiboudh32@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 dark:text-gray-300">🎓</span>
                    <span className="text-gray-800 dark:text-white">Third year Undergraduate, Mechanical Engineering, IIT Mandi</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* MediWare Project */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">MediWare</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Medical Inventory Management System</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Full-stack development using Node.js, Express.js, and PostgreSQL</li>
                  <li>• Real-time tracking of critical medical supplies</li>
                  <li>• Secure database operations and automated stock management</li>
                  <li>• Enhanced medical supply chain efficiency</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Express.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
              </motion.div>

              {/* Path Memorising Robot */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Path Memorising Robot</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Autonomous Navigation System</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Path memorization and autonomous route repetition</li>
                  <li>• Obstacle avoidance system</li>
                  <li>• Remote data transmission and reception</li>
                  <li>• Battery/electrical power operation</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    NodeMCU
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Solidworks
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Sensors
                  </span>
                </div>
              </motion.div>

              {/* Telegram Bot */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Asynchronous TelegramBot</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Built with aiogram for asynchronous functionality</li>
                  <li>• Secure token management with dotenv</li>
                  <li>• Real-time message handling and command processing</li>
                  <li>• Efficient polling mechanisms</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    aiogram
                  </span>
                </div>
              </motion.div>

              {/* License Plate Recognition */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">License Plate Recognition</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Haar Cascade Classifier implementation</li>
                  <li>• OpenCV for real-time image processing</li>
                  <li>• Pre-trained XML model integration</li>
                  <li>• Multi-stage classification system</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    OpenCV
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Python
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">VIBGYOR Event</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Secured 3rd position in VIBGYOR Event organized by ARTGEEK Club, IIT Mandi</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Designed and presented an artwork demonstrating creativity and innovation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">FrostHack 2024</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Secured 7th position in FrostHack (2024) IIT MANDI, Annual Hackathon</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Created an application that allows patients to get diagnosis and medical assistance</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Positions of Responsibility
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🎨</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Artgeeks Club</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Core Member</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🎭</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Event Volunteering</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Exodia (Planning & Management and Hospitality Team)</li>
                  <li>• Xpecto (Publicity Team)</li>
                  <li>• Miraz (Media Team)</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 