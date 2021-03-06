import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Flex, Text } from "@chakra-ui/react"
// component
import CartCount from "components/_atoms/CartCount"
import FavouriteIconBtn from "components/_molecules/FavouriteIconBtn"
import ItemCount from "components/_molecules/ItemCount"
import Calification from "components/_molecules/Calification"
// styles
import { titleSizeResponsiveMin1280 } from "styles/utils"
// utils
import { PropTypesProduct } from "utils/propTypes"

/**
 * ItemDetail/ItemDetailAction Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente información principal y acciones del producto, es una seccion del componente ItemDetail.
 */
const ItemDetailAction = ({ item }) => {
  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        align="flex-start"
        w="100%"
      >
        {/* info */}
        <Flex
          direction="column"
          justify="space-between"
          align="flex-start"
          w="100%"
        >
          <Flex direction="row" align="center" justify="space-between" w="100%">
            <Text fontSize="1rem">Status | Vendidos</Text>
            <FavouriteIconBtn item={item} />
          </Flex>
          <Text fontSize={titleSizeResponsiveMin1280(2)}>{item.title}</Text>
          <Calification value={item.calification} />
          <Text fontSize={titleSizeResponsiveMin1280(3)} fontWeight="bold">
            ${item.price}
          </Text>
          <CartCount item={item} />
          <Text mt={4}>(envío gratis)</Text>
        </Flex>

        {/* action */}
        <Flex
          direction="column"
          justify="space-between"
          align="center"
          w="100%"
          h="40%"
        >
          <Box w="100%">
            <ItemCount stock={item.stock} item={item} />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

ItemDetailAction.propTypes = {
  item: PropTypes.shape(PropTypesProduct).isRequired,
}

export default ItemDetailAction
