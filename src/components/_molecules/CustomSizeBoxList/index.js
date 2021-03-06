import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Kbd } from "@chakra-ui/react"

/**
 * CustomSizeBoxList Component
 * @component
 * @author Braian D. Vaylet
 */
const CustomSizeBoxList = ({ value }) => {
  return (
    value &&
    value.map((size, index) => {
      return (
        <Kbd key={index} mr={2}>
          {size}
        </Kbd>
      )
    })
  )
}

CustomSizeBoxList.propTypes = {
  value: PropTypes.array.isRequired,
}

export default CustomSizeBoxList
