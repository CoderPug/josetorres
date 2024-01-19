import * as React from "react"
import { useState } from 'react'
import { graphql } from 'gatsby';
import { I18nextContext } from 'gatsby-plugin-react-i18next';

import { SimpleGrid, Box, Stack, GridItem } from "@chakra-ui/react"
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
                    colStart={{md:2, base:2}}
                    colEnd={{md:8, base:8}}
                    mt={{base: "20px", md:"140px"}}>

                    <Box lineHeight="short" fontSize="sm" marginTop="12">
                        { resumeData.summary }
                    </Box>
                </GridItem>

                {/* Experience Section */}

                <GridItem
                    colStart={{md:2, base:2}}
                    colEnd={{md:4, base:8}}
                    paddingTop="25px"
                    height="100%">
                    <Box fontWeight="bold" fontSize="md">
                        { resumeData.experience.title }
                    </Box>
                </GridItem>

                <GridItem
                    colStart={{md:4, base:2}}
                    colEnd={{md:9, base:8}}
                    marginTop={{md: "20px", base:"0"}}
                    >
                    {
                    resumeData.experience.content.map((data, index) => {
                        return (
                            <Box fontSize="sm" marginTop="1">
                                <Stack direction={{sm:"row", base:"column"}} align={{md:'center'}} spacing={{sm:"2", base:"0"}}>
                                    <Box fontWeight="semibold">{ data.title ?? "" }</Box>
                                    <Box fontWeight="light" fontSize="xs">
                                        <a href={ data.places[0].url } target="_blank" class="with-style">{ data.places[0].name ?? "" }</a>
                                    </Box>
                                </Stack>
                                <Box paddingTop={{sm:"0", base:"1"}} fontWeight="light" fontSize="xs" className="subtitle">{ data.subtitle ?? "" }</Box>
                            </Box>
                        )
                    })
                    }
                </GridItem>

                {/* Education Section */}

                <GridItem
                    colStart={{md:2, base:2}}
                    colEnd={{md:4, base:8}}
                    paddingTop="25px"
                    height="100%">
                    <Box fontWeight="bold" fontSize="md">
                        { resumeData.education.title }
                    </Box>
                </GridItem>

                <GridItem
                    colStart={{md:4, base:2}}
                    colEnd={{md:8, base:8}}
                    marginTop={{md: "20px", base:"0"}}
                    marginBottom="100px"
                    >
                    {
                        resumeData.education.content.map((data, index) => {
                            return (
                                <Box fontSize="sm" marginTop="5px">
                                    <Box fontWeight="semibold">{ data.title }</Box>
                                    <Box fontWeight="light" fontSize="xs" className="subtitle">{ data.subtitle }</Box>
                                </Box>
                            )
                        })
                    }
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