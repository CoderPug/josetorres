import * as React from "react"
import { Trans } from 'gatsby-plugin-react-i18next';

import { Link, Box, Flex, Text, Stack, Center, Tooltip } from "@chakra-ui/react"

import "../styles/footer.scss"

import PugIcon from "./UI/pugIcon"

const HeartIcon = () => (
    <svg viewBox="0 0 32 29.6" width="14" fill="#F05454" class="heart">
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg>
);

const Footer = (props) => {
    return (
        <Box 
            as="footer"
            py="6"
            maxW="714"
            margin="0 auto"
            fontWeight="light"
            fontSize="xs"
        >
            <Flex
                direction={{ base: 'column', md: 'row' }}
                maxW={{ base: 'xl', md: '7xl' }}
                mx="auto"
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: '2', md: '8' }}
                    textAlign={{ base: 'center', md: 'start' }}
                    w="full"
                >
                    <Text>&copy; {new Date().getFullYear()} - <Trans>footer-rights</Trans> </Text>
                    <Box flexGrow="1"/>
                    { props.showSocialMediaLinks ? 
                        <div>
                            <Link href="https://www.twitter.com/coderpug" target="_blank" rel="noreferrer" class="without-style">Twitter</Link> /&nbsp;
                            <Link href="https://github.com/CoderPug" target="_blank" rel="noreferrer" class="without-style">Github</Link> /&nbsp;
                            <Link href="https://www.linkedin.com/in/coderpug/" target="_blank" rel="noreferrer" class="without-style">Linkedin</Link>
                        </div>
                        :
                        null
                    }
                </Stack>
            </Flex>

            <Tooltip label="CoderPug" aria-label="A tooltip">
                <Center margin="4">
                    <Trans>footer-with</Trans> <HeartIcon /> <Trans>footer-by</Trans> <PugIcon/>
                </Center>
            </Tooltip>

        </Box>
    )
}

export default Footer;