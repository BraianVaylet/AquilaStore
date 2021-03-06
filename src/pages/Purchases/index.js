import React from "react"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import PurchasesTemplate from "components/_templates/PurchasesTemplate"

/**
 * Purchases Page
 * @component
 * @author Braian D. Vaylet
 * @description Pagina para el historial de compra
 */
const Purchases = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.purchases")}
        description={t("HelmetSEO.description.purchases")}
      />
      <PurchasesTemplate />
    </>
  )
}

export default Purchases
