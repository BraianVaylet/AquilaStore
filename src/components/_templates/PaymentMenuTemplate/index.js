import React, { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
// chakra-ui
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// utils
import { handleMapArrayProducts } from "utils"
// context
import { CartContext, CheckoutContext, NotificationContext } from "context"
// components
import CustomModal from "components/_atoms/CustomModal"
import ButtonLink from "components/_atoms/ButtonLink"
import TotalCart from "components/_molecules/TotalCart"
import ItemProductList from "components/_organisms/ItemProductList"
// routes
import { ROUTES } from "routes"
// firebase
import { FirebaseClient } from "firebase/client"

/**
 * PaymentMenuTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con acceso al btn de pago e info de la compra
 */
const PaymentMenuTemplate = () => {
  const [t] = useTranslation("global")
  const firebase = new FirebaseClient()
  const backToHome = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { activePayment, purchase } = useContext(CheckoutContext)
  const { cleanCart } = useContext(CartContext)
  const { addNotification } = useContext(NotificationContext)
  const { cartItems } = useContext(CartContext)
  const backgroundColorItems = useSetColorTheme("gray.600", "gray.300")
  const [items, setItems] = useState([])
  const [purchaseStatus, setPurchasesStatus] = useState(null)

  useEffect(() => cartItems.length === 0 && backToHome.push(ROUTES.HOME), [])
  useEffect(() => setItems(handleMapArrayProducts(cartItems)), [cartItems])

  /**
   * handlePayment
   * @function
   * @description acción del btn comprar
   */
  const handlePayment = () => {
    const test = true
    if (purchase) {
      // guardo compra
      firebase
        .addPurchase(purchase)
        .then(() => {
          if (test) {
            // creo notificacion
            addNotification({
              items: items,
              date: Date.now(),
              count: cartItems.length,
              viewed: false,
              total: purchase.total,
              discount: purchase.discount,
            })
            // limpio carrito
            cleanCart()
            onOpen()
            setPurchasesStatus(true)
          }
        })
        .catch((error) => {
          console.error("error", error)
          setPurchasesStatus(false)
        })
    }
  }

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        withFooter
        withCloseBtn={false}
        size="xl"
        color={purchaseStatus ? "green.400" : "red.400"}
        footer={
          purchaseStatus ? (
            <Flex align="center">
              {/* <Text>{t("PaymentMenu.cuestion")}</Text> */}
              <ButtonLink
                to={ROUTES.PURCHASES}
                ml={4}
                onClick={() => onClose()}
              >
                {t("PaymentMenu.goToPurchases")}
              </ButtonLink>
              <ButtonLink to={ROUTES.HOME} ml={4} onClick={() => onClose()}>
                {t("PaymentMenu.goToHome")}
              </ButtonLink>
            </Flex>
          ) : (
            <Button ml={4} onClick={() => onClose()}>
              {t("PaymentMenu.tryAgain")}
            </Button>
          )
        }
      >
        <Flex direction="column" align="center" justify="center" p={10}>
          <Text fontSize="3rem">
            {purchaseStatus ? <CheckCircleIcon /> : <WarningIcon />}
          </Text>
          <Text fontSize="1.25rem">
            {purchaseStatus ? t("PaymentMenu.success") : t("PaymentMenu.error")}
          </Text>
        </Flex>
      </CustomModal>
      <Flex direction="column" align="flex-start" justify="flex-start">
        <Text fontWeight="bold" fontSize="1.25rem">
          {t("PaymentMenu.resumen")}
        </Text>
        <Divider m="10px 0" />
        <Flex align="center" justify="space-between" w="100%">
          <Text>
            {t("PaymentMenu.products")}({cartItems.length})
          </Text>
          <Text>
            <TotalCart />
          </Text>
        </Flex>
        <Flex align="center" justify="space-between" w="100%">
          <Text>{t("PaymentMenu.shipping")}</Text>
          <Text color="green.200">{t("PaymentMenu.free")}</Text>
        </Flex>
        <Divider m="10px 0" />
        <Flex align="center" justify="space-between" w="100%">
          <Text fontWeight="bold">Total</Text>
          <TotalCart />
        </Flex>

        {items.length && (
          <Flex
            justify="flex-start"
            align="flex-start"
            direction="column"
            bgColor={backgroundColorItems}
            p={4}
            borderRadius="5px"
            w="100%"
            mt={10}
          >
            <ItemProductList
              data={items}
              asComponent={Box}
              withDelete={false}
            />
          </Flex>
        )}

        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          mt={10}
        >
          <Button disabled={!activePayment} w="100%" onClick={handlePayment}>
            {t("PaymentMenu.pay")}
          </Button>
          <Box maxH="1.5rem" minH="1.5rem" h="1.5rem" mt="5px">
            <Text fontSize=".75rem" color="gray.400">
              {t("PaymentMenu.confirmForm")}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default PaymentMenuTemplate
