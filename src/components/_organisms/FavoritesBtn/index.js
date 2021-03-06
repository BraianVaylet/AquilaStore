import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
// chakra-ui
import { Flex, Icon, MenuItem } from "@chakra-ui/react"
// context
import { FavouriteContext } from "context"
// routes
import { ROUTES } from "routes"
// components
import ButtonLink from "components/_atoms/ButtonLink"
import CustomMenu from "components/_atoms/CustomMenu"
import ButtonTooltip from "components/_molecules/ButtonTooltip"
import ItemProductList from "components/_organisms/ItemProductList" // ! AtomicDesignError

/**
 * FavoritesBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con contador
 */
const FavoritesBtn = ({ withText }) => {
  const { favourites, cleanFavourites, deleteItemFromFavourites } = useContext(
    FavouriteContext
  )
  const [t] = useTranslation("global")
  const countFavs = favourites.length
  const slice = 6

  return (
    <CustomMenu
      btnIcon={
        countFavs > 0 ? (
          <Icon as={MdFavorite} boxSize="1.5rem" />
        ) : (
          <Icon as={MdFavoriteBorder} boxSize="1.5rem" />
        )
      }
      btnText={t("Favourites.title")}
      withText={withText}
      count={countFavs}
      footer={
        <Flex direction="row" align="center" justify="flex-end">
          {favourites.length > slice && (
            <ButtonLink to={ROUTES.FAVOURITES} mr={2} size="lg">
              {t("FavouritesBtn.all")}
            </ButtonLink>
          )}
          <ButtonTooltip
            tooltipLabel={t("FavouritesBtn.clean")}
            mr={2}
            size="lg"
            onClick={cleanFavourites}
          >
            🗑
          </ButtonTooltip>
        </Flex>
      }
    >
      <ItemProductList
        data={favourites}
        onDelete={deleteItemFromFavourites}
        asComponent={MenuItem}
        withSlice
        slice={slice}
      />
    </CustomMenu>
  )
}

FavoritesBtn.propTypes = {
  withText: PropTypes.bool,
}

export default FavoritesBtn
