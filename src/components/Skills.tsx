import React from 'react'
import imagePHP from "../assets/skills/__php.jpg";
import imagePYTHON from "../assets/skills/__python.jpg";
import imageSQL from "../assets/skills/__sql.jpg";
import imageCSSHTML from "../assets/skills/css-html.jpg";
import imageJAVASCRIPT from "../assets/skills/java__script.jpg";
import imageTYPESCRIPT from "../assets/skills/type__script.jpg";
export const Skills = () => {
  return (
    <div className='skills-images'>
    <div>
        <img src={imageCSSHTML} alt="css/html" />
        <h3>Css/Html</h3>
    </div>
    <div>
        <img src={imageJAVASCRIPT} alt="java-script" />
        <h3>Java Script</h3>
    </div>
    <div>
        <img src={imageTYPESCRIPT} alt="type-script" />
        <h3>Type Script</h3>
    </div>
    <div>
        <img src={imagePYTHON} alt="python" />
        <h3>Python</h3>
    </div>
    <div>
        <img src={imageSQL} alt="sql" />
        <h3>Sql</h3>
    </div>
    <div>
        <img src={imagePHP} alt="php" />
        <h3>Php</h3>
    </div>
</div>
  )
}
