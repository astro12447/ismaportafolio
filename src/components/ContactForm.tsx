import React, { useState } from 'react';
import '../css/contactForm.css';
export const ContactForm = () => {
    const [name, setName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [message, setMessage] = useState<string>('')
    const isOnlyspace = (value: string) => {
        return value.trim()!== ' ';
    }
    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isOnlyspace(name) || isOnlyspace(lastname) || isOnlyspace(message)) {
            alert('Por favor, complete todos los campos correctamente.');
            return;
        }
        const phoneNumber = process.env.REACT_APP_WHATSAPP_PHONE_NUMBER;
        if (!phoneNumber) {
            alert('Número de teléfono no configurado correctamente.');
            return;
        }

        const fullMessage = `Привет, меня зовут ${name} ${lastname}. ${message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
        window.open(url, '_blank');
    }

    return (
        <div className='ContactFormConteiner'>
            <form className='ContactForm' onSubmit={handlesubmit}>
                <div className='nameConteiner'>
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        placeholder='Имя'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='lastnameConteiner'>
                    <label htmlFor="lastname">Фамилия</label>
                    <input
                        type="text"
                        placeholder='Фамилия'
                        required
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='messageConteiner'>
                    <label htmlFor="message">Сообщение</label>
                    <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        value={message}
                        required
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                </div>
                
                <button type='submit'>Отправить Сообщение</button>
            </form>
        </div>
    )
}
