import React from 'react';
import "../css/portafolio/portafolio.css";
import appImage from "../assets/app-image.png";
import hotelImage from "../assets/hotel.png"
import shopImage from "../assets/1shoppingCart.png";
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
                <img src={shopImage} alt="" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className='project-description'>
                        Этот проект представляет собой простую онлайн-магазинную платформу, реализующую базовый функционал для покупки товаров. Она включает каталог продуктов, корзину покупок и систему оформления заказа. Система создана с использованием современных веб-технологий и архитектуры, обеспечивая легкость в управлении состоянием и взаимодействии с данными.

                        Ключевые особенности проекта:

                        Каталог товаров: Пользователи могут просматривать различные товары в магазине. Каждый товар отображает основную информацию, такую как название, описание, цена и изображение. Для улучшения пользовательского опыта предусмотрены фильтры по категориям, что позволяет пользователю быстро находить товары, которые его интересуют.
                        Корзина покупок: Каждый товар, выбранный пользователем, добавляется в корзину. В корзине отображаются все выбранные товары, а также их количество и стоимость. Пользователь может редактировать количество товаров или удалять их из корзины.
                        Интеграция с FakeStoreAPI: Для получения информации о товарах используется внешняя FakeStoreAPI, которая предоставляет фейковые данные о продуктах. Это API включает в себя широкий ассортимент товаров, таких как одежда, электроника, аксессуары и многое другое, что делает проект функциональным и пригодным для демонстрации работы с внешними данными.
                        Контекстное состояние (Context API): Для управления состоянием приложения используется Context API. Это позволяет централизованно управлять состоянием корзины и списка товаров, обеспечивая удобную передачу данных между компонентами без необходимости "прокидывать" их через каждый уровень.
                        Типизация с TypeScript: Для обеспечения безопасности типов и улучшения читаемости кода, проект написан с использованием TypeScript. Типы данных для продуктов и корзины обеспечивают строгую проверку данных на всех этапах работы приложения, что минимизирует возможность возникновения ошибок.
                        Фильтрация товаров: В каталоге предусмотрена возможность фильтрации товаров по категориям. Это позволяет пользователю быстро найти интересующие его товары и улучшает пользовательский интерфейс. Категории могут включать, например, "Одежда", "Электроника", "Аксессуары" и т.д.
                    </p>

                    <div className='project-utils'>
                        <button style={{ backgroundColor: "rgb(14 17 22)" }} >Shop Online</button>
                        <button style={{ backgroundColor: "rgb(14 17 22)" }} className='Github' onClick={()=>Gotolink('https://github.com/astro12447/shop')}>Code Github</button>
                        <button  >HTML</button>
                        <button  >TypeScript</button>
                        <button  >React</button>
                        <button  >CSS</button>
                        <button onClick={() => Gotolink('https://drive.google.com/file/d/1pTNmFvRVyTQy2AzPb1BoMdjkitiOE7_Y/view?usp=sharing')} style={{ cursor: "pointer" }}> PDF</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
