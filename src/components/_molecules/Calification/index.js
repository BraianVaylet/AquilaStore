import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Flex } from "@chakra-ui/react"
// components
import CustomStarIcon from "components/_atoms/CustomStarIcon"

/**
 * Calification Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente de sistema de calificación con 5 ⭐
 */
const Calification = ({ value }) => {
  const limit = 20
  const items = [1, 2, 3, 4, 5]

  return (
    <Box padding={2}>
      <Flex direction="row" justify="flex-start" align="center" wrap="nowrap">
        {items.map((item) => (
          <CustomStarIcon key={item} active={value >= item * limit - limit} />
        ))}
      </Flex>
    </Box>
  )
}

Calification.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Calification
