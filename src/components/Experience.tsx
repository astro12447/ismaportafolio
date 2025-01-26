import React from 'react';
import imagePHP from "../assets/skills/php.jpg";
import imagePYTHON from "../assets/skills/python.jpg";
import imageSQL from "../assets/skills/sql.jpg";
import imageCSSHTML from "../assets/skills/css-html.jpg";
import imageJAVASCRIPT from "../assets/skills/java__script.jpg";
import imageTYPESCRIPT from "../assets/skills/type__script.jpg";
import imageREACT from "../assets/skills/react.jpg";
import "../css/experience/experience.css";
export const Experience: React.FC = () => {
    return (
        <section className='experience experience-grid-2cols'>
                <h2 className='skill-title'>Навыки</h2>
                <img src={imageCSSHTML} alt="css/html" className='css-html' />
                <img src={imageJAVASCRIPT} alt="java-script" className='java-script' />
                <img src={imageTYPESCRIPT} alt="type-script" className='type-script' />
                <img src={imagePYTHON} alt="python" className='python' />
                <img src={imageSQL} alt="sql" className='sql' />
                <img src={imagePHP} alt="php" className='php' />
                <img src={imageREACT} alt="react-frame-work" className='react-frame-work' />
        </section>

    )
}
