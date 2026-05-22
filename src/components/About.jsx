import { motion } from 'framer-motion'


function About() {
  return (
    <motion.div className="flex flex-col gap-4" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
      <h2 className="text-sm font-bold tracking-widest text-slate-100 uppercase">
        About
      </h2>
      <p className="text-slate-400 leading-relaxed">
        Soy un programador profesional con 5 años de experiencia. He desarrollado 
        en el área de RPA con UiPath en el sector financiero en el Banco 
        Latinoamericano de Comercio Exterior (BLADEX) y he creado diferentes 
        sitios web desde 0, proyectos con WordPress y E-commerces.
      </p>
      <p className="text-slate-400 leading-relaxed">
        Me especializo en combinar el desarrollo Frontend con la automatización 
        de procesos, lo que me permite crear soluciones completas que van desde 
        interfaces de usuario hasta flujos de trabajo automatizados.
      </p>
    </motion.div>
  )
}

export default About