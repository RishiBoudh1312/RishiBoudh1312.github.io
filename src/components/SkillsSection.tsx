import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, 
  FaPython, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiCplusplus, SiFortran, 
  SiJavascript, SiMysql, SiPostgresql 
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
  { name: 'React.js', icon: <FaReact />, color: 'text-blue-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
  { name: 'Python', icon: <FaPython />, color: 'text-blue-600' },
  { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-700' },
  { name: 'Fortran', icon: <SiFortran />, color: 'text-white' },
  { name: 'GitHub', icon: <FaGitAlt />, color: 'text-gray-800 dark:text-white' },
  { name: 'SQL', icon: <FaDatabase />, color: 'text-blue-500' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const SkillsSection = () => {
  return (
    <section className="py-20 bg-light/50 dark:bg-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of technologies and programming languages I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`text-4xl mb-4 ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 