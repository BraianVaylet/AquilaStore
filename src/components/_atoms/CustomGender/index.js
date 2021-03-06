import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Text } from "@chakra-ui/react"

/**
 * CustomGender Component
 * @component
 * @author Braian D. Vaylet
 */
const CustomGender = ({ value, ...props }) => (
  <Text {...props}>
    {value === "male" ? "🧑" : value === "female" ? "👩" : "🧑👩"}
  </Text>
)

CustomGender.propTypes = {
  value: PropTypes.string,
}

export default CustomGender
