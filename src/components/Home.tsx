import React from 'react'
import { About } from './About'
import { Resume } from './Resume'
import { Portafolio } from './Portafolio'
import { Contact } from './Contact'

export const Home:React.FC = () => {
    return (
        <section className='HomeConteiner'>
            <div className='Home'>
                <About />
                <Resume />
                <Portafolio />
                <Contact/>
            </div>
        </section>
    )
}
