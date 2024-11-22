import React from 'react'
export const Career = () => {
    return (
        <div className='Career'>
            <div>
                <h2 style={{color: "rgb(19, 19, 19)" }}>Оброзование</h2>
            </div>
            <hr style={{ border: "none" }} />
            <div style={{
                display: "flex",
                gap: "2em",
                marginTop: "1em",
                alignItems: "center",
                justifyContent: "space-around",
                fontWeight: "bold"
            }}>
                <div>
                    <h3 style={{ fontSize: "1.2rem", color: "#d8d8d8" }}>СГУ</h3>
                    <h4>Информатика вычислительная техника</h4>
                    <p style={{ fontSize: "1rem", color: "rgb(19, 19, 19)" }}>Бакалаврь</p>
                </div>
                <div style={{ backgroundColor: "rgb(19, 19, 19)", padding: "0.4em" }}>
                    <p style={{ color: "#d8d8d8" }}>2018-2021</p>
                </div>
            </div>
            <div style={{
                display: "flex",
                gap: "2em",
                marginTop: "1em",
                alignItems: "center",
                justifyContent: "space-around",
                fontWeight: "bold"
            }}>

                <div>
                    <h3 style={{ fontSize: "1.2rem", color: "#d8d8d8" }}>СГУ</h3>
                    <h4>Прикладная математика и информатика</h4>
                    <p style={{ fontSize: "1rem", color: "rgb(19,19,19)" }}>Мастер</p>
                </div>
                <div style={{ backgroundColor: "rgb(19, 19, 19)", padding: "0.4em" }}>
                    <p style={{color: "#d8d8d8",borderRadius:"1em"}}>2021-2023</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}
