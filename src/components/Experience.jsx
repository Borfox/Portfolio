import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    period: "2023 — 2025",
    role: "Desarrollador RPA",
    company: "BLADEX",
    companyFull: "Banco Latinoamericano de Comercio Exterior",
    description: "Desarrollé y automaticé 4 procesos críticos en el área financiera utilizando UiPath y REFramework, reduciendo tiempos operativos y minimizando errores en procesos contables.",
    achievements: [
      "Automatización de Descarga de Reporte RAC",
      "Reclasificación MTM Intereses",
      "Reverso y Posteo de MTM",
      "Novedades de Planillas"
    ],
    tags: ["UiPath", "REFramework", "VB.NET", "Python", ".NET"]
  }
]

function Experience() {
  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-sm font-bold tracking-widest text-slate-100 uppercase">
        Experience
      </h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="flex gap-6 p-6 rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-600 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
          >
            
            <div className="w-32 shrink-0">
              <span className="text-slate-500 text-sm">{exp.period}</span>
            </div>

            
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-slate-100 font-medium">
                  {exp.role} · {exp.company}
                </h3>
                <p className="text-slate-500 text-sm">{exp.companyFull}</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {exp.description}
              </p>

              
              <ul className="flex flex-col gap-1">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="text-slate-400 text-sm flex items-center gap-2"
                  >
                    <span className="text-slate-600">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              
              <div className="flex flex-wrap gap-2 mt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </motion.div>
  )
}

export default Experience