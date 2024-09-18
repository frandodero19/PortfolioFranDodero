import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, GraduationCap, MapPin, Mail, Linkedin, Phone, Sun, Moon, Briefcase, Layout } from 'lucide-react';
import InteractiveAvatar from './components/InteractiveAvatar'; // Asegúrate de que la ruta sea correcta
import React from 'react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const controls = useAnimation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  const sections = [
    { id: 'about', title: 'Sobre mí', icon: <MapPin size={20} /> },
    { id: 'education', title: 'Educación', icon: <GraduationCap size={20} /> },
    { id: 'skills', title: 'Habilidades', icon: <Code size={20} /> },
    { id: 'experience', title: 'Experiencia', icon: <Briefcase size={20} /> },
    { id: 'projects', title: 'Proyectos', icon: <Layout size={20} /> },
    { id: 'contact', title: 'Contacta conmigo', icon: <Mail size={20} /> },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 dark:from-purple-900 dark:to-indigo-900 text-gray-900 dark:text-white transition-colors duration-300">
      <nav className="w-full md:w-64 bg-white dark:bg-gray-800 p-6 shadow-lg">
        <div className="mb-8 text-center">
          <img
            src="/Foto perfil.png"
            alt="Fran Dodero"
            className="w-40 h-40 object-cover rounded-full border-4 border-purple-500 dark:border-purple-400 shadow-xl mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Fran Dodero</h1>
          <h2 className="text-sm text-gray-600 dark:text-gray-400">Desarrollador de Aplicaciones Web</h2>
        </div>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center p-2 rounded-lg transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-purple-500 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {section.icon}
                <span className="ml-2">{section.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 dark:from-purple-900 dark:to-indigo-900" />
        <NeonEffect />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
          <motion.button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </motion.button>

          {activeSection === 'about' && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Sobre mí</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Soy un apasionado de la informática y el desarrollo web, actualmente cursando el Grado Superior en Desarrollo de Aplicaciones Web (DAW). Desde muy joven, la tecnología ha sido mi mayor interés, lo que me ha llevado a explorar y dominar áreas como el diseño de páginas web, la programación y la gestión de bases de datos. Siempre busco nuevos desafíos que me permitan mejorar mis habilidades y aprender algo nuevo cada día.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <ContactItem icon={<MapPin size={16} />} text="Cádiz, España" />
                  <ContactItem
                    icon={<Mail size={16} />}
                    text="frandodero19@gmail.com"
                    link="mailto:frandodero19@gmail.com"
                  />
                  <ContactItem
                    icon={<Linkedin size={16} />}
                    text="www.linkedin.com/in/frandodero"
                    link="https://www.linkedin.com/in/frandodero"
                  />
                  <ContactItem icon={<Phone size={16} />} text="+34-689 97 91 42" />
                </div>
                <div className="flex justify-center mb-6">
                  <InteractiveAvatar />
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'education' && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Educación</h3>
              <div className="space-y-8">
                <EducationCard 
                  degree="Grado Superior en Desarrollo de Aplicaciones Web"
                  institution="iFP (Innovación en Formación Profesional)"
                  period="2023 - Actualidad"
                  image="/logo-ifp.png"
                  description="Formación avanzada en el desarrollo de aplicaciones web, con un enfoque en tecnologías emergentes y prácticas de la industria. Experiencia en el diseño y la implementación de interfaces de usuario responsivas, así como en la integración de back-end y bases de datos. Competencia en el uso de herramientas modernas como React, Node.js, y soluciones en la nube."
                />
                <EducationCard 
                  degree="Grado en Magisterio de Educación Primaria"
                  institution="Universidad de Cádiz"
                  period="2015 - 2019"
                  image="/uca-logo.png"
                  description="Preparación integral en metodologías pedagógicas y gestión educativa. Desarrollo de habilidades para la planificación y ejecución de estrategias didácticas, adaptación del contenido a las necesidades de los estudiantes y creación de entornos de aprendizaje inclusivos y efectivos. Experiencia en el uso de tecnologías educativas para mejorar la enseñanza."
                />
                <EducationCard 
                  degree="Certificado de Inglés B2"
                  institution="British Council"
                  period="Finalizado"
                  image="/britishcouncil-logo.png"
                  description="Certificación de nivel B2 en inglés que valida competencias avanzadas en comunicación escrita y oral. Desarrollo de habilidades para interactuar en entornos profesionales y académicos internacionales, con una comprensión sólida de la gramática, el vocabulario y la pronunciación. Capacidad para redactar informes, participar en reuniones y comprender textos complejos."
                />
              </div>
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Habilidades</h3>
              <div className="space-y-6">
                <SkillBar skill="JavaScript" level={70} />
                <SkillBar skill="React" level={65} />
                <SkillBar skill="Node.js" level={60} />
                <SkillBar skill="Java" level={70} />
                <SkillBar skill="MySQL" level={70} />
                <SkillBar skill="MongoDB" level={55} />
                <SkillBar skill="Git" level={75} />
                <SkillBar skill="HTML & CSS" level={80} />
              </div>
              <div className="flex justify-center mt-8">
                <InteractiveAvatar />
              </div>
            </motion.section>
          )}

          {activeSection === 'experience' && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Experiencia</h3>
              <ExperienceCard
                role="Administrador de Base de Datos"
                company="Taller Lara"
                period="Actualidad"
                description="Gestiono y administro las bases de datos, garantizando la integridad, seguridad y disponibilidad de la información crítica. Desarrollo consultas SQL optimizadas, implemento protocolos de seguridad, proporciono soporte técnico y genero informes para la toma de decisiones estratégicas."
              />
            </motion.section>
          )}

          {activeSection === 'projects' && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Proyectos</h3>
              {/* Añade aquí la información de tus proyectos */}
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Contacta conmigo</h3>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <form
                  action="https://formspree.io/f/{your-form-id}" // Cambia esto a tu endpoint de Formspree
                  method="POST"
                  className="space-y-6"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full p-3 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600 transition-colors duration-200"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode; text: string; link?: string }) {
  return (
    <div className="flex items-center">
      <div className="mr-2 text-gray-600 dark:text-gray-400">{icon}</div>
      {link ? (
        <a href={link} className="text-blue-500 dark:text-blue-400 hover:underline">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

function EducationCard({ degree, institution, period, image, description }: { degree: string; institution: string; period: string; image: string; description: string }) {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <img src={image} alt={institution} className="w-16 h-16 mr-4 object-cover" />
      <div>
        <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400">{degree}</h4>
        <p className="text-gray-600 dark:text-gray-400">{institution}</p>
        <p className="text-gray-500 dark:text-gray-500">{period}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="w-full">
      <h4 className="text-lg font-semibold mb-2">{skill}</h4>
      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-purple-500 dark:bg-purple-400 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function ExperienceCard({ role, company, period, description }: { role: string; company: string; period: string; description: string }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400">{role}</h4>
      <p className="text-gray-600 dark:text-gray-400">{company}</p>
      <p className="text-gray-500 dark:text-gray-500">{period}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

function NeonEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Aquí puedes añadir el efecto neón o cualquier otro efecto visual */}
    </div>
  );
}
