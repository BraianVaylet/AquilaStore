import React from "react"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import FavouritesTemplate from "components/_templates/FavouritesTemplate"

/**
 * Favourites Page
 * @component
 * @author Braian D. Vaylet
 * @description página donde se muestran todos los favoritos
 */
const Favourites = () => {
  const [t] = useTranslation("global")
  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.favourites")}
        description={t("HelmetSEO.description.favourites")}
      />
      <FavouritesTemplate />
    </>
  )
}

export default Favourites
