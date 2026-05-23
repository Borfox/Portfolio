import { motion } from 'framer-motion'

function Skills() {
  const frontendSkills = [
    "HTML", "CSS", "JavaScript", "PHP", "MySQL", "JSON",
    "React", "WordPress", "Shopify", "SEO", "REST APIs",
    "Google Marketing", "GA4", "CRUD"
  ]

  const rpaSkills = [
    "UiPath", "REFramework", "Rocketbot", "n8n", "Python",
    ".NET", "Regex", "Git", "VB.NET"
  ]

  return (
    <motion.div className="flex flex-col gap-6" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
      <h2 className="text-sm font-bold tracking-widest text-slate-100 uppercase">
        Skills
      </h2>

      {/* Frontend */}
      <div className="flex flex-col gap-3">
        <h3 className="text-slate-300 font-medium">Frontend & Web</h3>
        <div className="flex flex-wrap gap-2">
          {frontendSkills.map((skill, index) => (
            <motion.span 
              key={skill}
              className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full"
              initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.3, delay: index * 0.05}} viewport={{once: true}} whileHover={{scale:1.1, backgroundColor: '#334155'}}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* RPA */}
      <div className="flex flex-col gap-3">
        <h3 className="text-slate-300 font-medium">RPA & Automatización</h3>
        <div className="flex flex-wrap gap-2">
          {rpaSkills.map((skill, index) => (
            <motion.span 
              key={skill}
              className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full"
              initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.3, delay: index * 0.05}} viewport={{once: true}} whileHover={{scale:1.1, backgroundColor: '#334155'}}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

    </motion.div>
  )
}

export default Skills