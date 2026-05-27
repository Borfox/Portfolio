import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Blue Magic Internet",
    description: "Sitio web que presenta los servicios de internet 5G, sus precios y metodos de contacto para brindar internet en zonas rurales.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery","Responsive"],
    link: "https://bmi-internet.com/"
  },
  {
    id: 2,
    title: "Asociacion Nacional de Tenis de Mesa de Panamá",
    description: "Sitio web creado con el fin de brindar noticias, informacion, fechas de competencias y ranking de los jugadores. desarrollado con PHP, HTML, CSS, JavaScript, Bootstrap y jQuery.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Responsive"],
    link: "https://atmp.epizy.com/ATMP/"
  },
  {
    id: 3,
    title: "Sking Legal",
    description: "Sitio web desarrollado para la firma de abogados Sking Legal siendo la principal representate Suezanne King",
    tags: ["WordPress", "SEO", "SMTP", "JavaScript", "PHP", "Elementor","Responsive"],
    link: "https://skinglegal.co.uk/"
  },
  {
    id: 4,
    title: "Djdoors",
    description: "Sitio web enfocado en el servicio de instalacion de puertas automaticas comerciales y manuales para diferentes infraestructuras.",
    tags: ["WordPress", "SEO", "SMTP", "JavaScript", "Divi", "CSS", "HTML", "Responsive"],
    link: "https://djdoors.co.uk/"
  },
  {
    id: 5,
    title: "Itrackppe",
    description: "Sitio web enfocado en las mejores practicas de PPE para empresas de construccion. Se brinda informacion de la empresa y procedimientos de sus servicios. ",
    tags: ["WordPress", "SEO", "SMTP, JavaScript, Elementor","Responsive"],
    link: "https://itrackppe.com/"
  },
  {
    id: 6,
    title: "High Point Yatching",
    description: "Sitio web especializado para yates en diferentes ubicaciones del mediterraneo.",
    tags: ["WordPress", "SEO", "SMTP, JavaScript, PHP, Elementor","Responsive", "CSS"],
    link: "https://www.highpointyachting.com/"
  },
  {
    id: 7,
    title: "JPAmbientalista Automation",
    description: "Proyecto RPA desarrollado con UiPath en el area de topografia, Se mejoro el tiempo de culminacion de procesos de 1 semana a tan solo 2 dias resultando en un incremento de la eficiencia hasta del 65%.",
    tags: ["UiPath", "REFramework", "RPA", "VB.NET", "Document Processing", "Excel", "Regex"],
    link: "#"
  }
]

function Projects() {
  return (
    <motion.div className="flex flex-col gap-6" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
      <h2 className="text-sm font-bold tracking-widest text-slate-100 uppercase">
        Projects
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="flex flex-col gap-3 p-6 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <h3 className="text-slate-100 font-medium">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-full"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default Projects