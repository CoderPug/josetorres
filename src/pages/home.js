import * as React from "react"
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';

import Navigation from "../components/navigation"

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
                    <div class="main-description">
                        Result-oriented, agile-enthusiast software engineer. I love to put a lot of effort on the small design details that will improve the usability of a product. I consider myself to be in a constant learning and I like to perform researches on new technologies during my free time.
                        Technical Skills
                        Languages: Objective-C (4+), C++ (2+), Swift (1+), SQL (2+)
                        Databases: MySQL (2+), SQL Server (2+), Postgresql (1+)
                        Development software: Xcode (5+), Visual Studio (3+), SVN (2+), Git (4+) Technologies: RESTful web services (4+)
                        Application/Web servers: -
                        Platforms: Mac OSX (4+), UNIX/Linux (3+) Cloud services: Parse (1+)
                    </div>
                </div>
                <div class ="section-experience">
                    <ul>
                        <li>
                            <div class="experience-item-title">
                                <div class="experience-item-title-position">Senior Software Engineer</div>
                                <div class="experience-item-title-separator">@</div>
                                <div class="experience-item-title-job">Santex</div>
                            </div>
                            <div class="experience-item-subtitle">
                                2014 - current
                            </div>
                        </li>
                        <li>
                            <div class="experience-item-title">
                                <div class="experience-item-title-position">Teaching assistant</div>
                                <div class="experience-item-title-separator">@</div>
                                <div class="experience-item-title-job">UPC</div>
                            </div>
                            <div class="experience-item-subtitle">
                                2020 - current
                            </div>
                        </li>
                        <li>
                            <div class="experience-item-title">
                                <div class="experience-item-title-position">Software Engineer</div>
                                <div class="experience-item-title-separator">@</div>
                                <div class="experience-item-title-job">Avantica</div>
                            </div>
                            <div class="experience-item-subtitle">
                                2012 - 2014
                            </div>
                        </li>
                        <li>
                            <div class="experience-item-title">
                                <div class="experience-item-title-position">Intern</div>
                                <div class="experience-item-title-separator">@</div>
                                <div class="experience-item-title-job">Online Studio Productions</div>
                            </div>
                            <div class="experience-item-subtitle">
                                2011 - 2012
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </body>
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