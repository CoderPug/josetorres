import * as React from "react"
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';

import Navigation from "../components/navigation"
import Footer from "../components/footer"

import "../styles/home.scss"
import AvatarImage from '../images/jose-torres-avatar.jpg'

const HomePage = () => {
    const {t} = useTranslation();
    return (
      <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
            <header>
                {/* <Navigation /> */}
            </header>
            <div class="content">
                <div class="section-main">
                    <div class="main-image">
                        <img src={AvatarImage} alt="Jose Torres avatar" class="avatar"/>          
                    </div>
                    <div class="main-title">
                        José Torres
                    </div>
                    <div class="main-social-links">
                        <a href="https://www.linkedin.com/in/coderpug/" target="_blank">Linkedin</a>
                        <div class="main-social-links-separator">|</div>
                        <a href="https://github.com/CoderPug" target="_blank">Github</a>
                        <div class="main-social-links-separator">|</div>
                        <a href="https://twitter.com/CoderPug" target="_blank">Twitter</a>
                    </div>
                    <div class="main-description">
                    Ingeniero de Software con más de 10 años de experiencia, especializado en el desarrollo de aplicaciones móviles nativas en iOS. 
                    Experiencia en proyectos con metodologías ágiles y trabajo orientado a resultados. 
                    Experiencia liderando equipos y desarrollo integral de proyectos de software para clientes internacionales. Desarrollo de mentoring, asesorías y talleres de programación.
                    Cuidadoso en la calidad y los detalles. Apasionado por la investigación de nuevas tecnologías y el aprendizaje continuo.
                    </div>
                </div>
                <div class ="section-list">
                    <div class="section-list-title">Experiencia</div>
                    <ul>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Ingeniero de Software nivel Senior / Líder Técnico</div>
                                <div class="section-list-item-title-separator">-</div>
                                <div class="section-list-item-b">
                                    <a href="https://santexgroup.com/" target="_blank">Santex</a>
                                </div>
                            </div>
                            <div class="section-list-item-subtitle">
                                2014 - Presente
                            </div>
                        </li>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Asistente de Aprendizaje a Distancia</div>
                                <div class="section-list-item-title-separator">-</div>
                                <div class="section-list-item-b">
                                    <a href="https://www.upc.edu.pe/" target="_blank">UPC</a>
                                </div>
                            </div>
                            <div class="section-list-item-subtitle">
                                2020 - Presente (Tiempo Parcial)
                            </div>
                        </li>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Ingeniero de Software</div>
                                <div class="section-list-item-title-separator">-</div>
                                <div class="section-list-item-b">
                                    <a href="https://www.avantica.com/es/" target="_blank">Avantica</a>
                                </div>
                            </div>
                            <div class="section-list-item-subtitle">
                                2013 - 2014
                            </div>
                        </li>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Practicante</div>
                                <div class="section-list-item-title-separator">-</div>
                                <div class="section-list-item-b">
                                    <a href="http://www.onlinestudioproductions.com/" target="_blank">Online Studio Productions</a>
                                </div>
                            </div>
                            <div class="section-list-item-subtitle">
                                2011 - 2013
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="section-list">
                    <div class="section-list-title">Educación</div>
                    <ul>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Maestría en Dirección de Sistemas y Tecnologías de la Información</div>
                                <div class="section-list-item-title-separator">|</div>
                                <div>2020 - 2021</div>
                            </div>
                            <div class="section-list-item-subtitle">
                                Universidad Peruana de Ciencias Aplicadas
                            </div>
                        </li>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Título en Ingeniería de Software</div>
                                <div class="section-list-item-title-separator">|</div>
                                <div>2008 - 2013</div>
                            </div>
                            <div class="section-list-item-subtitle">
                                Universidad Peruana de Ciencias Aplicadas
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="section-message">
                    <br/>
                    <br/>
                    Amo los animales y me encantan los pugs. Cuando no estoy trabajando estoy jugando con <a href="https://www.instagram.com/hugo.el.pugo/" target="_blank">@Hugo.el.pugo</a> 🐶.
                    <br/>
                    <br/>
                    🗓 Puedes separar una reunión conmigo <a href="https://calendly.com/josetorrescardenas/reunion-general" target="_blank">aquí</a>.
                </div>
            </div>
        </body>
        <Footer />
      </html>
    )
  }
  
  export default HomePage;
  
  export const query = graphql`
    query($language: String!) {
      locales: allLocale(filter: {language: {eq: $language}}) {
        edges {
          node {
            ns
            data
            language
          }
        }
      }
    }
  `;