import * as React from "react"

import { SimpleGrid, Text, Box, GridItem  } from "@chakra-ui/react"
import MainLayout from "./mainLayout"

import { Trans } from 'gatsby-plugin-react-i18next';

import { graphql } from 'gatsby';

const HomePage = () => {
    return (
        <MainLayout children={

            <SimpleGrid columns="8" spacing="5" minW="250px" maxW="960px" alignItems="center" mx="auto">
                <GridItem 
                    colStart={2} 
                    colEnd={8}
                    h="350"
                    position="relative" 
                    textAlign="center"
                >
                    <Box position="absolute" bottom="0">
                        <Text
                            color="primary.100"
                            fontSize="3xl"
                            fontWeight="extrabold"
                            lineHeight="shorter"
                            >
                            404!
                        </Text>
                        <Box 
                            lineHeight="short"
                            fontWeight="regular"
                            fontSize="sm"
                            marginTop="2"
                        >
                            <Trans>404-message</Trans>
                            </Box>
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