import React from "react"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import NotFoundTemplate from "components/_templates/NotFoundTemplate"

/**
 * NotFound Page
 * @component
 * @author Braian D. Vaylet
 * @description Page NotFound para cuando la ruta es incorrecta
 */
const NotFound = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.notFound")}
        description={t("HelmetSEO.description.notFound")}
      />
      <NotFoundTemplate />
    </>
  )
}

export default NotFound
