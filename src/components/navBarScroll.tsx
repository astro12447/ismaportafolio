import React from 'react';
import "../css/navBarScroll/navBar.css";
import { Sections } from '../Sections';
import { Link } from 'react-scroll';
interface navBarScroll {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    sections: Sections;
}
export const NavBarScroll: React.FC<navBarScroll> = ({ scrollToSection, sections }) => {
    

    return (
        <nav className='navBarScroll'>
            <Link to='about' className="logo-hero">Isma</Link>
            <button className='button-about'     onClick={() => scrollToSection(sections.about)}>About</button>
            <button className='button-contact'   onClick={() => scrollToSection(sections.education)}>Education</button>
            <button className='button-education' onClick={() => scrollToSection(sections.experience)}>Experience</button>
            <button className='button-experience' onClick={() => scrollToSection(sections.portafolio)}>Portafolio</button>
            <button className='button-portafolio' onClick={() => scrollToSection(sections.contact)}>Contact</button>
        </nav>
    )
}
