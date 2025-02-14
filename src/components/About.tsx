import React from 'react';
import imgdev from "../assets/dev-image.jpg"
import "../css/about/about.css";
export const About: React.FC = () => {
    const gmail = process.env.REACT_APP_USER_GMAIL;
    return (
        <section className='gb-movil-2cols  wrapper-about'>
            <div className='about-content'>
                <h2 className='description-title  '>
                Начинающий React-разработчик | Увлечён созданием динамичных и отзывчивых интерфейсов
                </h2>
                <p className='description-hero'>
                Я — начинающий разработчик веб-приложений, увлечённый созданием удобного 
                и современного пользовательского опыта. У меня есть опыт работы над несколькими 
                личными проектами, которые помогли мне развить навыки и продемонстрировать 
                способность создавать практичные и эффективные решения.
                Моя страсть к разработке подталкивает меня к постоянному обучению и поиску новых вызовов. 
                Я стремлюсь участвовать в сложных проектах, которые позволят мне расти как профессионалу 
                и вносить вклад в создание качественных продуктов.
                </p>
                <a href={`mailto:${gmail}`} className='button contact-link' target='_blank' rel="noopener noreferrer"
                >связаться со мной</a>
            </div>
            
            <img src={imgdev} alt="hero-image" className='hero-image' />
        </section>
    )
}
