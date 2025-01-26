import React from 'react'
import telegIcon from "../assets/contact/__telegram.jpg";
import gmailIcon from "../assets/contact/gmail.jpg";
import "../css/contact/contact.css";
export const Contact: React.FC = () => {
  const userTelegramLink = process.env.REACT_APP_TELEGRAM_USER_NAME;
  const gmailAddress = process.env.REACT_APP_USER_GMAIL;
  return (
    <section className='footer '>
       <div className='footer-content'>
      <a href={`https://t.me/${userTelegramLink}`} target='_blank' rel="noopener noreferrer" className='telegram-link' >
        <img src={telegIcon} alt="telegram-link" />Telegram
      </a>
      <a href={`mailto:${gmailAddress}`} target='_blank' rel="noopener noreferrer" className='gmail-link'>
        <img src={gmailIcon} alt="gmail-link" /> Gmail
      </a>
       </div>
    </section>
  )
}
