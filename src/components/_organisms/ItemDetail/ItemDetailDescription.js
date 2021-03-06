import React from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
// styles
import { titleSizeResponsiveMin1280 } from "styles/utils"

/**
 * ItemDetail/ItemDetailDescription Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con la descripción del producto, es una sección del componente ItemDetial.
 */
const ItemDetailDescription = ({ description }) => {
  const [t] = useTranslation("global")

  return (
    <Flex direction="column" justify="flex-start" center="flex-start">
      <Text fontSize={titleSizeResponsiveMin1280(3)}>
        {t("ItemDetailDescription.title")}
      </Text>
      <Text>{description}</Text>
    </Flex>
  )
}

ItemDetailDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

export default ItemDetailDescription
