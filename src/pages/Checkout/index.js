import React from "react"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import CheckoutTemplate from "components/_templates/CheckoutTemplate"

/**
 * Checkout Page
 * @component
 * @author Braian D. Vaylet
 * @description Pagina del checkout
 */
const Checkout = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.checkout")}
        description={t("HelmetSEO.description.checkout")}
      />
      <CheckoutTemplate />
    </>
  )
}

export default Checkout
