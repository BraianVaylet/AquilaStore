import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Center, Text } from "@chakra-ui/react"
// components
import ItemProduct from "components/_molecules/ItemProduct"
import Item from "components/_molecules/Item"

/**
 * ProductList Component
 * @component
 * @author Braian D. Vaylet
 * @description retorna listado de productos
 */
const ItemProductList = ({
  data,
  asComponent,
  onDelete,
  type,
  design,
  withSlice,
  slice,
  withDelete,
  ...props
}) => {
  const [t] = useTranslation("global")
  const [items, setItems] = useState(data)

  useEffect(() => setItems(data), [data])

  return items && items.length > 0 ? (
    items
      .map((item, index) => {
        return (
          <Box as={asComponent} key={index} {...props}>
            {type === "item" ? (
              <ItemProduct
                item={item}
                onDelete={() => onDelete(item)}
                design={design}
                withDelete={withDelete}
              />
            ) : type === "card" ? (
              <Center>
                <Item item={item} />
              </Center>
            ) : (
              <Box />
            )}
          </Box>
        )
      })
      .reverse()
      .slice(0, withSlice ? slice : items.length)
  ) : (
    <Center w="100%" h="80vh">
      <Text fontSize="2rem">{t("ItemProductList.noProductsYet")} 😔 </Text>
    </Center>
  )
}

ItemProductList.defaultProps = {
  onDelete: () => {},
  type: "item",
  design: 1,
  withSlice: false,
  withDelete: true,
}

ItemProductList.propTypes = {
  data: PropTypes.any.isRequired,
  asComponent: PropTypes.object,
  onDelete: PropTypes.func,
  type: PropTypes.oneOf(["item", "card"]),
  /**
   * design = 1: Preparado para ser usado en el menu desplegable de la NavBar
   * design = 2: Preparado para ser usado en la pagina del carrito
   */
  design: PropTypes.number,
  withSlice: PropTypes.bool,
  slice: PropTypes.number,
  withDelete: PropTypes.bool,
}

export default ItemProductList
