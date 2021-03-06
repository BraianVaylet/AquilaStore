import React, { useContext, useEffect, useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { MdShoppingCart } from "react-icons/md"
// chakra-ui
import {
  Icon,
  Flex,
  MenuDivider,
  Center,
  MenuItem,
  Box,
} from "@chakra-ui/react"
// context
import { CartContext } from "context"
// routes
import { ROUTES } from "routes"
// utils
import { handleMapArrayProducts } from "utils"
// components
import CustomMenu from "components/_atoms/CustomMenu"
import TotalCart from "components/_molecules/TotalCart"
import ButtonLink from "components/_atoms/ButtonLink"
import ButtonTooltip from "components/_molecules/ButtonTooltip"
import ItemProductList from "components/_organisms/ItemProductList" // ! AtomicDesignError

/**
 * CartWidgetBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente carrito con contador
 */
const CartWidgetBtn = ({ ...props }) => {
  const { cartItems, cleanCart, deleteItemsFromCart } = useContext(CartContext)
  const [t] = useTranslation("global")
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const cartCount = cartItems.length

  useEffect(() => setItems(handleMapArrayProducts(cartItems)), [cartItems])

  /**
   * handleIsOpen
   * @function
   * @description controlo la apertura del menu
   */
  const handleIsOpen = (value = !isOpen) => setIsOpen(value)

  return cartItems.length > 6 ? (
    <ButtonLink to={ROUTES.CART} {...props}>
      <Icon as={MdShoppingCart} boxSize="1.5rem" /> ({cartCount})
    </ButtonLink>
  ) : (
    <CustomMenu
      onClick={handleIsOpen}
      btnIcon={<Icon as={MdShoppingCart} boxSize="1.5rem" />}
      count={cartCount}
      footer={
        <Flex direction="row" align="center" justify="flex-end">
          <ButtonLink
            as={RouterLink}
            mr={2}
            size="lg"
            to={ROUTES.CART}
            onClick={() => handleIsOpen(false)}
            _hover={{ textDecoration: "none", bg: "gray.600" }}
          >
            🛒
          </ButtonLink>
          <ButtonTooltip
            mr={2}
            size="lg"
            onClick={cleanCart}
            tooltipLabel={t("CartWidgetBtn.clean")}
          >
            🗑
          </ButtonTooltip>
        </Flex>
      }
    >
      <Box>
        <ItemProductList
          data={items}
          onDelete={deleteItemsFromCart}
          asComponent={MenuItem}
        />
        <MenuDivider />
        <Center>
          <TotalCart title="Total: " fontSize="1.5rem" fontWeight="bold" />
        </Center>
      </Box>
    </CustomMenu>
  )
}

export default CartWidgetBtn
