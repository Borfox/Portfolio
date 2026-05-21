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
    <div className="flex flex-col gap-6">
      <h2 className="text-sm font-bold tracking-widest text-slate-100 uppercase">
        Skills
      </h2>

      {/* Frontend */}
      <div className="flex flex-col gap-3">
        <h3 className="text-slate-300 font-medium">Frontend & Web</h3>
        <div className="flex flex-wrap gap-2">
          {frontendSkills.map((skill) => (
            <span 
              key={skill}
              className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* RPA */}
      <div className="flex flex-col gap-3">
        <h3 className="text-slate-300 font-medium">RPA & Automatización</h3>
        <div className="flex flex-wrap gap-2">
          {rpaSkills.map((skill) => (
            <span 
              key={skill}
              className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills