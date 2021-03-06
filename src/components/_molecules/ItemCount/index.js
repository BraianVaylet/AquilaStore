import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
// import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Button, Flex, IconButton, Text, useToast } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// context
import { CartContext } from "context"
// utils
import { PropTypesProduct } from "utils/propTypes"
// routes
import { ROUTES } from "routes"

/**
 * ItemCount Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente ItemCount para seleccionar items validando el stock y con acción de agregar al carrito o comprar.
 */
const ItemCount = ({ initial, stock, item, design }) => {
  const [t] = useTranslation("global")
  const routerHistory = useHistory()
  const { cartItems, addItemToCart, deleteOneItemFromCart } = useContext(
    CartContext
  )
  const toast = useToast()
  const backgroundColor = useSetColorTheme("gray.900", "gray.200")
  const [count, setCount] = useState(initial)
  const [newStock, setNewStock] = useState(stock)
  const [noStock, setNoStock] = useState(false)
  const [localStock, setLocalStock] = useState(0)

  useEffect(() => setNewStock(stock - handleCartItemsFilter()), [cartItems])
  useEffect(() => setNoStock(count >= newStock), [count, cartItems])
  useEffect(() => setLocalStock(newStock - count), [count, newStock, cartItems])

  /**
   * handleDecrementConuter
   * @function
   * @returns {undefined}
   * @description -1 al contador
   */
  const handleDecrementConuter = () =>
    setCount(count <= newStock && count > 0 ? count - 1 : count)

  /**
   * handleIncrementConuter
   * @function
   * @returns {undefined}
   * @description +1 al contador
   */
  const handleIncrementConuter = () =>
    setCount(count < newStock && count >= 0 ? count + 1 : count)

  /**
   * handleIncrementConuterD2
   * @function
   * @returns {undefined}
   * @description sumo 1 elemento al carrito
   */
  const handleIncrementConuterD2 = () => {
    let _item = item
    const itemsArr = cartItems.filter((element) => element.id === _item.id)
    const _id = itemsArr.length + 1
    _item = { ...item, _id }
    addItemToCart([_item])
    toast({
      title: t("ItemCount.addedToCart"),
      description: "",
      status: "success",
      position: "bottom-right",
      duration: 5000,
      isClosable: true,
    })
  }

  /**
   * handleDecrementConuterD2
   * @function
   * @returns {undefined}
   * @description elimino el elemento del carrito
   */
  const handleDecrementConuterD2 = () => deleteOneItemFromCart(item)

  /**
   * handleCartItemsFilter
   * @function
   * @returns {undefined}
   * @description cuento cuantos elementos tengo en el carrito
   */
  const handleCartItemsFilter = () =>
    cartItems.filter((element) => element.id === item.id).length

  /**
   * handleOnAddClick
   * @function
   * @returns {undefined}
   * @description agrego productos al carrito
   */
  const handleOnAddClick = () => {
    addItemToCart(handleItemsByCounter())
    setCount(0)
    toast({
      title: t("ItemCount.addedToCart"),
      description: "",
      status: "success",
      position: "bottom-right",
      duration: 5000,
      isClosable: true,
    })
  }

  /**
   * handleOnBuyClick
   * @function
   * @returns {undefined}
   * @description agrego elementos al carrito y voy directo a cart
   */
  const handleOnBuyClick = () => {
    addItemToCart(handleItemsByCounter())
    toast({
      title: t("ItemCount.addedToCart"),
      description: "",
      status: "success",
      position: "bottom-right",
      duration: 5000,
      isClosable: true,
    })
    routerHistory.push(ROUTES.CART)
  }

  /**
   * handleItemsByCounter
   * @function
   * @return {array}
   * @description retorna array de productos (trabajado)
   */
  const handleItemsByCounter = () => {
    const arrItems = []
    for (let i = 0; i < count; i++) {
      let _item = item
      const itemsArr = cartItems.filter((element) => element.id === _item.id)
      const _id = itemsArr.length + (i + 1)
      _item = { ...item, _id }
      arrItems.push(_item)
    }
    return arrItems
  }

  return design === 1 ? (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      w="100%"
      h="100%"
      p="5px"
    >
      <Flex
        justify="space-between"
        direction="row"
        align="center"
        borderRadius="5px"
        w="100%"
        h="30%"
        m="5px 0px"
        bg={backgroundColor}
      >
        <IconButton
          w="25%"
          h="100%"
          isDisabled={count === 0}
          onClick={handleDecrementConuter}
          icon={<MinusIcon w={5} h={5} />}
        />
        <Text w="50%" textAlign="center">
          {count}
        </Text>
        <IconButton
          w="25%"
          h="100%"
          isDisabled={noStock || localStock === 0}
          onClick={handleIncrementConuter}
          icon={<AddIcon w={5} h={5} />}
        />
      </Flex>
      <Box>
        {noStock || localStock === 0 ? (
          <Text color="red.500" fontWeight="600">
            {t("ItemCount.noStock")}
          </Text>
        ) : (
          <Text fontWeight="600">
            {t("ItemCount.available")} {localStock <= 0 ? 0 : localStock}u.
          </Text>
        )}
      </Box>
      <Flex justify="center" align="center" direction="column" w="100%">
        <Button
          w="100%"
          mt={4}
          disabled={
            localStock === newStock ||
            stock === 0 ||
            newStock === 0 ||
            count === 0
          }
          onClick={handleOnAddClick}
        >
          {t("ItemCount.addToCart")}
        </Button>
        <Button
          w="100%"
          mt={4}
          disabled={
            localStock === newStock ||
            stock === 0 ||
            newStock === 0 ||
            count === 0
          }
          onClick={handleOnBuyClick}
        >
          {t("ItemCount.buyNow")}
        </Button>
      </Flex>
    </Flex>
  ) : design === 2 ? (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      w="100%"
      h="100%"
    >
      <Flex
        justify="space-between"
        direction="row"
        align="center"
        borderRadius="5px"
        w="100%"
        bg={backgroundColor}
      >
        <IconButton
          mr={4}
          w="50%"
          h="100%"
          onClick={handleDecrementConuterD2}
          icon={<MinusIcon w={5} h={10} />}
        />
        <IconButton
          disabled={newStock <= 0}
          w="50%"
          h="100%"
          onClick={handleIncrementConuterD2}
          icon={<AddIcon w={5} h={10} />}
        />
      </Flex>
      <Box>
        {newStock === 0 ? (
          <Text color="red.500" fontWeight="600">
            {t("ItemCount.noStock")}
          </Text>
        ) : (
          <Text fontWeight="600">
            {t("ItemCount.available")} {newStock}u.
          </Text>
        )}
      </Box>
    </Flex>
  ) : (
    <Box />
  )
}

ItemCount.defaultProps = {
  initial: 1,
  design: 1,
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  item: PropTypes.shape(PropTypesProduct).isRequired,
  onBuy: PropTypes.func,
  /**
   * design = 1: Preparado para ser usado en los componentes Item, ItemDetail
   * design = 2: Preparado para ser usado en la pagina Cart
   */
  design: PropTypes.number,
}

export default ItemCount
