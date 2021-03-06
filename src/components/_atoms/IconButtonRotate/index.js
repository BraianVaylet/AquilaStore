import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { IconButton } from "@chakra-ui/react"

/**
 * IconButtonRotate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente IconButton con efecto de rotación
 */
const IconButtonRotate = ({ icon, onClick }) => (
  <IconButton
    variant="none"
    onClick={onClick}
    size="lg"
    transitionDuration="0.75s"
    transitionProperty="transform"
    borderRadius="9999px"
    _hover={{
      transform: "rotate(360deg) scale(1.25)",
      cursor: "pointer",
    }}
    _focus={{
      borderStyle: "none",
      backgroundColor: "transparent",
    }}
    icon={icon}
  />
)

IconButtonRotate.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default IconButtonRotate
