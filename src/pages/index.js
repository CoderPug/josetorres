import * as React from "react"

import { SimpleGrid, Text, Box, GridItem, Image, Center } from "@chakra-ui/react"
import MainLayout from "./mainLayout"

import AvatarHomeImageA from '../images/home-josetorres-image-xl-1.png'
import AvatarHomeImageB from '../images/home-josetorres-image-xl-2.png'
import AvatarHomeImageC from '../images/home-josetorres-image-md-1.png'
import AvatarHomeImageD from '../images/home-josetorres-image-md-2.png'

const imagesArray = [AvatarHomeImageA, AvatarHomeImageB]
const imageElement = imagesArray[Math.floor(Math.random() * imagesArray.length)]
const mediumImagesArray = [AvatarHomeImageC, AvatarHomeImageD]
const mediumImageElement = mediumImagesArray[Math.floor(Math.random() * mediumImagesArray.length)]

const HomePage = () => {
    return (
        <MainLayout children={

            <SimpleGrid columns="8" spacing="5" maxW="960px" alignItems="center" mx="auto">
                <GridItem 
                    colStart={2} 
                    colEnd={{base: 8, md: 5}} 
                    h={{base:450, md:400}}
                    position="relative" 
                >
                    <Center display={{base: "flex", md: "none"}}>
                        <Image 
                            borderRadius="full"
                            boxSize="200px"
                            mt="5"
                            src={ mediumImageElement } 
                        />                        
                    </Center>

                    <Box position="absolute" bottom={{md: "0"}} mt={{base: "10"}} >
                        <Text
                            color="primary.100"
                            fontSize="3xl"
                            fontWeight="bold"
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
                    colStart={6}
                    colEnd={8}
                    h={{base: "0", md: "350"}}
                >
                    <Box display={{base: "none", md: "flex"}}>
                        <Image 
                            mt="5"
                            boxSize="620px"
                            objectFit="scale-down"
                            ml="35px"
                            src={ imageElement } 
                        />
                    </Box>
                </GridItem>

                <GridItem 
                    colStart={{base: 2, md: 3}}
                    colEnd={{base: 8, md: 6}}
                    fontSize="sm"
                >
                    <Box 
                        layerStyle="selected"
                        textAlign={{base: "left", md: "right"}}
                        lineHeight="short"
                        mt={{base: "50px", md: "145px"}}
                    >
                        Disfruto de las buenas conversaciones con un buen café. Puedes agendar una cita conmigo  <a href="https://calendly.com/josetorrescardenas/reunion-general" target="_blank">aquí</a>
                    </Box>
                </GridItem>
            </SimpleGrid>

        }/>
    )
  }
  
  export default HomePage;