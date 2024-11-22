import React from 'react';
import { Link } from 'react-router-dom';
import "../css/portafolioHeader.css";
export const PortafolioHeader:React.FC = () => {
  return (
    <div className='portafolioHeader flex'>
        <nav>
            <ul>
                <li><Link to="/hotel">Hotel</Link></li>
                <li><Link to="/email-sender">Email sender</Link></li>
                <li><Link to="/shoping-cart">Shoping cart</Link></li>
                <li><Link to="/react-form">React</Link></li>
                <li><Link to="/see-all">See All</Link></li>
                <li><Link to="/portafolio">Portafolio</Link></li>
            </ul>
        </nav>
    </div>
  )
}
