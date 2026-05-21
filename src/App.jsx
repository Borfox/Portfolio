/* Importacion de hooks */
import { useState, useEffect } from 'react'


/* Importacion de componentes */
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(){

  const [seccionActiva, setSeccionActiva] = useState ('about')

  useEffect(() => {
    const secciones = ['about', 'skills', 'projects', 'contact']

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          setSeccionActiva(entry.target.id)
        }
      })
    }, { threshold: 0.5})

    secciones.forEach((id) => {
      const elemento = document.getElementById(id)
      if (elemento) observer.observe(elemento)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 flex">
      
      <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-between p-16">
        <Hero seccionActiva={seccionActiva} />
      </div>
      
      <div className="w-1/2 p-16 flex flex-col gap-24">
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
            
    </div>
  )
}

export default App