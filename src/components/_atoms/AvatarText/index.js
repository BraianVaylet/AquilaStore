import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Flex, Image, Text } from "@chakra-ui/react"
// utils
import { IMG } from "utils/images"

/**
 * CustomAvatar Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con avatar y texto
 */
const CustomAvatar = ({ src, alt, text, ...props }) => {
  return (
    <Flex align="center" justify="flex-start" {...props}>
      <Image boxSize="3rem" borderRadius="full" src={src} alt={alt} mr="12px" />
      <Text fontSize="1.5rem" fontWeight="bold">
        {text}
      </Text>
    </Flex>
  )
}

CustomAvatar.defaultProps = {
  src: IMG.NO_IMG,
}

CustomAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
}

export default CustomAvatar
