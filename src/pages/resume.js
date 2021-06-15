import * as React from "react"

import { SimpleGrid, Box, HStack, GridItem, ListItem, UnorderedList } from "@chakra-ui/react"
import MainLayout from "./mainLayout"

import resumeData from  "../content/resume.yaml"

const ResumePage = () => {
    return (
        <MainLayout children={

            <SimpleGrid columns="8" spacing="5" maxW="960px" alignItems="center" mx="auto">
                
                <GridItem 
                    colStart={2}
                    colEnd={8}
                    mt={{base: "20px", md:"140px"}}>

                    <Box lineHeight="short" fontSize="sm" marginTop="12">
                        { resumeData.summary }
                    </Box>

                    {/* Experience Section */}

                    <Box fontWeight="bold" fontSize="xl" marginTop="7">
                        { resumeData.experience.title }
                    </Box>
                    {
                        resumeData.experience.content.map((data, index) => {
                            return (
                                <Box marginTop={ index > 0 ? "7" : "3"}>
                                    <HStack>
                                        <Box fontWeight="bold" fontSize="lg">{ data.title ?? "" }</Box>
                                        {
                                            data.current ? 
                                                <Box fontWeight="bold" fontSize="sm" color="#12CAD6">{ data.subtitle ?? "" }</Box>
                                                :
                                                <Box fontWeight="semibold" fontSize="sm">{ data.subtitle ?? "" }</Box>
                                        }
                                    </HStack>
                                    { 
                                        data.places.map((place, index) => {
                                            return (
                                                <Box marginTop="2">
                                                    <HStack>
                                                        <Box fontWeight="bold" fontSize="sm">{ place.name ?? "" }</Box>
                                                        <Box fontSize="xs" color="#888888" paddingTop="0.5">
                                                            <a href={ place.url } target="_blank">{ place.url ?? "" }</a>
                                                        </Box>
                                                    </HStack>
                                                    <Box fontStyle="italic" fontSize="sm" color="#888888">{ place.description ?? "" }</Box>
                                                    <Box fontSize="sm">
                                                        <UnorderedList>
                                                            {
                                                                place.details?.map((item, index) => {
                                                                    return (
                                                                        <ListItem>{ item }</ListItem>       
                                                                    )
                                                                })                                                        
                                                            }
                                                         </UnorderedList>
                                                    </Box>
                                                    <Box marginLeft="3">
                                                        {
                                                            place.projects?.map((project, index) => {
                                                                return (
                                                                    <Box>
                                                                        <Box fontWeight="bold" fontSize="sm" marginTop="1" color={ project.current ? "#12CAD6" : "black"}>
                                                                        &#8250; { project.title }
                                                                        </Box>
                                                                        <Box marginLeft="2.5">
                                                                            {
                                                                                project.description?.map((item, index) => {
                                                                                    return (<Box fontSize="sm">{ item }</Box>)
                                                                                })
                                                                            }
                                                                        </Box>
                                                                    </Box>
                                                                )
                                                            })
                                                        }
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            )
                        })
                    }

                    {/* Education section */}

                    <Box fontWeight="bold" fontSize="xl" marginTop="7">
                        { resumeData.education.title }
                    </Box>
                    <UnorderedList marginTop="3" fontSize="sm">
                    {
                        resumeData.education.content.map((data, index) => {
                            return (
                                <ListItem>
                                    <Box>{ data.title }</Box>
                                    <Box fontSize="xs" fontStyle="italic" color="#888888">{ data.subtitle }</Box>
                                </ListItem>
                            )
                        })
                    }
                    </UnorderedList>
                    
                    {/* Publications */}

                    <Box fontWeight="bold" fontSize="xl" marginTop="7">
                        { resumeData.publications.title }
                    </Box>
                    <UnorderedList marginTop="3" fontSize="sm">
                    {
                        resumeData.publications.content.map((publication, index) => {
                            return (
                                <ListItem>
                                    <Box>{ publication.title }</Box>
                                    <Box fontSize="xs" fontStyle="italic" color="#888888"><a href={ publication.url } target="_blank">{ publication.url }</a></Box>
                                </ListItem>
                            )
                        })
                    }
                    </UnorderedList>

                    {/* Conferences */}

                    <Box fontWeight="bold" fontSize="xl" marginTop="7">
                        { resumeData.conferences.title }
                    </Box>
                    <UnorderedList fontSize="sm" marginTop="3" marginBottom="10rem">
                    {
                        resumeData.conferences.content.map((conference, index) => {
                            return (
                                <ListItem>
                                    <HStack>
                                        <Box>{ conference.title }</Box>
                                        <Box color="#888888">{ conference.subtitle }</Box>
                                    </HStack>
                                    <Box fontSize="xs" fontStyle="italic" color="#888888"><a href={ conference.url } target="_blank">{ conference.url }</a></Box>
                                </ListItem>
                            )
                        })
                    }
                    </UnorderedList>

                </GridItem>
            </SimpleGrid>
        }/>
    )
  }
  
  export default ResumePage;