import React from "react"
import { IoExpand } from "react-icons/io5"
import { useTranslation } from "react-i18next"
import Proptypes from "prop-types"
// chakra-ui
import { Box, Icon, IconButton, Portal, useDisclosure } from "@chakra-ui/react"
// styles
import { addOpacityToColor } from "styles/utils"
// hooks
import CustomTooltip from "components/_atoms/CustomTooltip"
import CustomModal from "components/_atoms/CustomModal"
import ImageBox from "components/_atoms/ImageBox"

/**
 * ButtonModalFullImage Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que muestra la imagen en un modal
 */
const ButtonModalFullImage = ({ pictureName, pictureUrl, title }) => {
  const [t] = useTranslation("global")
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <CustomTooltip label={t("BtnModalImg.zoomIn")}>
        <IconButton
          onClick={onOpen}
          icon={
            <Box
              p="2.5px"
              bgColor={addOpacityToColor("#cccccc", 0.1)}
              borderRadius="5px"
              _focus={{
                borderStyle: "none",
                borderSize: "0px",
              }}
            >
              <Icon
                as={IoExpand}
                color="black"
                boxSize="1rem"
                borderRadius="9999px"
                fill="brand.primary"
                _hover={{
                  fill: "brand.secundary",
                }}
              />
            </Box>
          }
        />
      </CustomTooltip>

      <Portal>
        <CustomModal
          isOpen={isOpen}
          onClose={onClose}
          size="full"
          header={title}
        >
          <ImageBox
            name={pictureName}
            url={pictureUrl}
            size="contain"
            w="100%"
            minW="100%"
            maxW="100%"
            h="100%"
            minH="100%"
            maxH="100%"
          />
        </CustomModal>
      </Portal>
    </>
  )
}

ButtonModalFullImage.propTypes = {
  title: Proptypes.string.isRequired,
  pictureName: Proptypes.string,
  pictureUrl: Proptypes.string,
}

export default ButtonModalFullImage
