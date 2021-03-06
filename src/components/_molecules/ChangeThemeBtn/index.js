// react
import React from "react"
// chakra-ui
import { useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
// components
import IconButtonRotate from "components/_atoms/IconButtonRotate"

/**
 * ChangeThemeBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón para cambiar el theme del proyecto Dark-Light
 */
const ChangeThemeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButtonRotate
      onClick={toggleColorMode}
      icon={
        colorMode === "light" ? (
          <MoonIcon boxSize="1.5rem" />
        ) : (
          <SunIcon boxSize="1.5rem" />
        )
      }
    />
  )
}

export default ChangeThemeBtn
