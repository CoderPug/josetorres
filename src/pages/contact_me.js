import * as React from "react"

import { SimpleGrid, GridItem, Image, Center, Box, Button, VStack, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Link } from "@chakra-ui/react"

import { graphql } from 'gatsby';

import BaseLayout from "./baseLayout"
import PugIcon from "../components/UI/pugIcon"
import SocialSection from "../components/SocialSection"

import AvatarHomeImageC from '../images/home-josetorres-avatar.jpeg'
import TwitterImage from '../images/button-image-twitter.png'
import FacebookImage from '../images/button-image-facebook.png'
import InstagramImage from '../images/button-image-instagram.png'
import LinkedinImage from '../images/button-image-linkedin.png'
import WhatsappImage from '../images/button-image-whatsapp.png'
import GithubImage from '../images/button-image-github.png'
import EmailImage from '../images/button-image-email.png'
import QRCodeImageA from '../images/contact-josetorres-qr-code.jpeg'
import QRCodeImageB from '../images/contact-josetorres-qr-code-personal.jpeg'

const DisplayQRCode = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button variant="outline" onClick={onOpen}>Share QR Code</Button>

        <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody textAlign="center" mt="8">
                Please scan this QR Code <br/> to access my contact page
            </ModalBody>
            <Center paddingBottom="8">
                <VStack>
                    <Image width="70%" src={ (props.personal === true) ? QRCodeImageB : QRCodeImageA }></Image>
                    <PugIcon/>
                </VStack>
            </Center>
            
          </ModalContent>
        </Modal>
      </>
    )
}

const ContactMePage = (props) => {
    return (
        <BaseLayout showSocialMediaLinks={false} children={
            <SimpleGrid columns="8" spacing="5" alignItems="center" mx="auto">
                <GridItem 
                    colStart={1} 
                    colEnd={10}
                    mt="10"
                >
                    <Center>
                        <Image 
                            borderRadius="full"
                            boxSize="200px"
                            mt="5"
                            src={ AvatarHomeImageC } 
                        />             
                    </Center>
                </GridItem>
                <GridItem
                    colStart={1} 
                    colEnd={10}
                    textAlign="center"
                >
                    <Box fontWeight="bold" fontSize="xl">José Torres Cárdenas</Box>
                    <Box fontWeight="light">@coderpug</Box>
                </GridItem>
                <GridItem
                    colStart={1} 
                    colEnd={10}
                    textAlign="center"
                >
                   <Box fontWeight="light">Software Engineer @ <Link href="https://www.glovoapp.com" target="_blank" rel="noreferrer">Glovo</Link></Box>
                   <Box fontWeight="light">🇵🇪&nbsp;🇪🇸</Box>
                </GridItem>
                <GridItem
                    colStart={1} 
                    colEnd={10}
                    textAlign="center"
                >
                    {/* <Box fontWeight="semibold" fontSize="md">Contact me:</Box> */}
                </GridItem>

                <GridItem
                    colStart={1} 
                    colEnd={10}
                    mt="10"
                    alignContent="center"
                >
                    <SocialSection showAll={(new URLSearchParams(props.location.search).get("access") === "coche")} />
                </GridItem>
                <GridItem
                    colStart={1} 
                    colEnd={10}
                    alignContent="center"
                    mt="250px"
                >
                    <Center>
                        <VStack>
                            {
                                (new URLSearchParams(props.location.search).get("mode") === "coche") ? 
                                    <DisplayQRCode personal={ (new URLSearchParams(props.location.search).get("access") === "coche") } />
                                    : <></>
                            }
                            <Button variant="outline">
                                <a href="/">Home</a>
                            </Button>
                        </VStack>
                    </Center>
                </GridItem>
            </SimpleGrid>
        }/>
    )
  }
  
export default ContactMePage;

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