import React from "react";
import './index.css';

export const DashboardPage = () => {

    return (
        <div>
            <body>
            <header>
                <h2> Волевая организация</h2>
                <nav>
                    <li><a href="#">Почта</a></li>
                    <li><a href="#">404</a></li>
                    <li><a href="#">Контакты</a></li>
                </nav>
            </header>

            <section className="hero">
                <div className="background-image"
                     style={{backgroundImage: "url(../../media/main-bg.jpg)"}}/>
                <div className="hero-content-area">
                    <h1>Методика исследования волевой организации личности</h1>
                    <h3> Оборудование: опросник, бланк ответов, ручка.</h3>
                    <a href="/auth-code" className="btn">Начать тест</a>
                </div>

            </section>

            <section className="destinations">
                <h3 className="title">Инструкция:</h3>
                <p style={{ color: '#555'}}>
                    Вам предлагается ответить на вопросы, направленные на выяснение некоторых
                    особенностей вашей личности и вашего характера. Прочитайте каждое утверждение
                    и в графе ответов поставьте знак «+» против выбранного вами варианта.
                    Варианты ответов: «Определенно «да», «Скорее «да», чем «нет», «Скорее «нет»,
                    чем «да», «Определенно «нет».
                    Искренние ответы позволят вам получить верное о себе представление и в
                    удущем учесть как свои слабые, так и сильные стороны характера. И напротив,
                    желание показаться лучше, чем вы есть на самом делe, обернется пустой тратой
                    времени или получением сведений, не соответствующих действительности.
                </p>
                <hr/>

            </section>


            <section className="contact">
                <h3 className="title">Волевые качества</h3>
                <p style={{ color: '#555'}}>
                    <ul style={{ listStyle: 'disc' }}>
                        <li>Ценностно-смысловая организация личности </li>
                        <li>Организация деятельности  </li>
                        <li>Решительность  </li>
                        <li>Настойчивость   </li>
                        <li>Самообладание   </li>
                        <li>Самостоятельность   </li>
                    </ul>
                </p>
                <hr/>

            </section>

            <footer>
                <ul>
                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-snapchat-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-github-square"></i></a></li>
                </ul>
                <p>Made by Pardeep Singh</p>
                <p>No attribution required. you can remove this footer.</p>
            </footer>

            </body>
        </div>
    )
}
