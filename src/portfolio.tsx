import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, GraduationCap, MapPin, Mail, Linkedin, Phone, Sun, Moon, BookOpen, Briefcase, Layout, Send } from 'lucide-react';
import React from 'react';
import SkillsSection from './components/SkillsSection'; // Asegúrate de que la ruta sea correcta

import InteractiveAvatar from './components/InteractiveAvatar'; // Ajusta la ruta si es necesario

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
    <div className="flex min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 dark:from-purple-900 dark:to-indigo-900 text-gray-900 dark:text-white transition-colors duration-300">
      <nav className="w-64 bg-white dark:bg-gray-800 p-6 shadow-lg">
        <div className="mb-8">
          <img
            src="/Foto perfil.png"
            alt="Fran Dodero"
            style={{
              width: '220px',
              height: '320px',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
            className="border-4 border-purple-500 dark:border-purple-400 shadow-xl mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400">Fran Dodero</h1>
          <h2 className="text-sm text-center text-gray-600 dark:text-gray-400">Desarrollador de Aplicaciones Web</h2>
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
                <SkillBar skill="Sony Vegas Pro" level={75} />
                <SkillBar skill="Adobe Photoshop" level={60} />
                <SkillBar skill="Adobe Illustrator" level={55} />
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
                title="Administrador de Base de Datos"
                company="Taller Lara"
                period="2022 - Actualidad"
                description="Responsable de la gestión y mantenimiento de las bases de datos del taller, optimización de procesos de gestión de inventarios y pedidos, implementación de medidas de seguridad y soporte técnico."
              />
              <ExperienceCard
                title="Store Manager |Encargado|"
                company="Burger King"
                period="2019 - Actualidad"
                description="Como Encargado de Tienda en Burger King, superviso las operaciones diarias del restaurante y garantizo un alto estándar de servicio al cliente. Mi rol incluye gestionar todos los aspectos operativos de la tienda, como la administración de inventarios, la programación del personal y el cumplimiento de las políticas de la empresa para asegurar un funcionamiento fluido.

Me enfoco en ofrecer un servicio excepcional al cliente, formando y supervisando al personal, resolviendo consultas y manteniendo un entorno limpio y acogedor. Además, dirijo y motivo a mi equipo para alcanzar objetivos de rendimiento, manteniendo altos estándares de trabajo y una cultura laboral positiva.

Monitoreo el rendimiento de las ventas e implemento estrategias para aumentar la rentabilidad y mejorar el rendimiento general de la tienda. Proporciono oportunidades de formación y desarrollo para el personal, asegurando el cumplimiento de los estándares operativos y apoyando su crecimiento profesional. También garantizo el cumplimiento de las normativas de salud y seguridad para mantener un entorno seguro para clientes y empleados. Utilizo mis habilidades de liderazgo, organización y resolución de problemas para optimizar las operaciones de la tienda y fomentar el éxito empresarial."
              />
              <ExperienceCard
                title="Maestro de Educación Primaria"
                company="Colegio SAFA"
                period="2018 - 2019"
                description="Durante mis prácticas como maestro de educación primaria, he desarrollado habilidades clave para una enseñanza efectiva y el desarrollo integral de los estudiantes. Estas incluyen el diseño y planificación de clases, creando planes detallados que se alinean con el currículo y responden a las necesidades de los estudiantes, seleccionando materiales adecuados y planificando actividades didácticas.

En la gestión del aula, establezco y mantengo un ambiente de aprendizaje positivo, implementando estrategias de manejo del comportamiento, promoviendo respeto y colaboración, y adaptando el entorno físico para maximizar el aprendizaje.

Utilizo métodos de enseñanza diferenciados para atender a la diversidad de estilos de aprendizaje y niveles de habilidad, adaptando estrategias pedagógicas y recursos para satisfacer las necesidades individuales y grupales."
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
              <ProjectCard
                title="Portfolio Personal"
                description="Desarrollo de un portafolio personal con React, utilizando Tailwind CSS para los estilos y Framer Motion para las animaciones. Incluye secciones de educación, habilidades, experiencia y proyectos, así como un formulario de contacto."
                link="#"
              />
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
              <form
                action="https://formspree.io/f/xayjodow"
                method="POST"
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
              >
                <label className="block mb-4">
                  <span className="text-gray-700 dark:text-gray-300">Nombre</span>
                  <input
                    type="text"
                    name="name"
                    className="form-input mt-1 block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:ring-purple-500 dark:focus:ring-purple-400"
                    required
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700 dark:text-gray-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    className="form-input mt-1 block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:ring-purple-500 dark:focus:ring-purple-400"
                    required
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700 dark:text-gray-300">Mensaje</span>
                  <textarea
                    name="message"
                    rows={4}
                    className="form-textarea mt-1 block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:ring-purple-500 dark:focus:ring-purple-400"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-purple-600 dark:bg-purple-500 text-white rounded-md shadow-sm hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors duration-300"
                >
                  Enviar
                </button>
              </form>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
}

function NeonEffect() {
  return (
    <svg
      className="absolute inset-0 z-0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      style={{ filter: 'url(#neon-effect)' }}
    >
      <defs>
        <filter id="neon-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feFlood floodColor="#00cfff" result="color" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="0" cy="50" r="40" fill="transparent" stroke="#00f9ff" strokeWidth="1" />
    </svg>
  );
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode, text: string, link?: string }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      {link ? (
        <a
          href={link}
          className="text-blue-500 dark:text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

function EducationCard({ degree, institution, period, image, description }: { degree: string, institution: string, period: string, image: string, description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={institution} className="w-12 h-12 object-contain" />
        <div className="ml-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{degree}</h4>
          <p className="text-gray-600 dark:text-gray-400">{institution}</p>
          <p className="text-gray-500 dark:text-gray-500">{period}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

function SkillBar({ skill, level }: { skill: string, level: number }) {
  return (
    <div className="flex items-center space-x-4">
    <span className="w-32 text-gray-800 dark:text-gray-200">{skill}</span>
    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div
        className="absolute top-0 left-0 bg-purple-600 dark:bg-purple-400 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      />
      <span className="absolute right-0 top-0 text-xs font-semibold text-white dark:text-white px-2">
        {level}%
      </span>
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, description }: { title: string, company: string, period: string, description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400">{company}</p>
      <p className="text-gray-500 dark:text-gray-500">{period}</p>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <a
        href={link}
        className="text-purple-600 dark:text-purple-400 hover:underline mt-2 block"
      >
        Ver proyecto
      </a>
    </div>
  );
}
