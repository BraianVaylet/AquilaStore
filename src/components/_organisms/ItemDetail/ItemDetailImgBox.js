import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Center } from "@chakra-ui/react"
// constants
import ImageBox from "components/_atoms/ImageBox"
import ButtonModalFullImage from "components/_molecules/ButtonModalFullImage"

/**
 * ItemDetail/ItemDetailImgBox Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con la imagen del producto, es una sección del componente ItemDetial.
 */
const ItemDetailImgBox = ({ pictureName, pictureUrl, pictureId }) => {
  return (
    <Center p="20px" w="100%" position="relative">
      <ImageBox
        id={pictureId}
        name={pictureName}
        url={pictureUrl}
        w="300px"
        minW="300px"
        maxW="300px"
        h="300px"
        minH="300px"
        maxH="300px"
      />
      <Box position="absolute" top="10" left="10">
        <ButtonModalFullImage
          pictureName={pictureName}
          pictureUrl={pictureUrl}
          title={pictureName}
        />
      </Box>
    </Center>
  )
}

ItemDetailImgBox.propTypes = {
  pictureName: PropTypes.string,
  pictureUrl: PropTypes.string,
  pictureId: PropTypes.string.isRequired,
}

export default ItemDetailImgBox
