import React from "react"
import { Link, Trans } from 'gatsby-plugin-react-i18next';
import { Box, Flex, Text } from "@chakra-ui/react"

import Logo from "../components/UI/logo"

import "../styles/header.scss"

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 18 18" class="menu-close">
    <title>Close</title>
    <path d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"/>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 20 20" class="menu-icon">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      ml={{ base: 0, sm: isLast ? 0 : 4 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  )
}

const Header = (props) => {

  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w={{base: "200px", md: "714px"}}
      maxWidth="714px"
      mt={8}
      mb={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["primary.700", "primary.700", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="150px"
          color="primary.500"
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          fontSize="sm"
        >
          <MenuItems to="/"> <a class="without-style"><Trans>navigation-home</Trans></a> </MenuItems>
          <MenuItems to="/resume"> <a class="without-style"><Trans>navigation-resume</Trans></a> </MenuItems>
          {/* <MenuItems to="/">Proyectos</MenuItems>
          <MenuItems to="/">Blog</MenuItems> */}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header;