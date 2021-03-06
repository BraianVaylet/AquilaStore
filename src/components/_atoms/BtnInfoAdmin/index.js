import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Button, Flex, Text } from "@chakra-ui/react"

/**
 * BtnInfoAdmin
 * @component
 * @author Braian D. Vaylet
 * @description Componente con boton y label para uso informativo en el panel de administrador
 */
const BtnInfoAdmin = ({ btnText, infoText, ...props }) => {
  return (
    <Flex align="center" {...props}>
      <Button>{btnText}</Button>
      <Text ml={2}>{infoText}</Text>
    </Flex>
  )
}

BtnInfoAdmin.propTypes = {
  btnText: PropTypes.string,
  infoText: PropTypes.string,
}

export default BtnInfoAdmin
