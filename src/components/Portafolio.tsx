import React from 'react';
import reactImage from "../assets/skills/react.jpg"
import "../css/portafolio/portafolio.css";
export const Portafolio: React.FC = () => {
    return (
        <section className='portafolio wrapper gd-portafolio'>
            <h2>Мой портфолио</h2>
            <div className='project-item  project-item1'>
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
                        <button style={{ backgroundColor: "rgb(14 17 22)" }}>Project Name</button>
                        <button style={{ backgroundColor: "rgb(14 17 22)" }} className='Github'>Github</button>
                        <button  >HTML</button>
                        <button  >TypeScript</button>
                        <button  >React</button>
                        <button  >CSS</button>
                    </div>
                </div>
            </div>

            <div className='project-item  project-item2'>
                <img src={reactImage} alt="" />
                <div style={{ display: "flex", flexDirection: "column" }}>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad enim, id illum alias aperiam! Hic consequatur maiores, fuga dolorum quia neque eius eaque eos veritatis quibusdam amet similique ab!
                        Natus nesciunt animi autem molestiae repellendus? Doloremque odio velit, quia quasi corporis suscipit rerum animi voluptas deserunt fuga deleniti minima similique quae inventore! Minima necessitatibus saepe incidunt fugiat consequatur voluptates!
                        Cupiditate nesciunt esse error ipsum itaque accusamus laboriosam modi, eos non! Voluptatibus a at labore, magnam ab autem, accusantium vel harum aspernatur sequi consequatur maiores odio. Dolore, esse. Quam, ipsam!
                        Voluptatum dignissimos, nostrum eum amet quo vero id minima repellendus eveniet repudiandae quae libero aperiam nobis nesciunt cumque quibusdam praesentium deserunt magni voluptate, tempora earum at? Soluta quae excepturi dolorum!
                        Ullam nobis tempora sed esse odit doloremque veritatis perspiciatis, molestias iusto, odio inventore quisquam quibusdam. Sint molestias maiores dolor veritatis mollitia atque magnam error maxime officiis, minus adipisci asperiores dignissimos!
                    </p>
                    <div className='project-utils'>
                     
                            <button style={{ backgroundColor: "rgb(14 17 22)" }}>Project Name</button>
                            <button style={{ backgroundColor: "rgb(14 17 22)" }} className='Github'>Github</button>
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad enim, id illum alias aperiam! Hic consequatur maiores, fuga dolorum quia neque eius eaque eos veritatis quibusdam amet similique ab!
                        Natus nesciunt animi autem molestiae repellendus? Doloremque odio velit, quia quasi corporis suscipit rerum animi voluptas deserunt fuga deleniti minima similique quae inventore! Minima necessitatibus saepe incidunt fugiat consequatur voluptates!
                        Cupiditate nesciunt esse error ipsum itaque accusamus laboriosam modi, eos non! Voluptatibus a at labore, magnam ab autem, accusantium vel harum aspernatur sequi consequatur maiores odio. Dolore, esse. Quam, ipsam!
                        Voluptatum dignissimos, nostrum eum amet quo vero id minima repellendus eveniet repudiandae quae libero aperiam nobis nesciunt cumque quibusdam praesentium deserunt magni voluptate, tempora earum at? Soluta quae excepturi dolorum!
                        Ullam nobis tempora sed esse odit doloremque veritatis perspiciatis, molestias iusto, odio inventore quisquam quibusdam. Sint molestias maiores dolor veritatis mollitia atque magnam error maxime officiis, minus adipisci asperiores dignissimos!
                    </p>
                    <div className='project-utils'>
                            <button style={{ backgroundColor: "rgb(14 17 22)" }} >Project Name</button>
                            <button style={{ backgroundColor: "rgb(14 17 22)" }} className='Github'>Github</button>
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
