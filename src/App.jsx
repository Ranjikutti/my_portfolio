import React, { useCallback } from 'react';
// --- ALL PACKAGES ARE HERE ---
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // <-- THIS IS THE FIX for the animation bug
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCertificate, FaFileDownload } from 'react-icons/fa';

// --- Particles Component for the animated background ---
const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "#111827" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#34D399" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.1, width: 1 },
      collisions: { enable: true },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };
  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }} />;
};

// --- Helper Components ---
const SkillPill = ({ skill }) => (
  <motion.div
    className="bg-gray-700 text-white py-2 px-4 rounded-full text-sm font-medium cursor-pointer"
    whileHover={{ scale: 1.1, backgroundColor: '#2dd4bf' }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {skill}
  </motion.div>
);

const ProjectCard = ({ title, description, tech }) => (
  <Tilt options={{ max: 15, scale: 1.05, speed: 500, perspective: 1000, transition: true }}>
    <motion.div
      whileHover={{ boxShadow: '0px 15px 40px rgba(45, 212, 191, 0.4)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg p-6 h-full flex flex-col"
    >
      <div>
        <h3 className="text-xl font-bold text-teal-300 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {tech.map(t => <span key={t} className="bg-teal-900 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
      </div>
    </motion.div>
  </Tilt>
);

const AchievementCard = ({ title, issuer, description }) => (
  <Tilt options={{ max: 15, scale: 1.05, speed: 500, perspective: 1000, transition: true }}>
    <motion.div
      whileHover={{ boxShadow: '0px 15px 40px rgba(45, 212, 191, 0.4)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg p-6 flex items-start gap-4 h-full"
    >
      <div className="text-teal-300 mt-1 flex-shrink-0"><FaCertificate size={24} /></div>
      <div>
        <h3 className="text-xl font-bold text-teal-300 mb-1">{title}</h3>
        <p className="text-gray-400 font-semibold mb-3">{issuer}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

// --- Navigation Component ---
const Navbar = () => (
  <nav className="bg-gray-900/70 backdrop-blur-md sticky top-0 z-50 py-4">
      <div className="max-w-5xl mx-auto flex justify-center sm:justify-between items-center px-4">
          <a href="#home" className="text-xl font-bold text-white hidden sm:block">Ranjith J</a>
          <div className="flex space-x-4 sm:space-x-8 text-sm flex-wrap justify-center">
              <a href="#about" className="text-gray-300 hover:text-teal-300 transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-teal-300 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-teal-300 transition-colors">Projects</a>
              <a href="#achievements" className="text-gray-300 hover:text-teal-300 transition-colors">Achievements</a>
              <a href="#contact" className="text-gray-300 hover:text-teal-300 transition-colors">Contact</a>
          </div>
      </div>
  </nav>
);

// --- Main App Component ---
function App() {
  const portfolioData = {
    name: "Ranjith J",
    profileImage: "profile-photo.jpg",
    resumePath: "ranjith J resume.pdf",
    social: {
      github: "https://github.com/Ranjikutti",
      linkedin: "https://www.linkedin.com/in/ranjith-j-835ab0343",
    },
    contact: {
      email: "ranjikutti790@gmail.com",
      phone: "+91 9042275478",
      address: "Thiruvallur, Tamil Nadu",
    },
    profile: "I'm a B.Tech student at Vel Tech, passionate about building user-friendly web interfaces. With strong experience in HTML, CSS, JavaScript, and React, I've created responsive websites and an Amazon affiliate site using Node.js as the backend. I love learning new technologies and am always curious to improve UI/UX designs. I'm looking for an opportunity to apply my frontend development skills and grow with real-world challenges.",
    skills: ["HTML & CSS", "JavaScript", "React", "Node JS", "Python", "Java", "C++", "Prompt Engineering", "TeamWork", "Problem Solving", "Leadership"],
    projects: [
        { title: "Personal Portfolio Website", description: "A self-introductory portfolio to showcase my skills and projects, built with React and Node.js.", tech: ["React", "Node.js", "CSS"] },
        { title: "AuraLink - AI & IoT Smart Assistive System", description: "Developing an innovative project that integrates AI and IoT to create a smart assistive system.", tech: ["AI", "IoT", "System Design"] },
        { title: "Freelance Web Development", description: "Focused on creating responsive, user-friendly websites for clients, combined with part-time video editing.", tech: ["HTML", "CSS", "JavaScript"] }
    ],
    achievements: [
        { title: "Certificate of Merit in MS Power BI", issuer: "AVNL Institute of Learning, Avadi, Chennai (Ministry of Defence)", description: "Completed a 30-hour value-added program focused on data visualization, analytics, and business intelligence using MS Power BI." },
        { title: "Exceptional Mock Interview Performance", issuer: "GeeksforGeeks Feedback Report", description: "Achieved a top score of 5/5 in Data Structures, Language Proficiency, and Technical Communication, demonstrating strong problem-solving and articulation skills." }
    ],
    education: [
        { degree: "B.Tech, Computer Science & Engineering", school: "Vel Tech Multi Tech, Chennai", duration: "Sep 2023 - Present", details: "Currently Pursuing. CGPA: 7.63" },
        { degree: "Higher Secondary Certificate", school: "VIVEKA MATRIC HR, SEC, SCHOOL, Sivagiri", duration: "May 2022 - April 2023", details: "Passed with 80.00%" }
    ],
    internship: { title: "Artificial Intelligence and Machine Learning Intern", company: "Srishti Innovative Educational Services Techno Park, Trivandrum", description: "Gained hands-on experience in AI and ML concepts, working on practical applications and learning from industry professionals." }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="font-sans leading-normal tracking-wider text-white">
      <ParticlesComponent />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          <header id="home" className="flex items-center justify-center min-h-screen py-20">
            <div className="grid items-center grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left">
              <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h1 className="mb-2 text-5xl font-bold text-white md:text-6xl">{portfolioData.name}</h1>
                <TypeAnimation
                  sequence={[ 'Full Stack Developer', 2000, 'AI & ML Enthusiast', 2000, 'Prompt Engineer', 2000 ]}
                  wrapper="p" speed={50} className="text-2xl text-teal-300 min-h-[3rem]" repeat={Infinity}
                />
                <motion.div
                  className="flex justify-center mt-6 space-x-6 md:justify-start"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } } }}
                  initial="hidden" animate="visible"
                >
                  <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-transform duration-300 hover:text-teal-300 hover:scale-125"><FaGithub size={28} /></motion.a>
                  <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-transform duration-300 hover:text-teal-300 hover:scale-125"><FaLinkedin size={28} /></motion.a>
                  <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 transition-transform duration-300 hover:text-teal-300 hover:scale-125"><FaEnvelope size={28} /></motion.a>
                </motion.div>
                <motion.a
                  href={portfolioData.resumePath}
                  download="Ranjith_J_Resume.pdf" // <-- THIS MAKES THE FILE DOWNLOADABLE
                  className="inline-flex items-center gap-3 px-6 py-3 mt-8 font-bold text-white transition-all duration-300 bg-teal-600 rounded-lg shadow-lg shadow-teal-600/30 hover:bg-teal-700 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <FaFileDownload /> Download Resume
                </motion.a>
              </motion.div>
              <motion.div className="flex justify-center" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.4 }}>
                <img src={portfolioData.profileImage} alt="Ranjith J" className="object-cover w-64 h-64 border-4 rounded-full shadow-2xl shadow-teal-500/20 border-teal-400/50 md:w-80 md:h-80" />
              </motion.div>
            </div>
          </header>
          
          <main className="space-y-24">
            <motion.section id="about" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <h2 className="pb-2 mb-8 text-3xl font-bold text-center border-b-2 border-teal-400">About Me</h2>
              <p className="max-w-3xl mx-auto text-lg text-center text-gray-300">{portfolioData.profile}</p>
            </motion.section>

            <motion.section id="skills" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <h2 className="pb-2 mb-8 text-3xl font-bold text-center border-b-2 border-teal-400">My Skills</h2>
              <div className="flex flex-wrap justify-center max-w-3xl gap-4 mx-auto">
                {portfolioData.skills.map(skill => <SkillPill key={skill} skill={skill} />)}
              </div>
            </motion.section>

            <motion.section id="projects" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h2 className="pb-2 mb-8 text-3xl font-bold text-center border-b-2 border-teal-400">Projects</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {portfolioData.projects.map(project => <ProjectCard key={project.title} {...project} />)}
              </div>
            </motion.section>

            <motion.section id="achievements" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h2 className="pb-2 mb-8 text-3xl font-bold text-center border-b-2 border-teal-400">Achievements</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {portfolioData.achievements.map(ach => <AchievementCard key={ach.title} {...ach} />)}
              </div>
            </motion.section>

            <motion.section id="education" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <h2 className="pb-2 mb-8 text-3xl font-bold text-center border-b-2 border-teal-400">Education & Experience</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-6">
                      {portfolioData.education.map(edu => (
                          <div key={edu.school} className="p-4 rounded-lg shadow-md bg-gray-800/60"><h3 className="text-lg font-bold text-teal-300">{edu.degree}</h3><p className="font-semibold text-gray-400">{edu.school}</p><p className="text-sm text-gray-500">{edu.duration}</p><p className="mt-1 text-gray-400">{edu.details}</p></div>
                      ))}
                  </div>
                  <div className="flex flex-col justify-center p-6 rounded-lg shadow-lg bg-gray-800/60">
                      <h3 className="text-xl font-bold text-teal-300">{portfolioData.internship.title}</h3><p className="mb-2 font-semibold text-gray-400">{portfolioData.internship.company}</p><p className="text-gray-400">{portfolioData.internship.description}</p>
                  </div>
              </div>
            </motion.section>
            
            <motion.section id="contact" className="text-center" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
             <h2 className="pb-2 mb-8 text-3xl font-bold text-center border-b-2 border-teal-400">Get In Touch</h2>
             <p className="mb-6 text-lg text-gray-300">I'm currently looking for new opportunities. My inbox is always open!</p>
             <a href={`mailto:${portfolioData.contact.email}`} className="inline-block px-8 py-3 font-bold text-white transition-transform duration-300 bg-teal-600 rounded-lg hover:bg-teal-700 hover:scale-105">Say Hello</a>
             <div className="flex flex-col items-center justify-center gap-4 mt-8 text-gray-400 sm:flex-row sm:gap-8">
                <div className="flex items-center gap-3"><FaPhone className="text-teal-300"/><span>{portfolioData.contact.phone}</span></div>
                <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-teal-300"/><span>{portfolioData.contact.address}</span></div>
             </div>
           </motion.section>
          </main>
          
          <footer className="py-8 mt-16 text-center border-t border-gray-700">
              <p className="text-gray-500">&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;