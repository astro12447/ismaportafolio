import React from 'react';
import { About } from './About';
import { Education } from './Education';
import { Experience } from './Experience';
import { Portafolio } from './Portafolio';
import { Contact } from './Contact';
import { Sections as sections} from '../Sections';
interface SectionsProps {
    sections: sections
}
export const Sections: React.FC<SectionsProps> = ({ sections}) => {

    return (
        <div className='sections'>
            <div ref={sections.about} id='about'>
                <About />
            </div>
             <div ref={sections.education} >
               <Education/>
             </div>
             <div ref={sections.experience}>
               <Experience/>
             </div>
            <div ref={sections.portafolio}>
                <Portafolio />
            </div>
            <div ref={sections.contact}>
                <Contact />
            </div>
        </div>
    )
}
