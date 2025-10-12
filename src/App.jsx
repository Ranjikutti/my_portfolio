import React from 'react';
// --- Animation & Icons ---
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// --- Helper Components for better structure (with enhancements!) ---

const SkillPill = ({ skill }) => (
  // Added a subtle hover effect
  <motion.div
    className="bg-gray-700 text-white py-2 px-4 rounded-full text-sm font-medium cursor-pointer"
    whileHover={{ scale: 1.1, backgroundColor: '#2dd4bf' /* teal-400 */ }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {skill}
  </motion.div>
);

const ProjectCard = ({ title, description, tech }) => (
  // Enhanced with a glassmorphism effect and more prominent hover
  <motion.div
    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg p-6"
    whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(45, 212, 191, 0.3)' }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
  >
    <h3 className="text-xl font-bold text-teal-300 mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map(t => <span key={t} className="bg-teal-900 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
    </div>
  </motion.div>
);

// --- NEW Navigation Component ---
const Navbar = () => (
    <nav className="bg-gray-900/70 backdrop-blur-md sticky top-0 z-50 py-4">
        <div className="max-w-4xl mx-auto flex justify-center sm:justify-between items-center px-4">
            <a href="#home" className="text-xl font-bold text-white hidden sm:block">Ranjith J</a>
            <div className="flex space-x-4 sm:space-x-8 text-sm">
                <a href="#about" className="text-gray-300 hover:text-teal-300 transition-colors">About</a>
                <a href="#skills" className="text-gray-300 hover:text-teal-300 transition-colors">Skills</a>
                <a href="#projects" className="text-gray-300 hover:text-teal-300 transition-colors">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-teal-300 transition-colors">Contact</a>
            </div>
        </div>
    </nav>
);


// --- Main App Component ---

function App() {
  const portfolioData = {
    name: "Ranjith J",
    title: "Full Stack Developer & Prompt Engineer",
    social: {
        github: "https://github.com/yourusername", // Add your GitHub link
        linkedin: "https://linkedin.com/in/yourusername", // Add your LinkedIn link
    },
    contact: {
      email: "ranjikutti790@gmail.com",
      phone: "+91 9042275478",
      address: "Thiruvallur, Tamil Nadu",
    },
    profile: "A passionate B.Tech student at Vel Tech and a Full Stack Developer with a strong foundation in building user-friendly web interfaces using JavaScript, React, and Node.js. My internship in Artificial Intelligence and Machine Language has expanded my interests into the practical applications of AI. I am now skilling up in prompt engineering to effectively interact with and leverage large language models for creative and technical solutions. I am a dedicated problem-solver, currently developing an AI and IoT-based Smart Assistive System, and am always eager to tackle real-world challenges.",
    skills: ["HTML & CSS", "JavaScript", "React", "Node JS", "Python", "Java", "C++", "Prompt Engineering", "Problem Solving", "Critical Thinking", "TeamWork"],
    projects: [
      {
        title: "Personal Portfolio Website",
        description: "A self-introductory portfolio created to showcase my skills and projects, built from scratch using HTML and CSS. This project serves as a central hub for my work and professional profile.",
        tech: ["HTML", "CSS", "React"]
      },
      {
        title: "AuraLink - AI & IoT Smart Assistive System",
        description: "Currently developing an innovative project that integrates AI and IoT to create a smart assistive system. The project aims to provide intelligent support and enhance accessibility through technology.",
        tech: ["AI", "IoT", "System Design"]
      },
      {
        title: "Freelance Web Development",
        description: "Focused on creating responsive, user-friendly websites for clients. My work also involves part-time video editing, combining technical development with creative content creation.",
        tech: ["HTML", "CSS", "JavaScript", "Client-side scripting"]
      }
    ],
    education: [
        {
            degree: "B.Tech, Computer Science and Engineering",
            school: "Vel Tech Multi Tech, Chennai",
            duration: "Sep 2023 - Present",
            details: "Currently Pursuing. CGPA: 7.63"
        },
        {
            degree: "Higher Secondary Certificate",
            school: "VIVEKA MATRIC HR, SEC, SCHOOL, Sivagiri",
            duration: "May 2022 - April 2023",
            details: "Passed with 80.00%"
        }
    ],
    internship: {
        title: "Artificial Intelligence and Machine Learning Intern",
        company: "Srishti Innovative Educational Services Techno Park, Trivandrum",
        description: "Gained hands-on experience in AI and ML concepts, working on practical applications and learning from industry professionals."
    }
  };

  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Added a subtle gradient background
    <div className="bg-gray-900 bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans leading-normal tracking-wider">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">

        {/* --- Header / Hero Section with Typing Animation --- */}
        <header id="home" className="text-center py-20">
          <motion.h1 
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {portfolioData.name}
          </motion.h1>
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'Prompt Engineer', 2000,
              'Creative Problem-Solver', 2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-2xl text-teal-300"
            repeat={Infinity}
          />
          {/* Social Icons */}
          <motion.div 
            className="flex justify-center space-x-6 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-colors">
                <FaGithub size={28} />
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-colors">
                <FaLinkedin size={28} />
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-teal-300 transition-colors">
                <FaEnvelope size={28} />
            </a>
          </motion.div>
        </header>
        
        <main>
          {/* --- Section wrapper for animations --- */}
          <motion.section 
            id="about" 
            className="mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-teal-400 pb-2">About Me</h2>
            <p className="text-center text-lg text-gray-300">
              {portfolioData.profile}
            </p>
          </motion.section>

          <motion.section 
            id="skills" 
            className="mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-teal-400 pb-2">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.map(skill => <SkillPill key={skill} skill={skill} />)}
            </div>
          </motion.section>

          <motion.section 
            id="projects" 
            className="mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-teal-400 pb-2">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.projects.map(project => <ProjectCard key={project.title} {...project} />)}
            </div>
          </motion.section>
          
          {/* Education section is intentionally left without major changes to keep it clean */}
           <motion.section 
            id="education" 
            className="mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-teal-400 pb-2">Education & Experience</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education Cards */}
                <div className="space-y-6">
                    {portfolioData.education.map(edu => (
                         <div key={edu.school} className="bg-gray-800/50 p-4 rounded-lg shadow-md">
                           <h3 className="text-lg font-bold text-teal-300">{edu.degree}</h3>
                           <p className="text-gray-400 font-semibold">{edu.school}</p>
                           <p className="text-gray-500 text-sm">{edu.duration}</p>
                           <p className="text-gray-400 mt-1">{edu.details}</p>
                       </div>
                    ))}
                </div>
                {/* Internship Card */}
                 <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-teal-300">{portfolioData.internship.title}</h3>
                    <p className="text-gray-400 font-semibold mb-2">{portfolioData.internship.company}</p>
                    <p className="text-gray-400">{portfolioData.internship.description}</p>
                </div>
             </div>
          </motion.section>

          <motion.section 
            id="contact" 
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
             <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-teal-400 pb-2">Get In Touch</h2>
             <p className="text-lg text-gray-300 mb-6">I'm currently looking for new opportunities. My inbox is always open!</p>
             <a href={`mailto:${portfolioData.contact.email}`} className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
               Say Hello
             </a>
             {/* Contact details with icons */}
             <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-gray-400">
                <div className="flex items-center gap-3">
                    <FaPhone className="text-teal-300"/>
                    <span>{portfolioData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-teal-300"/>
                    <span>{portfolioData.contact.address}</span>
                </div>
             </div>
          </motion.section>
        </main>
        
        <footer className="text-center py-8 mt-16 border-t border-gray-700">
             <p className="text-gray-500">&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;