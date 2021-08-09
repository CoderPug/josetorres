import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import { ChakraProvider, Flex  } from "@chakra-ui/react"
import { Global } from "@emotion/react"

import { extendTheme } from "@chakra-ui/react"

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