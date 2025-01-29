import React from 'react';
import reactImage from "../assets/skills/react.jpg"
import "../css/portafolio/portafolio.css";
import appImage from "../assets/app-image.png";
import hotelImage from "../assets/hotel.png"
export const Portafolio: React.FC = () => {
    const Gotolink = (link: string) => {
        window.location.href = link;
    }
    return (
        <section className='portafolio wrapper gd-portafolio'>
            <h2>Мой портфолио</h2>
            <div className='project-item  project-item1'>
                <img src={appImage} alt="ShoppingCartApp" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className='project-description'>
                        Онлайн-магазин с корзиной покупок  Это приложение, разработанное с использованием
                        React и TypeScript, позволяет пользователям просматривать товары и управлять своими
                        покупками. Оно состоит из двух основных страниц:<br />
                        Главная страница: Здесь отображается список всех доступных товаров. Пользователи
                        могут просматривать продукты, добавлять их в корзину и узнавать подробности. <br />
                        Корзина: На этой странице пользователи могут просматривать выбранные товары, изменять
                        их количество или удалять из корзины.
                    </p>
                    <div className='project-utils'>
                        <button style={{ backgroundColor: "rgb(14 17 22)" }}>Shopping Cart</button>
                        <button style={{ backgroundColor: "rgb(14 17 22)" }} className='Github' onClick={() => Gotolink("https://github.com/astro12447/shoppingCart")}>Code Github</button>
                        <button  >HTML</button>
                        <button  >TypeScript</button>
                        <button  >React</button>
                        <button  >CSS</button>
                    </div>
                </div>
            </div>

            <div className='project-item  project-item2'>
                <img src={hotelImage} alt="" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className='project-description'>
                        Программа для бронирования отелей, разработанная с использованием React и TypeScript, предоставляет пользователю удобный интерфейс для поиска и 
                        бронирования номеров. Приложение позволяет пользователям выбрать даты заезда и выезда, просматривать доступные номера, а также ознакомиться с 
                        их ценами и характеристиками. Интуитивно понятный интерфейс способствует легкости в использовании, а типизация данных с помощью TypeScript гарантирует 
                        надежность и предсказуемость работы программы.
                        Основные функции программы включают , возможность бронирования. Также, пользователи могут просматривать подробную информацию о каждом номере, 
                        включая фото. Все данные, такие как доступность номеров и информация о ценах, обновляются в реальном времени.
                    </p>
                    <div className='project-utils'>

                        <button style={{ backgroundColor: "rgb(14 17 22)" }}>Hotel Book</button>
                        <button onClick={() => Gotolink("https://github.com/astro12447/hotel-reservation-react-app")} style={{ backgroundColor: "rgb(14 17 22)" }} className='Github' >Code Github</button>
                        <button  >HTML</button>
                        <button  >TypeScript</button>
                        <button  >React</button>
                        <button  >CSS</button>
                    </div>

                </div>
            </div>
            <div className='project-item  project-item3'>
                <img src={reactImage} alt="" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className='project-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad enim, id illum alias aperiam! Hic consequatur maiores, fuga dolorum quia neque eius eaque eos veritatis quibusdam amet similique ab!
                        Natus nesciunt animi autem molestiae repellendus? Doloremque odio velit, quia quasi corporis suscipit rerum animi voluptas deserunt fuga deleniti minima similique quae inventore! Minima necessitatibus saepe incidunt fugiat consequatur voluptates!
                        Cupiditate nesciunt esse error ipsum itaque accusamus laboriosam modi, eos non! Voluptatibus a at labore, magnam ab autem, accusantium vel harum aspernatur sequi consequatur maiores odio. Dolore, esse. Quam, ipsam!
                        Voluptatum dignissimos, nostrum eum amet quo vero id minima repellendus eveniet repudiandae quae libero aperiam nobis nesciunt cumque quibusdam praesentium deserunt magni voluptate, tempora earum at? Soluta quae excepturi dolorum!
                        Ullam nobis tempora sed esse odit doloremque veritatis perspiciatis, molestias iusto, odio inventore quisquam quibusdam. Sint molestias maiores dolor veritatis mollitia atque magnam error maxime officiis, minus adipisci asperiores dignissimos!
                    </p>
                    <div className='project-utils'>
                        <button style={{ backgroundColor: "rgb(14 17 22)" }} >Project Name</button>
                        <button style={{ backgroundColor: "rgb(14 17 22)" }} className='Github'>Code Github</button>
                        <button  >HTML</button>
                        <button  >TypeScript</button>
                        <button  >React</button>
                        <button  >CSS</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
