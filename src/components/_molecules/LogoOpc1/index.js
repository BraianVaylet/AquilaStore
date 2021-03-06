import React from "react"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
// assets
import { LogoIconColor } from "assets/icons"

/**
 * LogoOpc1 Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Logo de la plataforma
 */
const LogoOpc1 = () => (
  <Flex justify="row" align="center" direction="row">
    <LogoIconColor boxSize="2rem" mr={2} />
    <Text
      fontSize="1.5rem"
      color="primary"
      fontWeight="extrabold"
      fontStyle="italic"
      letterSpacing="1px"
    >
      Aquila
    </Text>
  </Flex>
)

export default LogoOpc1
