function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-bold tracking-widest text-slate-100 uppercase">
        Contact
      </h2>
      <p className="text-slate-400 leading-relaxed">
        ¿Tienes un proyecto en mente o quieres conversar sobre oportunidades? 
        No dudes en contactarme.
      </p>

      <div className="flex flex-col gap-3 mt-2">
        <a
          href="mailto:tucorreo@email.com"
          className="flex items-center gap-3 text-slate-400 hover:text-slate-100 transition-colors">
          <span>📧</span>
          <span>tucorreo@email.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/boris-ladera/?locale=en-US"
          target="_blank"
          className="flex items-center gap-3 text-slate-400 hover:text-slate-100 transition-colors">
          <span>💼</span>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Celtic-L"
          target="_blank"
          className="flex items-center gap-3 text-slate-400 hover:text-slate-100 transition-colors">
          <span>🐙</span>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  )
}

export default Contact