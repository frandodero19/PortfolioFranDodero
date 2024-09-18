import React from 'react';
import { motion } from 'framer-motion';

// Define el tipo Skill
interface Skill {
  name: string;
  icon: string; // Cambia esto si usas un componente de ícono en lugar de una cadena
  level: number;
}

// Define el tipo para las props de SkillCard
interface SkillCardProps {
  skill: Skill;
}

// Datos de habilidades con tipo Skill
const skills: Skill[] = [
  { name: 'JavaScript', icon: '🟨', level: 90 },
  { name: 'React', icon: '🔵', level: 60 },
  { name: 'Node.js', icon: '🟢', level: 50 },
  { name: 'CSS', icon: '🔵', level: 70 },
  { name: 'Java', icon: '🟨', level: 75 },
  { name: 'MySQL', icon: '🔵', level: 65 },
  { name: 'Sony Vegas Pro', icon: '🟢', level: 80 },
  { name: 'Adobe After Effects', icon: '🔵', level: 65 },
];

// Animaciones
const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Componente para cada habilidad
const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <motion.div
    className="skill-card bg-gray-800 text-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
    variants={skillCardVariants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="icon text-4xl mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {skill.icon}
    </motion.div>
    <motion.h4
      className="text-xl font-semibold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {skill.name}
    </motion.h4>
    <motion.div
      className="progress-bar mt-2"
      initial={{ width: 0 }}
      animate={{ width: `${skill.level}%` }}
      transition={{ duration: 1 }}
    >
      <div className="bg-green-500 h-2.5 rounded-full" />
    </motion.div>
  </motion.div>
);

// Componente principal
const SkillsSection: React.FC = () => (
  <section className="skills-section py-12 px-4 bg-gray-900 text-white">
    <motion.div
      className="text-center mb-8"
      initial="hidden"
      animate="visible"
      variants={typewriterVariants}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4"></h2>
      <p className="text-lg">
        <motion.span
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Soy un apasionado programador con experiencia en diversas tecnologías. Aquí están algunas de mis principales habilidades:
        </motion.span>
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </section>
);

export default SkillsSection;
