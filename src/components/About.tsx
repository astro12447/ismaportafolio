import React from 'react';
import imgdev from "../assets/dev-image.jpg"
import "../css/about.css";
export const About: React.FC = () => {
    return (
        <section className='About grid'>
            <div className='AboutLeft'>
                <div className='description'>
                    <div>

                    <p>
                        Привет! Меня зовут Нво Мбела Исмаэль, и я начинающий
                        фронтенд-разработчик. Я увлечен созданием красивых и
                        функциональных веб-интерфейсов, которые улучшают пользовательский опыт
                    </p>
                    </div>
                    <div className='button-contact-gmail'>
                        <a href="mailto:mongorosalome@gmail.com">Связаться со мной</a>
                    </div>
                </div>
            </div>
            <div className='imageDev' style={{objectFit:"cover"}}>
                <img src={imgdev} alt="dev-image-logo" />
            </div>
        </section>
    )
}
