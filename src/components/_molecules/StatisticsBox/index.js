import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Flex, Text } from "@chakra-ui/react"

/**
 * StatisticsBox Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente tipo caja que muestra valor y text
 */
const StatisticsBox = ({ value, text, color, design }) => {
  return design === 1 ? (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      p={4}
      m={2}
      bg={color}
      borderRadius="5px"
      w="12vw"
    >
      <Text fontSize="3rem" fontWeight="900">
        {value}
      </Text>
      <Text textAlign="center">{text}</Text>
    </Flex>
  ) : design === 2 ? (
    <Flex
      align="center"
      justify="space-between"
      p={2}
      bg={color}
      borderRadius="5px"
      w="100%"
    >
      <Text fontSize="3rem" fontWeight="900">
        {value}
      </Text>
      <Text textAlign="center">{text}</Text>
    </Flex>
  ) : (
    <Box />
  )
}

StatisticsBox.defaultProps = {
  design: 1,
  value: 0,
}

StatisticsBox.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  design: PropTypes.number,
}

export default StatisticsBox
