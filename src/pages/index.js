import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import { ChakraProvider, SimpleGrid, Text, Box, GridItem, Flex  } from "@chakra-ui/react"
import { Global } from "@emotion/react"

import { extendTheme } from "@chakra-ui/react"

const Fonts = () => (
    <Global
      styles={`
        /* Copied from https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700&display=swap */
        /* latin-ext */
        /* devanagari */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiGyp8kv8JHgFVrLPTucXtAOvWDSHFF.woff2) format('woff2');
        unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiGyp8kv8JHgFVrLPTufntAOvWDSHFF.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiGyp8kv8JHgFVrLPTucHtAOvWDSA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* devanagari */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z11lFd2JQEl8qw.woff2) format('woff2');
        unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1JlFd2JQEl8qw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* devanagari */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
        unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* devanagari */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2) format('woff2');
        unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        `}
    />
  )

const theme = extendTheme({
    colors: {
        primary: {
          50: "#000",
          100: "#000",
          900: "#000",
        },
    },
    fonts: {
        html: "Poppins",
    },
    lineHeights: {
        normal: "normal",
        // none: 1,
        // shorter: 1.25,
        // short: 1.375,
        // base: 1.5,
        // tall: 1.625,
        // taller: "2",
        // "3": ".75rem",
        // "4": "1rem",
        // "5": "1.25rem",
        // "6": "1.5rem",
        // "7": "1.75rem",
        // "8": "2rem",
        // "9": "2.25rem",
        // "10": "2.5rem",
    },
})


const HomePage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Flex
                theme={theme}
                direction="column"
                align="center"
                maxW={{ xl: "1200px" }}
                h="900"
                m="0 auto"
                // {...props}
                >
                
                {/* {props.children} */}
                {/* <Footer /> */}

                <Header />
                <SimpleGrid columns="8" spacing="5" maxW="960px" alignItems="center" mx="auto">
                    {/* 
                    <Box bg="tomato" height="100px"></Box>
                    <Box bg="tomato" height="100px"></Box>
                    <Box bg="tomato" height="100px"></Box>
                    <Box bg="tomato" height="100px"></Box>
                    <Box bg="tomato" height="100px"></Box>
                    <Box bg="tomato" height="100px"></Box>
                    <Box bg="tomato" height="100px"></Box>
                    <Box bg="tomato" height="100px"></Box> 
                    */}

                    <GridItem 
                        colStart={2} 
                        colEnd={5} 
                        h="350" 
                        // bg="papayawhip" 
                        position="relative" 
                    >
                        <Box position="absolute" bottom="0">
                            <Text
                                color="primary.100"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                lineHeight="shorter"
                                >
                                Ingeniero de Software implementado aplicaciones de alto impacto
                            </Text>
                            <Box 
                                layerStyle="selected"
                                lineHeight="short"
                                fontWeight="light"
                                fontSize="sm"
                                marginTop="2"
                            >
                                Visión de producto e impacto en el negocio
                                </Box>
                        </Box>
                    </GridItem>

                    <GridItem 
                        colStart={5} 
                        colEnd={8} 
                        h="350" 
                        // bg="papayawhip"
                    >
                    </GridItem>

                    <GridItem 
                        colStart={5} 
                        colEnd={8} 
                        h="10" 
                        // bg="papayawhip"
                        fontSize="sm"
                    >
                        <Box 
                            layerStyle="selected" 
                            textAlign="right"
                            lineHeight="short"
                            marginTop="12"
                        >
                            Me gustan las buenas conversaciones con un buen café.  Si sientes que puedo ayudarte, agenda una cita conmigo aquí
                        </Box>
                    </GridItem>
                    
                </SimpleGrid>
            </Flex>
            <Footer />
        </ChakraProvider>
    )
  }
  
  export default HomePage;