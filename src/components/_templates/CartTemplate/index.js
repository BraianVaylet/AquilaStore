import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
// Context
import { CartContext } from "context"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// utils
import { handleMapArrayProducts } from "utils"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
import CartItemList from "components/_organisms/CartItemList"
import ItemProductList from "components/_organisms/ItemProductList"
import ButtonTooltip from "components/_molecules/ButtonTooltip"
// routes
import { ROUTES } from "routes"

/**
 * CartTemplate component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Cart Template
 */
const CartTemplate = () => {
  const [t] = useTranslation("global")
  const routerHistory = useHistory()
  const { cleanCart } = useContext(CartContext)
  const { cartItems, deleteItemsFromCart } = useContext(CartContext)
  const [items, setItems] = useState([])

  useEffect(() => setItems(handleMapArrayProducts(cartItems)), [cartItems])

  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="flex-start"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <SubHeader
        withTitle
        title={t("CartTemplate.title")}
        backTo={ROUTES.HOME}
        withRightContent
        rightContent={
          <ButtonTooltip
            mr={2}
            size="lg"
            onClick={() => {
              cleanCart()
              routerHistory.push(ROUTES.HOME)
            }}
            tooltipLabel={t("CartWidgetBtn.clean")}
          >
            🗑
          </ButtonTooltip>
        }
      />
      <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
        <Tabs w="100%" variant="enclosed">
          <TabList>
            <Tab>
              {t("Cart.cart")} ({cartItems.length})
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel w="100%">
              <CartItemList>
                <ItemProductList
                  data={items}
                  onDelete={deleteItemsFromCart}
                  asComponent={Box}
                  w="100%"
                  mb={8}
                  design={2}
                />
              </CartItemList>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Flex>
  )
}

export default CartTemplate
