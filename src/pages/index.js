import * as React from "react"
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';

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
                            <Trans>home-title</Trans>
                        </Text>
                        <Box 
                            layerStyle="selected"
                            lineHeight="short"
                            fontWeight="regular"
                            fontSize="sm"
                            marginTop="2"
                        >
                            <Trans>home-subtitle</Trans>
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
                        <Trans>home-meeting-schedule</Trans>&nbsp;
                        <a href="https://calendly.com/josetorrescardenas/reunion-general" target="_blank"><Trans>home-meeting-schedule-button</Trans></a>
                    </Box>
                </GridItem>
            </SimpleGrid>

        }/>
    )
  }

export default HomePage;

export const query = graphql`
    query ($language: String!) {
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