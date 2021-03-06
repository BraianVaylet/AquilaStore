import React from "react"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import CartTemplate from "components/_templates/CartTemplate"

/**
 * Cart page
 * @component
 * @author Braian D. Vaylet
 * @description Componente Page para el carrito.
 */
const Cart = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.cart")}
        description={t("HelmetSEO.description.cart")}
      />
      <CartTemplate />
    </>
  )
}

export default Cart
