import * as React from "react"

import { SimpleGrid, Text, Box, GridItem  } from "@chakra-ui/react"
import MainLayout from "./mainLayout"

const HomePage = () => {
    return (
        <MainLayout children={

            <SimpleGrid columns="8" spacing="5" maxW="960px" alignItems="center" mx="auto">
                <GridItem 
                    colStart={2} 
                    colEnd={{base: 8, md: 5}} 
                    h="350" 
                    position="relative" 
                >
                    <Box position="absolute" bottom="0">
                        <Text
                            color="primary.100"
                            fontSize="3xl"
                            fontWeight="extrabold"
                            lineHeight="shorter"
                            >
                            Ingeniero de Software implementado aplicaciones de alto impacto
                        </Text>
                        <Box 
                            layerStyle="selected"
                            lineHeight="short"
                            fontWeight="regular"
                            fontSize="sm"
                            marginTop="2"
                        >
                            Visión de producto e impacto en los objetivos empresariales
                            </Box>
                    </Box>
                </GridItem>

                <GridItem
                    colStart={5}
                    colEnd={8}
                    h={{base: "0" ,md: "350"}}
                >
                </GridItem>

                <GridItem 
                    colStart={{base: 2, md: 5}}
                    colEnd={8}
                    h="10"
                    fontSize="sm"
                >
                    <Box 
                        layerStyle="selected"
                        textAlign={{base: "center", md: "right"}}
                        lineHeight="short"
                        marginTop="12"
                    >
                        Disfruto de las buenas conversaciones con un buen café. Puedes agendar una cita conmigo  <a href="https://calendly.com/josetorrescardenas/reunion-general" target="_blank">aquí</a>
                    </Box>
                </GridItem>
            </SimpleGrid>

        }/>
    )
  }
  
  export default HomePage;