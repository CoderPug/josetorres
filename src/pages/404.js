import * as React from "react"

import { SimpleGrid, Text, Box, GridItem  } from "@chakra-ui/react"
import MainLayout from "./mainLayout"

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
                            Coche aún no implementó esta página.
                            </Box>
                    </Box>
                </GridItem>

            </SimpleGrid>

        }/>
    )
  }
  
  export default HomePage;