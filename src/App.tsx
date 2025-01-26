import React, { useRef } from 'react';
import { NavBarScroll } from './components/navBarScroll';
import { Sections } from './components/sections';
import "./app.css";

export const App: React.FC = () => {
  
  // Crear referencias para las secciones
  const aboutRef      = useRef<HTMLDivElement>(null);
  const educationRef  = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const portafolioRef = useRef<HTMLDivElement>(null);
  const contactRef    = useRef<HTMLDivElement>(null);
  // Función para desplazarse a una sección
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Objeto con las referencias
  const sections = {
    about: aboutRef,
    education:educationRef,
    experience:experienceRef,
    portafolio: portafolioRef,
    contact: contactRef,
  };

  return (
      <div>
        <NavBarScroll scrollToSection={scrollToSection} sections={sections} />
        <Sections sections={sections} />
      </div>
  );
}