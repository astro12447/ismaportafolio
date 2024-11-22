import React from 'react';
import "../css/contact.css";
import { ContactForm } from './ContactForm';
import { ContactLeft } from './ContactLeft';
export const Contact: React.FC = () => {
  return (
    <div className='Contact'>
      <div className='contact-title'>
        <h2 style={{color:"#fff"}}>Contact</h2>
      </div>
        <div className='Contact-me-form'>
          <ContactForm/>
          <ContactLeft/>
        </div>
    </div>
  )
}
