const projects = [
  {
    id: 1,
    title: "Sitio Web HTML/CSS/JS",
    description: "Sitio web desarrollado desde cero utilizando HTML, CSS, JavaScript, Bootstrap y jQuery.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    link: "#"
  },
  {
    id: 2,
    title: "Sitio Web PHP",
    description: "Sitio web desarrollado con PHP, HTML, CSS, JavaScript, Bootstrap y jQuery.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    link: "#"
  },
  {
    id: 3,
    title: "Proyectos WordPress",
    description: "4 proyectos online desarrollados con WordPress, incluyendo sitios corporativos y E-commerces.",
    tags: ["WordPress", "SEO", "E-commerce"],
    link: "#"
  },
  {
    id: 4,
    title: "Automatización RPA - UiPath",
    description: "Proyecto de automatización de procesos desarrollado con UiPath en el área financiera.",
    tags: ["UiPath", "REFramework", "RPA", "VB.NET"],
    link: "#"
  }
]

function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-sm font-bold tracking-widest text-slate-100 uppercase">
        Projects
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
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
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects