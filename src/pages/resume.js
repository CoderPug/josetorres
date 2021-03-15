import * as React from "react"

import { SimpleGrid, Box, GridItem  } from "@chakra-ui/react"
import MainLayout from "./mainLayout"

const ResumePage = () => {
    return (
        <MainLayout children={

            <SimpleGrid columns="8" spacing="5" maxW="960px" alignItems="center" mx="auto">
                
                <GridItem 
                    colStart={2}
                    colEnd={8}
                    mt={{base: "20px", md:"140px"}}
                >
                    <Box lineHeight="short" marginTop="12" fontSize="sm">
                        Ingeniero de Software con más de 10 años de experiencia, especializado en el desarrollo de aplicaciones móviles nativas en iOS. Experiencia en proyectos con metodologías ágiles y trabajo orientado a resultados. Experiencia liderando equipos y desarrollo integral de proyectos de software para clientes internacionales. Desarrollo de mentoring, asesorías y talleres de programación. Cuidadoso en la calidad y los detalles. Apasionado por la investigación de nuevas tecnologías y el aprendizaje continuo.
                    </Box>

                    <Box fontWeight="bold" fontSize="lg" marginTop="7">
                        Experiencia
                    </Box>
                    <Box marginTop="3">
                        <Box fontSize="sm">
                            Ingeniero de Software nivel Senior / Líder Técnico - <a href="https://santexgroup.com/" target="_blank">Santex</a>
                        </Box>
                        <Box fontSize="xs" color="#888888">
                            2014 - Presente
                        </Box>
                    </Box>
                    <Box marginTop="2">
                        <Box fontSize="sm">
                            Asistente de Aprendizaje a Distancia - <a href="https://www.upc.edu.pe/" target="_blank">UPC</a>
                        </Box>
                        <Box fontSize="xs" color="#888888">
                            2020 - Presente (Tiempo Parcial)
                        </Box>
                    </Box>
                    <Box marginTop="2">
                        <Box fontSize="sm">
                            Ingeniero de Software - <a href="https://www.avantica.com/es/" target="_blank">Avantica</a>
                        </Box>
                        <Box fontSize="xs" color="#888888">
                            2013 - 2014
                        </Box>
                    </Box>
                    <Box marginTop="2">
                        <Box fontSize="sm">
                            Practicante - <a href="http://www.onlinestudioproductions.com/" target="_blank">Online Studio Productions</a>
                        </Box>
                        <Box fontSize="xs" color="#888888">
                            2011 - 2013
                        </Box>
                    </Box>
                    
                    <Box fontWeight="bold" fontSize="lg" marginTop="7">
                        Educación
                    </Box>
                    <Box marginTop="3">
                        <Box fontSize="sm">
                            Maestría en Dirección de Sistemas y Tecnologías de la Información | 2020 - 2021
                        </Box>
                        <Box fontSize="xs" color="#888888">
                            Universidad Peruana de Ciencias Aplicadas
                        </Box>
                    </Box>
                    <Box marginTop="2" mb="80px">
                        <Box fontSize="sm">
                            Título en Ingeniería de Software | 2008 - 2013
                        </Box>
                        <Box fontSize="xs" color="#888888">
                            Universidad Peruana de Ciencias Aplicadas
                        </Box>
                    </Box>
                    
                </GridItem>

            </SimpleGrid>

        }/>
    )
  }
  
  export default ResumePage;