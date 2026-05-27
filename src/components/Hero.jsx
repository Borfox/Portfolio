import profilePic from '../assets/imgs/profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Hero({ seccionActiva }) {

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience'},
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]


  return (
    <div className="flex flex-col gap-4">

      <motion.img src={profilePic} alt="Boris Ladera" className="w-32 h-32 rounded-full object-cover mb-2" initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}/>

      <motion.h1 className="text-5xl font-bold text-slate-100" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}}>Boris Ladera</motion.h1>
      <motion.h2 className="text-xl font-medium text-slate-300" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.3}}>Ingeniero en Sistemas</motion.h2>
      <motion.p className="text-slate-400 max-w-xs" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.4}}>
        Soy un programador profesional con 5 años de experiencia, especializado 
        en desarrollo Frontend y automatización RPA en el área financiera.
      </motion.p>

      <motion.nav className="flex flex-col gap-3 mt-6" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.5}}>
        {navLinks.map((link) => (
          <a
          key={link.id}
          href={`#${link.id}`}
          className={`tracking-widest text-sm uppercase transition-colors ${seccionActiva === link.id
            ? 'text-slate-100 font-semibold'
            : 'text-slate-400 hover:teszt-slate-100'
          }`}
          >
            {link.id === seccionActiva ? '— ' : ''}{link.label}
          </a>
        ))}
        

        {/*<a href="#about" className="text-slate-400 hover:text-slate-100 transition-colors tracking-widest text-sm uppercase">
          About
        </a>
        <a href="#skills" className="text-slate-400 hover:text-slate-100 transition-colors tracking-widest text-sm uppercase">
          Skills
        </a>
        <a href="#projects" className="text-slate-400 hover:text-slate-100 transition-colors tracking-widest text-sm uppercase">
          Projects
        </a>
        <a href="#contact" className="text-slate-400 hover:text-slate-100 transition-colors tracking-widest text-sm uppercase">
          Contact
        </a>*/}
      </motion.nav>

      {/* Links de redes sociales */}
      <motion.div className="flex gap-6 mt-4" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.6}}>
        <a 
          href="https://www.linkedin.com/in/boris-ladera/?locale=en-US"
          target="_blank"
          className="text-slate-400 hover:text-slate-100 transition-colors"
        >
          <FaLinkedin size={22}/> 
        </a>
        <a 
          href="https://github.com/Celtic-L"
          target="_blank"
          className="text-slate-400 hover:text-slate-100 transition-colors"
        >
          <FaGithub size={22} />
        </a>

        <a href="mailto:boris.ladera@gmail.com" className="text-slate-400 hover:text-slate-100 transition-colors"><FaEnvelope size={22} /></a>
          
      </motion.div>
    </div>
  )
}

export default Hero