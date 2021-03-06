import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Button } from "@chakra-ui/react"

/**
 * ButtonZoom Componente
 * @component
 * @author Braian D. Vaylet
 * @description Componente button con efecto de zoom
 */
const ButtonZoom = ({ children, onClick, ...props }) => (
  <Button
    variant="none"
    transitionDuration="0.75s"
    transitionProperty="transform"
    borderRadius="9999px"
    _hover={{
      transform: "scale(1.25)",
    }}
    _focus={{
      borderStyle: "none",
      backgroundColor: "transparent",
    }}
    onClick={onClick}
    {...props}
  >
    {children}
  </Button>
)

ButtonZoom.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ButtonZoom
