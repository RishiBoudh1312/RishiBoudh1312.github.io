import { motion } from 'framer-motion';
import { FaCode, FaTerminal, FaServer, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    setPositions(
      Array(8).fill(null).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    );
  }, []);

  const icons = [
    { icon: <FaReact />, delay: 0, color: 'text-gray-400' },
    { icon: <FaNodeJs />, delay: 0.2, color: 'text-gray-400' },
    { icon: <SiTypescript />, delay: 0.4, color: 'text-gray-400' },
    { icon: <SiJavascript />, delay: 0.6, color: 'text-gray-400' },
    { icon: <SiTailwindcss />, delay: 0.8, color: 'text-gray-400' },
    { icon: <FaGitAlt />, delay: 1, color: 'text-gray-400' },
    { icon: <FaDocker />, delay: 1.2, color: 'text-gray-400' },
    { icon: <SiMongodb />, delay: 1.4, color: 'text-gray-400' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Animated Icons */}
      <div className="absolute inset-0">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-10`}
            initial={{
              opacity: 0,
              scale: 0,
              x: positions[index]?.x || 0,
              y: positions[index]?.y || 0,
              rotate: 0,
            }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0, 1.2, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Code Lines Animation */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent"
            initial={{
              opacity: 0,
              width: 0,
              x: positions[index]?.x || 0,
              y: positions[index]?.y || 0,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              width: [0, 150, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Matrix-like Rain Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"
            initial={{
              opacity: 0,
              height: 0,
              x: (index * 50) % (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -20,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              height: [0, 100, 0],
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')]" />
    </div>
  );
};

export default AnimatedBackground; 