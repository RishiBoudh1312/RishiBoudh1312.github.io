import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const SocialButtons = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-600',
    },
    {
      name: 'Email',
      icon: <MdEmail className="w-6 h-6" />,
      url: 'mailto:rishiboudh32@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <div className="flex gap-4 justify-center items-center">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 transition-colors duration-300 ${social.color}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialButtons; 