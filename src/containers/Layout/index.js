import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import Footer from "components/_organisms/Footer"
import NavBarTemplate from "components/_templates/NavBarTemplate"

/**
 * Layout Container
 * @component
 * @author Braian D. Vaylet
 * @description Contenedor Layout, incluye la NavBar y contiene al router
 */
const Layout = ({ children }) => {
  return (
    <Flex direction="column" justify="flex-start" align="center">
      <NavBarTemplate />
      <Flex
        w="100%"
        minH="100vh"
        mt="3.5rem"
        p="1rem"
        zIndex="10"
        align="center"
        direction="column"
        justify="center"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
