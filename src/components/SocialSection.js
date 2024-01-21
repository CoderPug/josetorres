import React from "react"
import { VStack, HStack, Circle } from "@chakra-ui/react";

import "../styles/social.scss"

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" class="social-icon-svg">
        <path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"/>
    </svg>
)

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40" class="social-icon-svg">
        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
    </svg>    
)

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 22" width="25" class="social-icon-svg">
        <title>Twitter logo</title>
        <path fill="inherit" d="M.5 18.7c10 6.2 22.7-.7 22.5-13 1-.7 1.9-1.6 2.6-2.7-1 .5-2 .8-3.1.9 1.14-.7 2-1.7 2.4-2.9-1 .6-2 1-3.3 1.3-4.3-4.13-10 .3-8.8 4.7-4.3-.2-8-2.3-10.6-5.4C1 4 1.5 7.1 3.9 8.5 3 8.4 2 8.2 1.5 7.8c0 2.6 1.8 4.6 4.1 5.1-.8.2-1.5.3-2.3.1.6 2 2.6 3.6 4.8 3.6-2 1.6-4.7 2.4-7.6 2.1z"/>
    </svg>
)

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="35" height="35" class="social-icon-svg-github">
        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
)

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40" class="social-icon-svg">
      <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/>
    </svg>
)

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29" class="social-icon-svg">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
    </svg>    
)

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="35" class="social-icon-svg">
        <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path>
    </svg>
)

const ReadCVIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256" class="social-icon-svg">
        <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.36 8.36 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.55 7.55 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.27 8.27 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27"/>
    </svg>
)

const SocialSection = (props) => {
    return(
        <VStack spacing="20px">
            <HStack spacing="30px">
                <Circle className="social-icon-content"> 
                    <button><a href="mailto:torres.cardenas.jose@me.com"><EmailIcon/></a></button>
                </Circle>
                <Circle className="social-icon-content">
                    <button><a href="https://www.linkedin.com/in/coderpug/" target="_blank" rel="noreferrer"><LinkedinIcon/></a></button>
                </Circle>
                <Circle className="social-icon-content">
                    <button><a href="https://read.cv/coderpug" target="_blank" rel="noreferrer"><ReadCVIcon/></a></button>
                </Circle>
                <Circle className="social-icon-content">
                    <button><a href="https://www.twitter.com/coderpug" target="_blank" rel="noreferrer"><TwitterIcon/></a></button>
                </Circle>
                <Circle className="social-icon-content">
                    <button><a href="https://www.twitter.com/coderpug" target="_blank" rel="noreferrer"><GithubIcon/></a></button>
                </Circle>
            </HStack>
            {
                (props.showAll) ? 
                    <HStack spacing="30px">
                        <Circle className="social-icon-content">
                            <button><a href="https://www.facebook.com/joseemiliotorrescardenas" target="_blank" rel="noreferrer"><FacebookIcon/></a></button>
                        </Circle>
                        <Circle className="social-icon-content">
                            <button><a href="https://www.instagram.com/josetorrespe/" target="_blank" rel="noreferrer"><InstagramIcon/></a></button>
                        </Circle>
                        <Circle className="social-icon-content">
                            <button><a href="https://api.whatsapp.com/send?phone=+34644783761&text=Hey!"><WhatsAppIcon/></a></button>
                        </Circle>
                    </HStack>
                    : <></>
            }
        </VStack>
    )
}

export default SocialSection;



