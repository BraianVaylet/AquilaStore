import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { StarIcon } from "@chakra-ui/icons"

/**
 * CustomStarIcon Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente estrella para las calificaciones
 */
const CustomStarIcon = ({ active }) => (
  <StarIcon
    mr={2}
    boxSize={6}
    color={active ? "brand.primary" : "brand.secundary"}
  />
)

CustomStarIcon.defaultProps = {
  active: false,
}

CustomStarIcon.propTypes = {
  active: PropTypes.bool,
}

export default CustomStarIcon
