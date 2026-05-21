import profilePic from '../assets/imgs/profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

function Hero({ seccionActiva }) {

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]


  return (
    <div className="flex flex-col gap-4">

      <img src={profilePic} alt="Boris Ladera" className="w-32 h-32 rounded-full object-cover mb-2" />

      <h1 className="text-5xl font-bold text-slate-100">Boris Ladera</h1>
      <h2 className="text-xl font-medium text-slate-300">Ingeniero en Sistemas</h2>
      <p className="text-slate-400 max-w-xs">
        Soy un programador profesional con 5 años de experiencia, especializado 
        en desarrollo Frontend y automatización RPA en el área financiera.
      </p>

      <nav className="flex flex-col gap-3 mt-6">
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
      </nav>

      {/* Links de redes sociales */}
      <div className="flex gap-6 mt-4">
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
          
      </div>
    </div>
  )
}

export default Hero