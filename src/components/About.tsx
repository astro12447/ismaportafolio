import React from 'react';
import imgdev from "../assets/dev-image.jpg"
import "../css/about/about.css";
export const About: React.FC = () => {
    const gmail = process.env.REACT_APP_USER_GMAIL;
    return (
        <section className='gb-movil-2cols  wrapper-about'>
            <div className='about-content'>
                <h2 className='description-title  '>
                    Младший разработчик React | Увлечённый созданием динамических и
                    отзывчивых интерфейсов
                </h2>
                <p className='description-hero'>
                    Я младший разработчик веб-приложений с большим интересом к созданию
                    опыта работы, я работал над несколькими личными проектами, чтобы улучшить
                    свои навыки и продемонстрировать свою способность создавать практичные и эффективные
                    решения. Моя цель — продолжать учиться и вносить вклад в сложные проекты, которые
                    позволят мне расти как разработчику
                </p>
                <a href={`mailto:${gmail}`} className='button contact-link' target='_blank' rel="noopener noreferrer"
                >связаться со мной</a>
            </div>
            
            <img src={imgdev} alt="hero-image" className='hero-image' />
        </section>
    )
}
