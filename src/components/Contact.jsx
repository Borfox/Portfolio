import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub,FaEnvelope } from 'react-icons/fa'


function Contact() {
  return (
    <motion.div className="flex flex-col gap-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} >
      <h2 className="text-sm font-bold tracking-widest text-slate-100 uppercase">
        Contact
      </h2>
      <p className="text-slate-400 leading-relaxed">
        ¿Tienes un proyecto en mente o quieres conversar sobre oportunidades? 
        No dudes en contactarme.
      </p>

      <div className="flex flex-col gap-3 mt-2">
        <motion.a
          href="mailto:boris.ladera@gmail.com"
          className="flex items-center gap-3 text-slate-400 hover:text-slate-100 transition-colors" whileHover={{ x: 5 }}>
          <FaEnvelope size={18} />
          <span>boris.ladera@gmail.com</span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/boris-ladera/?locale=en-US"
          target="_blank"
          className="flex items-center gap-3 text-slate-400 hover:text-slate-100 transition-colors" whileHover={{ x: 5 }}>
          <FaLinkedin size={18} />
          <span>LinkedIn</span>
        </motion.a>
        <motion.a
          href="https://github.com/Celtic-L"
          target="_blank"
          className="flex items-center gap-3 text-slate-400 hover:text-slate-100 transition-colors" whileHover={{ x: 5 }}>
          <FaGithub size={18} />
          <span>GitHub</span>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Contact