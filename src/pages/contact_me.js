import * as React from "react"

import { SimpleGrid, HStack, GridItem, Image, Center, Box, Button, VStack, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"

import BaseLayout from "./baseLayout"
import PugIcon from "../components/UI/pugIcon"

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
                    <Box fontWeight="light">Software Engineer @ Glovo</Box>
                    <Box fontWeight="light">🇵🇪🇪🇸</Box>
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
                    <VStack spacing="20px">
                        <HStack spacing="30px">
                            <button><a href="mailto:torres.cardenas.jose@me.com"><Image width="45px" src={ EmailImage } /> </a></button>
                            <button><a href="https://www.linkedin.com/in/coderpug/" target="_blank" rel="noreferrer"><Image width="45px" src={ LinkedinImage } /> </a></button>
                            <button><a href="https://www.twitter.com/coderpug" target="_blank" rel="noreferrer"><Image width="45px" src={ TwitterImage } /> </a></button>
                            <button><a href="https://github.com/CoderPug" target="_blank" rel="noreferrer"><Image width="45px" src={ GithubImage } /> </a></button>
                        </HStack>
                        {
                                (new URLSearchParams(props.location.search).get("access") === "coche") ? 
                                <HStack spacing="30px">
                                    <button><a href="https://api.whatsapp.com/send?phone=+34644783761&text=Hi!"><Image width="45px" src={ WhatsappImage } />.</a></button>
                                    <button><a href="https://www.facebook.com/joseemiliotorrescardenas" target="_blank" rel="noreferrer"><Image width="45px" src={ FacebookImage } /> </a></button>
                                    <button><a href="https://www.instagram.com/josetorrespe/" target="_blank" rel="noreferrer"><Image width="45px" src={ InstagramImage } /> </a></button>
                                </HStack> 
                                : <></>
                        }
                    </VStack>
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