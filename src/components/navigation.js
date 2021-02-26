import * as React from "react"
import { Link } from "gatsby"

import "../styles/navigation.scss"

const Navigation = () => {
    return (
        <nav>
            <input type="checkbox" id="check"/>
            <label for="check" class="checkbtn">
                <i class="fas fa-bars-bars">=</i>
            </label>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                {/* <li><a href="#">Life</a></li> */}
                {/* <li><a href="#">Blog</a></li> */}
            </ul>
        </nav>
    )
  }
  
  export default Navigation;

