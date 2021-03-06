import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import CustomColorsBox from "components/_atoms/CustomColorBox"

/**
 * CustomColorsBoxList Component
 * @component
 * @author Braian D. Vaylet
 */
const CustomColorsBoxList = ({ value }) => {
  return (
    value &&
    value.map((color, index) => <CustomColorsBox key={index} color={color} />)
  )
}

CustomColorsBoxList.propTypes = {
  value: PropTypes.array.isRequired,
}

export default CustomColorsBoxList
