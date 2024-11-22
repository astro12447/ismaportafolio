import React from 'react'
import { Experience } from './Experience';
import "../css/resume.css";
import { Career } from './Career';

export const Resume: React.FC = () => {
    return (
        <div className='Resume grid'>
            <div className='Experience'>
               <Experience/>
            </div>
            <div  style={{marginTop:"2rem"}} className='CareerConteiner'>
                <Career/>
            </div>
        </div >
    )
}
