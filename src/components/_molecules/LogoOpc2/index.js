import React from "react"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
// assets
import { LogoIconOutline } from "assets/icons"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"

/**
 * LogoOpc2 Component
 * @component
 * @author Braian D. Vaylet
 * @description Logo con titulo opción 2
 */
const LogoOpc2 = () => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex direction="row" align="center" justify="flex-start">
      <LogoIconOutline boxSize="2rem" color={!backgroundColor} mr={2} />
      <Text
        fontWeight="bold"
        color={!backgroundColor}
        fontStyle="italic"
        letterSpacing="1px"
      >
        AQUILA STORE
      </Text>
    </Flex>
  )
}

export default LogoOpc2
