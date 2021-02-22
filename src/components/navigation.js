import * as React from "react"

import "../styles/navigation.scss"

const Navigation = () => {
    return (
        <nav>
            <input type="checkbox" id="check"/>
            <label for="check" class="checkbtn">
                <i class="fas fa-bars-bars">=</i>
            </label>
            <ul>
                <li><a class="active" href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                {/* <li><a href="#">Life</a></li> */}
                {/* <li><a href="#">Blog</a></li> */}
            </ul>
        </nav>
    )
  }
  
  export default Navigation;

