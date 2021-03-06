import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box } from "@chakra-ui/react"

/**
 * SimpleBanner Component
 * @component
 * @author Braian D. Vaylet
 * @description componente contenedor del banner
 */
const SimpleBanner = ({ img }) =>
  img && (
    <Box
      w="100%"
      h="50vh"
      bgImage={`url(${img})`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    />
  )

SimpleBanner.propTypes = {
  img: PropTypes.string.isRequired,
}

export default SimpleBanner
