import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Button, Flex } from "@chakra-ui/react"

/**
 * CustomColorsBox Component
 * @component
 * @author Braian D. Vaylet
 */
const CustomColorsBox = ({ color }) => {
  const bRadius = "5px"

  if (color) {
    if (color.includes("-")) {
      const dualColor = color.split("-")
      return (
        <Flex
          as={Button}
          borderRadius={bRadius}
          p={0}
          direction="row"
          align="center"
          justify="space-between"
          w="1.25rem"
          h="1.25rem"
          mr={2}
          borderWidth="1px"
          borderColor="#ccc"
          boxShadow="sm"
        >
          <Box
            borderRadius={`${bRadius} 0 0 ${bRadius}`}
            w="50%"
            h="100%"
            style={{ backgroundColor: dualColor[0] }}
          />
          <Box
            borderRadius={`0 ${bRadius} ${bRadius} 0`}
            w="50%"
            h="100%"
            style={{ backgroundColor: dualColor[1] }}
          />
        </Flex>
      )
    } else {
      return (
        <Box
          p={0}
          w="1.25rem"
          h="1.25rem"
          borderRadius={bRadius}
          borderWidth="1px"
          borderColor="#ccc"
          style={{ backgroundColor: color }}
          mr={2}
          boxShadow="sm"
        />
      )
    }
  }
}

CustomColorsBox.propTypes = {
  color: PropTypes.string.isRequired,
}

export default CustomColorsBox
