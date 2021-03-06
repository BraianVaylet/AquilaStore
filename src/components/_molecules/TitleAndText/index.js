import React from "react"
import PropTypes from "prop-types"
import { Flex, Text } from "@chakra-ui/react"

/**
 * TitleAndText Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente formado por un titulo y un texto
 */
const TitleAndText = ({ title, text }) => {
  return (
    <Flex direction="column" justify="flex-start" align="flex-start " mb={10}>
      <Text fontSize="1.25rem" fontWeight="bold">
        {title}
      </Text>
      <Text>{text}</Text>
    </Flex>
  )
}

TitleAndText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default TitleAndText
