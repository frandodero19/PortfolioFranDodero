import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, GraduationCap, MapPin, Mail, Linkedin, Phone, Sun, Moon, Briefcase, Layout } from 'lucide-react';
import React from 'react';
import SkillsSection from './components/SkillsSection'; // Asegúrate de que la ruta sea correcta
import InteractiveAvatar from './components/InteractiveAvatar'; // Ajusta la ruta si es necesario

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; link?: string }> = ({ icon, text, link }) => {
  return (
    <a href={link} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
      {icon}
      <span>{text}</span>
    </a>
  );
};

const EducationCard: React.FC<{ degree: string; institution: string; period: string; image: string; description: string }> = ({ degree, institution, period, image, description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
      <img src={image} alt={degree} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold">{degree}</h3>
      <p className="text-gray-700 dark:text-gray-300">{institution}</p>
      <p className="text-gray-500 dark:text-gray-400">{period}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const ExperienceCard: React.FC<{ jobTitle: string; company: string; period: string; description: string }> = ({ jobTitle, company, period, description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h3 className="text-xl font-bold">{jobTitle}</h3>
      <p className="text-gray-700 dark:text-gray-300">{company}</p>
      <p className="text-gray-500 dark:text-gray-400">{period}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Proyectos</h3>
      <div className="space-y-4">
        {/* Aquí puedes agregar tus proyectos */}
        <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
          <h4 className="text-lg font-semibold">Portfolio personal</h4>
          <p className="text-gray-700 dark:text-gray-300">Desarrollé un portafolio personal interactivo utilizando tecnologías modernas como React, Tailwind CSS y Framer Motion. El proyecto incluye una presentación visualmente atractiva de mis habilidades, educación y experiencia profesional. Implementé características interactivas, como efectos de neón y modo oscuro, para mejorar la experiencia del usuario. El portafolio está optimizado para dispositivos móviles y cuenta con un formulario de contacto funcional integrado con Formspree para la recepción de mensajes.</p>
          <a href="#" className="text-blue-500 dark:text-blue-300 hover:underline">Ver proyecto</a>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
          <h4 className="text-lg font-semibold">Proyecto 2</h4>
          <p className="text-gray-700 dark:text-gray-300">Descripción del proyecto 2.</p>
          <a href="#" className="text-blue-500 dark:text-blue-300 hover:underline">Ver proyecto</a>
        </div>
      </div>
    </section>
  );
};

const NeonEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-50 blur-lg" />
  );
};

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
    controls.start(i => (({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })));
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
      <nav className="w-full sm:w-64 bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-lg">
        <div className="mb-8 text-center">
          <img
            src="/Foto perfil.png"
            alt="Fran Dodero"
            className="w-56 h-125 object-cover rounded-full border-4 border-purple-500 dark:border-purple-400 shadow-xl mx-auto mb-4"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">Fran Dodero</h1>
          <h2 className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Desarrollador de Aplicaciones Web</h2>
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
                <span className="ml-2 text-sm sm:text-base">{section.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 dark:from-purple-900 dark:to-indigo-900" />
        <NeonEffect />
        <div className="relative z-10 max-w-full sm:max-w-4xl mx-auto px-4 py-8">
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
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Sobre mí</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Soy un apasionado de la informática y el desarrollo web, actualmente cursando el Grado Superior en Desarrollo de Aplicaciones Web (DAW). Desde muy joven, la tecnología ha sido mi mayor interés, lo que me ha llevado a explorar y dominar áreas como el diseño de páginas web, la programación y la gestión de bases de datos. Siempre busco nuevos desafíos que me permitan mejorar mis habilidades y aprender algo nuevo cada día.
                </p>
                <div className="grid grid-cols-1 gap-4 text-sm">
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
              <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Educación</h3>
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
                  description="Certificación de nivel B2 en inglés que valida competencias avanzadas en comunicación escrita y oral. Desarrollo de habilidades para interactuar en entornos profesionales y académicos internacionales, con una comprensión sólida de la gramática, el vocabulario y la pronunciación. Capacidad para redactar informes, participar en discusiones y comprender textos complejos."
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
              <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Habilidades</h3>
              <SkillsSection />
            </motion.section>
          )}

          {activeSection === 'experience' && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Experiencia</h3>
              <ExperienceCard
                jobTitle="Administrador de Base de Datos"
                company="Taller Lara"
                period="2022-Actualidad"
                description="Gestión y administración de bases de datos críticas para el funcionamiento del taller. Implementación de medidas de seguridad para proteger la integridad y privacidad de los datos, así como la optimización de consultas SQL para mejorar la eficiencia en el manejo de inventarios y pedidos. Provisión de soporte técnico y generación de informes para la toma de decisiones estratégicas."
              />
              <ExperienceCard
                jobTitle="Store Manager |Encargado|"
                company="Burger King"
                period="2019-Actualidad"
                description="Como Encargado de Tienda en Burger King, superviso las operaciones diarias del restaurante y garantizo un alto estándar de servicio al cliente. Mi rol incluye gestionar todos los aspectos operativos de la tienda, como la administración de inventarios, la programación del personal y el cumplimiento de las políticas de la empresa para asegurar un funcionamiento fluido.

Me enfoco en ofrecer un servicio excepcional al cliente, formando y supervisando al personal, resolviendo consultas y manteniendo un entorno limpio y acogedor. Además, dirijo y motivo a mi equipo para alcanzar objetivos de rendimiento, manteniendo altos estándares de trabajo y una cultura laboral positiva.

Monitoreo el rendimiento de las ventas e implemento estrategias para aumentar la rentabilidad y mejorar el rendimiento general de la tienda. Proporciono oportunidades de formación y desarrollo para el personal, asegurando el cumplimiento de los estándares operativos y apoyando su crecimiento profesional. También garantizo el cumplimiento de las normativas de salud y seguridad para mantener un entorno seguro para clientes y empleados. Utilizo mis habilidades de liderazgo, organización y resolución de problemas para optimizar las operaciones de la tienda y fomentar el éxito empresarial."
              />
              <ExperienceCard
                jobTitle="Maestro de Educación Primaria"
                company="Colegio SAFA Villoslada"
                period="2018-2019"
                description="Durante mis prácticas como maestro de educación primaria, he adquirido y perfeccionado habilidades clave para una enseñanza efectiva y el desarrollo integral de los estudiantes. He diseñado y estructurado planes de clase detallados que se alinean con el currículo educativo, estableciendo objetivos claros y seleccionando materiales adecuados para actividades didácticas. Además, he demostrado habilidad en la gestión del aula, creando un ambiente de aprendizaje positivo y organizado mediante estrategias de manejo del comportamiento y la adaptación del entorno físico.

Mi capacidad para aplicar métodos de enseñanza diferenciados me ha permitido atender a la diversidad de estilos de aprendizaje y niveles de habilidad de los estudiantes, adaptando estrategias pedagógicas y recursos según sus necesidades individuales y grupales. También he adquirido experiencia en la evaluación del progreso estudiantil a través de diversas herramientas, proporcionando retroalimentación constructiva para fortalecer sus competencias."
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
              <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400"></h3>
              <ProjectsSection />
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Contacta conmigo</h3>
              <form
                action="https://formspree.io/f/mnnayeew" // Cambia esta URL a la tuya
                method="POST"
                className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300"
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
