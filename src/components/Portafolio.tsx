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
            <h2>Портфолио</h2>
            <div className='project-item  project-item1'>
                <img src={appImage} alt="ShoppingCartApp" />

                <div style={{ display: "flex", flexDirection: "column", justifyContent:"center"}}>
                    <div style={{ color: "hsl(270, 4%, 61%)" }} className='description-content-shopping-cart'>
                            <h1 style={{ color: "white"}}>Shopping cart</h1>
                            <p className='project-description'>
                                Это приложение, разработанное с использованием React и TypeScript, представляет собой онлайн-магазин
                                с функциональностью корзины покупок. Оно позволяет пользователям просматривать товары и управлять своими
                                заказами. Приложение состоит из двух основных страниц: <br />
                            </p>
                        <ol className='shopping-cart-list-items' style={{paddingInlineStart:"1em"}}>
                            <li >Главная страница:
                                <div>
                                    На этой странице отображается список всех доступных товаров. Пользователи могут просматривать
                                    продукты, добавлять их в корзину и узнавать подробную информацию о каждом товаре.
                                </div>
                            </li>
                            <li> Корзина:
                                <div>
                                    На этой странице пользователи могут просматривать выбранные товары, изменять их количество или удалять из корзины перед
                                    оформлением заказа.
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div className='project-utils' style={{paddingBlockStart:"20px"}}>
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

                <div style={{ display: "flex", flexDirection: "column",justifyContent:"center" }}>
                    <div style={{ color: "hsl(270, 4%, 61%)" }}>
                        <h1 style={{ color: "white" }}>Hotel booking</h1>
                        <p className='project-description'>
                            Приложение для бронирования отелей, разработанное с использованием React и TypeScript, предоставляет
                            пользователям удобный интерфейс для поиска и бронирования номеров. Программа позволяет выбирать даты
                            заезда и выезда, просматривать доступные номера, а также знакомиться с их ценами и характеристиками.
                            Интуитивно понятный интерфейс делает использование приложения простым и удобным, а типизация данных
                            с помощью TypeScript обеспечивает надежность и предсказуемость работы. <br />
                            Основные функции приложения включают:
                        </p>
                        <ul style={{paddingInlineStart:"1em", color:"hsl(270, 4%, 61%)"}}>
                            <li>
                                Возможность бронирования номеров.
                            </li>
                            <li>
                                Просмотр подробной информации о каждом номере, включая фотографии.
                            </li>
                        </ul>
                        <p>
                            Все данные, такие как доступность номеров и информация о ценах, обновляются в реальном времени.
                        </p>

                    </div>
                    <div className='project-utils' style={{paddingBlockStart:"20px"}}>
                        <button onClick={() => Gotolink("https://github.com/astro12447/hotel-reservation-react-app")} style={{ backgroundColor: "rgb(14 17 22)" }} className='Github' >Code Github</button>
                        <button  >HTML</button>
                        <button  >TypeScript</button>
                        <button  >React</button>
                        <button  >CSS</button>
                    </div>

                </div>
            </div>
            <div className='project-item  project-item3'>
                
                <img src={shopImage} alt="shop app img" id='shop-image'  />
               
                <div style={{ display: "flex", flexDirection: "column",justifyContent:"center"}}>
                    <div>
                        <h1 style={{ color: "white" }}>Shop online</h1>
                        <p className='project-description'>
                            Этот проект представляет собой платформу для онлайн-магазина с базовым функционалом
                            покупки товаров. Он включает каталог продуктов, корзину покупок и систему оформления заказа.
                            Платформа разработана с использованием современных веб-технологий и архитектуры, что обеспечивает
                            удобство управления состоянием и взаимодействия с данными.
                        </p>
                        <div style={{ color: "hsl(270, 4%, 61%);" }}>
                            <h3 style={{color:"hsl(270, 4%, 61%)"}}>
                                Основные функции и особенности
                            </h3>
                            <ol style={{paddingInlineStart:"1em", color:"hsl(270, 4%, 61%)"}}>
                                <li style={{paddingInlineStart:"1em"}}>Каталог товаров:
                                    <p>Пользователи могут просматривать различные товары в магазине. Для каждого товара отображается основная информация: название, описание, цена и изображение.
                                    </p>

                                    <ul>
                                        <li>
                                            Для улучшения пользовательского опыта реализована фильтрация товаров по категориям (например, "Одежда", "Электроника", "Аксессуары").
                                        </li>

                                    </ul>

                                    <ul>
                                        <li>
                                            Это позволяет пользователям быстро находить интересующие их товары.
                                        </li>

                                    </ul>
                                </li>


                                <li>Корзина покупок:
                                    <ul style={{paddingInlineStart:"1em"}}>
                                        <li>Пользователи могут добавлять товары в корзину, где отображаются выбранные товары, их количество и общая стоимость.

                                        </li>
                                        <li>Есть возможность редактировать количество товаров или удалять их из корзины.

                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Интеграция с FakeStoreAPI:
                                    <ul style={{paddingInlineStart:"1em"}}>
                                        <li>Для получения данных о товарах используется внешний API — FakeStoreAPI, который предоставляет фейковые данные о продуктах.

                                        </li>
                                        <li>
                                            API включает широкий ассортимент товаров: одежду, электронику, аксессуары и многое другое, что делает проект функциональным и подходящим для демонстрации работы с внешними данными.

                                        </li>
                                    </ul>
                                </li>

                                <li>Управление состоянием (Context API):
                                    <ul style={{paddingInlineStart:"1em"}}>
                                        <li>Для управления состоянием приложения используется Context API.

                                        </li>
                                        <li>
                                            Это позволяет централизованно управлять состоянием корзины и списка товаров, упрощая передачу данных между компонентами без необходимости "прокидывать" их через каждый уровень.
                                        </li>
                                    </ul>
                                </li>
                                <li>Типизация с TypeScript:
                                    <ul style={{paddingInlineStart:"1em"}}>
                                        <li>Проект написан с использованием TypeScript, что обеспечивает безопасность типов и улучшает читаемость кода.

                                        </li>
                                        <li>
                                            Типы данных для продуктов и корзины гарантируют строгую проверку данных на всех этапах работы приложения, минимизируя возможность ошибок.

                                        </li>
                                    </ul>
                                </li>
                                <li>Фильтрация товаров:
                                    <ul style={{paddingInlineStart:"1em"}}>
                                        <li>В каталоге реализована возможность фильтрации товаров по категориям.

                                        </li>
                                        <li>Это улучшает пользовательский интерфейс, позволяя быстро находить нужные товары.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className='project-utils' style={{paddingBlock:"20px"}}>
                        <button style={{ backgroundColor: "rgb(14 17 22)" }} className='Github' onClick={() => Gotolink('https://github.com/astro12447/shop')}>Code Github</button>
                        <button  >HTML</button>
                        <button  >TypeScript</button>
                        <button  >React</button>
                        <button  >CSS</button>
                        <button onClick={() => Gotolink('https://drive.google.com/file/d/1pTNmFvRVyTQy2AzPb1BoMdjkitiOE7_Y/view?usp=sharing')} style={{ cursor: "pointer"}} id='pdf-link' > PDF</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
