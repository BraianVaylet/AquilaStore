import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Center, Text } from "@chakra-ui/react"
import ItemProduct from "components/_molecules/ItemProduct" // ! AtomicDesignError

/**
 * ProductList Component
 * @component
 * @author Braian D. Vaylet
 * @description retorna listado de productos
 */
const ItemProductList = ({ data, asComponent, onDelete, ...props }) => {
  const [t] = useTranslation("global")
  const [items, setItems] = useState(data)

  useEffect(() => setItems(data), [data])

  return (
    <Box w="100%">
      {items.length > 0 ? (
        items
          .map((item, index) => {
            return (
              <Box as={asComponent} key={index} {...props}>
                <ItemProduct item={item} onDelete={() => onDelete(item)} />
              </Box>
            )
          })
          .reverse()
      ) : (
        <Center w="100%" h="80vh">
          <Text fontSize="3rem">{t("ItemProductList.noProductsYet")} 😔 </Text>
        </Center>
      )}
    </Box>
  )
}

ItemProductList.defaultProps = {
  onDelete: () => {},
}

ItemProductList.propTypes = {
  data: PropTypes.any.isRequired,
  asComponent: PropTypes.node,
  onDelete: PropTypes.func,
}

export default ItemProductList
