import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { CloseIcon } from "@chakra-ui/icons"
import { Button, Collapse, Flex } from "@chakra-ui/react"

/**
 * CustomCollapse Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente colapsable, alerta, aviso
 */
const CustomCollapse = ({ children, isOpen, onClose, ...props }) => {
  return (
    <Collapse direction="top" in={isOpen} style={{ zIndex: 10 }} animateOpacity>
      <Flex
        p="20px"
        color="white"
        bg="brand.primary"
        shadow="md"
        align="center"
        justify="space-between"
        {...props}
      >
        {children}
        <Button variant="ghost" onClick={onClose}>
          <CloseIcon />
        </Button>
      </Flex>
    </Collapse>
  )
}

CustomCollapse.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default CustomCollapse
