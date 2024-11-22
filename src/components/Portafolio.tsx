import React from 'react';
import "../css/portafolio.css";
import { PortafolioHeader } from './PortafolioHeader';
export const Portafolio: React.FC = () => {
    return (
        <section className='Portafolio'>
            <div className='portafolio-title'>
                <h2 style={{color:"#fff"}}>Мой портфолио</h2>
            </div>
           
            <PortafolioHeader/>
           
            <div className='Portafolio-items flex'>
                <div className='work-1'></div>
                <div className='work-2'></div>
                <div className='work-3'></div>
                <div className='work-4'></div>
            </div>
        </section>
    )
}
