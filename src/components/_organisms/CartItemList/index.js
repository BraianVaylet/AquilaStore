import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Divider, Flex } from "@chakra-ui/react"
// routes
import { ROUTES } from "routes"
// components
import ButtonLink from "components/_atoms/ButtonLink"
import TotalCart from "components/_molecules/TotalCart"
// styles
import { setValueResponsiveMax600 } from "styles/utils"

/**
 * CartItemList Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que lista los items agregados al carrito en la Cart page
 */
const CartItemList = ({ children }) => {
  const [t] = useTranslation("global")

  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="flex-start"
      wrap="nowrap"
      w="100%"
    >
      {children}
      <Divider />
      <Flex
        align="center"
        justify="flex-end"
        w="100%"
        p={setValueResponsiveMax600(10, 5)}
      >
        <TotalCart
          title="Total: "
          fontSize={setValueResponsiveMax600("1.5rem", "2.5rem")}
          fontWeight="bold"
        />
      </Flex>
      <Divider />
      <Flex
        direction={setValueResponsiveMax600("column", "row")}
        align="center"
        justify="flex-end"
        w="100%"
        p={setValueResponsiveMax600(10, 5)}
      >
        <ButtonLink
          to={ROUTES.HOME}
          mr={setValueResponsiveMax600(0, 4)}
          mb={setValueResponsiveMax600(4, 0)}
        >
          {t("CartItemList.keepBuying")}
        </ButtonLink>
        <ButtonLink to={ROUTES.CHECKOUT} bgColor="brand.primary" color="white">
          {t("CartItemList.continueShopping")}
        </ButtonLink>
      </Flex>
    </Flex>
  )
}

CartItemList.propTypes = {
  children: PropTypes.element,
}

export default CartItemList
