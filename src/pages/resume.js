import * as React from "react"
import { useState } from 'react'
import { graphql } from 'gatsby';
import { I18nextContext } from 'gatsby-plugin-react-i18next';

import { SimpleGrid, Box, HStack, Stack, GridItem, ListItem, UnorderedList, Button } from "@chakra-ui/react"
import MainLayout from "./mainLayout"

import resumeDataES from  "../content/resume-es.yaml"
import resumeDataEN from  "../content/resume-en.yaml"

const ResumePage = () => {

    const [isExperienceExpanded, setIsExperienceExpanded] = useState(false)

    const updateContent = () => {
        setIsExperienceExpanded(!isExperienceExpanded)
    }

    const context = React.useContext(I18nextContext)
    const resumeData = context.language === "es" ? resumeDataES : resumeDataEN

    return (
        <MainLayout children={

            <SimpleGrid columns="8" spacing="5" maxW="960px" alignItems="center" mx="auto">
                
                <GridItem 
                    colStart={{md:2, base:1}}
                    colEnd={{md:8, base:9}}
                    mt={{base: "20px", md:"140px"}}
                    margin={{base:"20px"}}>

                    <Box lineHeight="short" fontSize="sm" marginTop="12">
                        { resumeData.summary }
                    </Box>

                    {/* Experience Section */}

                    <Box fontWeight="bold" fontSize="xl" marginTop="7">
                        { resumeData.experience.title }
                        <Button className="button-actionable" variant='link' marginLeft="-2.5" onClick={ updateContent }>
                            +
                        </Button>
                    </Box>
                    {
                        resumeData.experience.content.map((data, index) => {
                            return (
                                <Box marginTop={ index > 0 ? isExperienceExpanded ? "7" : "3" : "3"}>
                                    <Stack direction={{base:['column'], md:['row']}} align={{md:'center'}}>
                                        <Box fontWeight="bold" fontSize={ isExperienceExpanded ? "lg" : "g" }>{ data.title ?? "" }</Box>
                                        {
                                            <Box fontWeight="semibold" fontSize="sm">{ data.subtitle ?? "" }</Box>
                                        }
                                    </Stack>
                                    { 
                                        data.places.map((place, index) => {
                                            return (
                                                <Box marginTop="2">
                                                    <HStack>
                                                        <Box fontWeight={ isExperienceExpanded ? "bold" : "regular" } fontSize="sm">{ place.name ?? "" }</Box>
                                                        <Box fontSize="xs" color="#888888" paddingTop="0.5">
                                                            <a href={ place.url } target="_blank" class="with-style">{ place.url ?? "" }</a>
                                                        </Box>
                                                    </HStack>
                                                    <Box fontStyle="italic" fontSize="sm" className="place-description">{ place.description ?? "" }</Box>
                                                    <Box fontSize="sm">
                                                        <UnorderedList>
                                                            {
                                                                isExperienceExpanded ?
                                                                place.details?.map((item, index) => {
                                                                    return (
                                                                        <ListItem>{ item }</ListItem>       
                                                                    )
                                                                }) : null
                                                            }
                                                         </UnorderedList>
                                                    </Box>
                                                    <Box marginLeft="3">
                                                        {
                                                            isExperienceExpanded ?
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
                                                            }) : null
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