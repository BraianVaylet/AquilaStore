import React from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Center, Flex, Text } from "@chakra-ui/react"
// styles
import {
  titleSizeResponsiveMin1280,
  setValueResponsiveMin1280,
} from "styles/utils"
// components
import CustomColorsBoxList from "components/_molecules/CustomColorsBoxList"
import CustomGender from "components/_atoms/CustomGender"
import CustomSizeBoxList from "components/_molecules/CustomSizeBoxList"

/**
 * ItemDetail/ItemDetailCharacteristics Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente las caracteristicas del producto, es una seccion del componente ItemDetail.
 */
const ItemDetailCharacteristics = ({ brand, model, gender, colors, sizes }) => {
  const [t] = useTranslation("global")

  return (
    <>
      <Text fontSize={titleSizeResponsiveMin1280(3)}>
        {t("ItemDetailCharacteristics.title")}
      </Text>
      <Flex
        direction="column"
        justify="flex-start"
        center="flex-start"
        mt="10px"
        w={setValueResponsiveMin1280("25vw", "100%")}
      >
        <Flex direction="row" justify="flex-start" center="flex-start" w="100%">
          <Center w="25%" p="10px" bg="brand.primary" borderRadius="5px 0 0 0">
            <Text color="white">{t("ItemDetailCharacteristics.brand")}</Text>
          </Center>
          <Box w="75%" p="10px" bg="brand.secundary" borderRadius="0 5px 0 0">
            <Text color="white">{brand}</Text>
          </Box>
        </Flex>
        <Flex direction="row" justify="flex-start" center="flex-start" w="100%">
          <Center w="25%" p="10px" bg="brand.primary" borderRadius="0 0 0 5px">
            <Text color="white">{t("ItemDetailCharacteristics.model")}</Text>
          </Center>
          <Box w="75%" p="10px" bg="brand.secundary" borderRadius="0 0 5px 0">
            <Text color="white">{model}</Text>
          </Box>
        </Flex>

        <Flex
          direction="column"
          justify="flex-start"
          align="flex-start"
          m="2rem 0"
        >
          {/* filters */}
          <Flex align="center">
            {t("ItemDetailCharacteristics.withLoveTo")}{" "}
            <CustomGender value={gender} ml={2} />
          </Flex>

          {/* colors */}
          <Flex direction="row" justify="flex-start" align="center" mt={4}>
            <Text mr={3}>
              {t("ItemDetailCharacteristics.availableColours")}:
            </Text>
            <Flex direction="row" justify="flex-start" align="center">
              <CustomColorsBoxList value={colors} />
            </Flex>
          </Flex>

          {/* sizes */}
          <Flex direction="row" justify="flex-start" align="center" mt={4}>
            <Text mr={3}>{t("ItemDetailCharacteristics.availableSizes")}:</Text>
            <Flex direction="row" justify="flex-start" align="center">
              <CustomSizeBoxList value={sizes} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

ItemDetailCharacteristics.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  gender: PropTypes.string,
}

export default ItemDetailCharacteristics
