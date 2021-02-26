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
                <Navigation />
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
                    Software Engineer with more than 10 years of experience, currently focused in the development of native mobile apps in iOS.
                    Vast experience in working using agile frameworks. End to end development. Experience in leading teams. I care about quality of code
                    and UI polishing details. Passionate in self learning.
                    <br/>
                    <br/>
                    When I'm not coding I'm taking photos of <a href="https://www.instagram.com/hugo.el.pugo/" target="_blank">@Hugo.el.pugo</a> 🐶.
                    <br/>
                    <br/>
                    If you want to schedule a meeting with me please do it <a href="https://calendly.com/josetorrescardenas/reunion-general" target="_blank">here</a> 🗓.
                    </div>
                </div>
                <div class ="section-list">
                    <div class="section-list-title">Experience</div>
                    <ul>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Senior Software Engineer / Tech Lead</div>
                                <div class="section-list-item-title-separator">@</div>
                                <div class="section-list-item-b">
                                    <a href="https://santexgroup.com/" target="_blank">Santex</a>
                                </div>
                            </div>
                            <div class="section-list-item-subtitle">
                                2014 - Present
                            </div>
                        </li>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Teaching Assistant</div>
                                <div class="section-list-item-title-separator">@</div>
                                <div class="section-list-item-b">
                                    <a href="https://www.upc.edu.pe/" target="_blank">UPC</a>
                                </div>
                            </div>
                            <div class="section-list-item-subtitle">
                                2020 - Present (Part Time)
                            </div>
                        </li>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">Software Engineer</div>
                                <div class="section-list-item-title-separator">@</div>
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
                                <div class="section-list-item-title-a">Intern</div>
                                <div class="section-list-item-title-separator">@</div>
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
                    <div class="section-list-title">Education</div>
                    <ul>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">M.Sc. Masters in Systems and Information Technology Management</div>
                                <div class="section-list-item-title-separator">|</div>
                                <div>2020 - 2021</div>
                            </div>
                            <div class="section-list-item-subtitle">
                                Universidad Peruana de Ciencias Aplicadas
                            </div>
                        </li>
                        <li>
                            <div class="section-list-item-title">
                                <div class="section-list-item-title-a">B.SE. Bachelor in Software Engineering</div>
                                <div class="section-list-item-title-separator">|</div>
                                <div>2008 - 2013</div>
                            </div>
                            <div class="section-list-item-subtitle">
                                Universidad Peruana de Ciencias Aplicadas
                            </div>
                        </li>
                    </ul>
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