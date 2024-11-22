import React from 'react';
import { Skills } from './Skills';
export const Experience:React.FC = () => {
    return (
        <div className='Experience-Title'>
            <div className='Title' style={{marginBottom:"1rem"}}>
            <h2>
                Мой опыт
            </h2>
            </div>
            <div className='Experience-Content'>
                <ul>
                    <li>HTML/CSS: Уверенно владею основами HTML и CSS для создания структуры и стилизации веб-страниц.</li>
                    <li>JavaScript/TypeScript: Знаком с базовыми концепциями JavaScript/TypeScript и использую его для добавления интерактивности на веб-сайты.</li>
                    <li>React: Начинаю изучать React для создания динамичных и отзывчивых пользовательских интерфейсов.</li>
                    <li>Python: Имею базовые знания Python, включая основы синтаксиса и использование библиотек для обработки данных и автоматизации задач.</li>

                    <li>PHP: Имею базовые знания PHP, включая создание простых веб-приложений и взаимодействие с базами данных.</li>

                    <li>SQL: Знаком с основами SQL, включая создание, модификацию и запросы к базам данных.</li>

                    <li>C++: Имею средний уровень знаний C++, включая работу с указателями, управление памятью</li>
                </ul>
            </div>
            <div>
            <Skills/>
            </div>

        </div>
    )
}
