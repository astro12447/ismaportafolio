import React from 'react'
import "../css/education/education.css";
export const Education: React.FC = () => {
  return (
    <section className='education'>
      <h2 className='education-title'>Образование</h2>
      <div className='education-list-items'>
        <div style={{ paddingBlockEnd: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", paddingInline: "16px"}}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "rgb(14 17 22)" }}>
              <circle cx="8" cy="10" r="6" stroke="rgb(156 152 160)" strokeWidth="2" fill="none" />
            </svg>
            <h3 style={{ color: "rgb(241 246 251)" }}> САРАТОВСКИЙ ГОСУДАРСТВЕНЫЙ УНИВЕРСИТЕТ</h3>
          </div>
          <div style={{ paddingInline: "24px", display: "flex", gap: "30px", paddingBlockStart: "20px" }} >
            <div style={{ backgroundColor: "rgb(156 152 160)", width: "1px", height: "8rem" }}>
            </div>
            <div style={{
              border: "1px solid rgb(156 152 160)",
              width: "100%",
              borderRadius: "4px",
              height: "8rem",
            }} className='education-item'>
              <div>
                <h3 style={{ color: "rgb(241 246 251)", }}> Профессия: <span style={{ color: "rgb(156 152 160)" }}>Информатика вычислительная техника</span></h3>
              </div>
              <div>
                <h3 style={{ color: "rgb(241 246 251)" }}>Степень: <span style={{ color: "rgb(156 152 160)" }}>Бакалавара</span> </h3>
              </div>
              <div>
                <h3 style={{ color: "rgb(241 246 251)" }}>
                  Год окончания: <span style={{ color: "rgb(156 152 160)" }}>2018 -  2021</span>
                </h3>
              </div>
            </div>
          </div>
        </div>


        <div style={{ paddingBlockEnd: "10px", }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", paddingInline: "16px" }}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "rgb(14 17 22)" }}>
              <circle cx="8" cy="10" r="6" stroke="rgb(156 152 160)" strokeWidth="2" fill="none" />
            </svg>
            <h3 style={{ color: "rgb(241 246 251)" }}> САРАТОВСКИЙ ГОСУДАРСТВЕНЫЙ УНИВЕРСИТЕТ</h3>
          </div>
          <div style={{ paddingInline: "24px", display: "flex", gap: "30px", paddingBlockStart: "20px" }} >
            <div style={{ backgroundColor: "rgb(156 152 160)", width: "1px", height: "8rem" }}>
            </div>
            <div style={{ border: "1px solid rgb(156 152 160)", width: "100%", borderRadius: "4px", height: "8rem" }} className='education-item'>
              <div>
                <h3 style={{ color: "rgb(241 246 251)", }}> Профессия: <span style={{ color: "rgb(156 152 160)" }}>Математика и Информатика</span></h3>
              </div>
              <div>
                <h3 style={{ color: "rgb(241 246 251)" }}>Степень: <span style={{ color: "rgb(156 152 160)" }}>Мастера</span> </h3>
              </div>
              <div>
                <h3 style={{ color: "rgb(241 246 251)" }}>
                  Год окончания: <span style={{ color: "rgb(156 152 160)" }}>2021 -  2023</span>
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
