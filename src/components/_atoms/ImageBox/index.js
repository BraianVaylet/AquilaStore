import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box } from "@chakra-ui/react"
// utils
import { IMG } from "utils/images"

/**
 * ImageBox Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente imagen con background-image
 */
const ImageBox = ({ id, name, url, size, ...props }) => {
  return (
    <Box
      key={id}
      title={name}
      bgImage={`url(${url || IMG.NO_IMG})`}
      bgPosition="center"
      bgSize={size}
      bgRepeat="no-repeat"
      {...props}
    />
  )
}

ImageBox.defaultProps = {
  id: "",
  name: "NO-IMG",
  url: IMG.NO_IMG,
  size: "cover",
}

ImageBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.string,
}

export default ImageBox
