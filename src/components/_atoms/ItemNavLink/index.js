import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// styles
import { COLORS } from "styles/theme"

/**
 * ItemNavLink Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente link con texto
 */
const ItemNavLink = ({ to, children, ...props }) => (
  <Flex
    align="center"
    as={NavLink}
    activeStyle={{ color: COLORS.secundary }}
    to={to}
    {...props}
  >
    {children}
  </Flex>
)

ItemNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ItemNavLink
