import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Text } from "@chakra-ui/react"

/**
 *
 * @component
 * @author Braian D. Vaylet
 * @description Separador de texto
 */
const HorizontalSeparator = ({ withSeparator }) => (
  <Text ml={2} mr={2}>
    {withSeparator && "|"}
  </Text>
)

HorizontalSeparator.defaultProps = {
  withSeparator: false,
}

HorizontalSeparator.propTypes = {
  withSeparator: PropTypes.bool,
}

export default HorizontalSeparator
