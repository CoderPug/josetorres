import * as React from "react"
import Header from "../components/header"
import BaseLayout from "./baseLayout"

const MainLayout = (props) => {
    return (
        <BaseLayout>
            <Header />
            {props.children}  
        </BaseLayout>
    )
  }
  
  export default MainLayout;