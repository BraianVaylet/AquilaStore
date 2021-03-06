import React, { useState, useContext, useEffect } from "react"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import PropTypes from "prop-types"
// chakra-ui
import { Button, Icon } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// context
import { FavouriteContext } from "context"
// utils
import { PropTypesProduct } from "utils/propTypes"
import useUser from "hooks/useUser"
// components
import LoginAlert from "components/_organisms/LoginAlert"

/**
 * FavouriteIconBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con acción onClick y cambio de icono.
 */
const FavouriteIconBtn = ({ item }) => {
  const {
    favourites,
    addItemToFavourites,
    deleteItemFromFavourites,
  } = useContext(FavouriteContext)
  const user = useUser()
  const [favActive, setFavActive] = useState(
    favourites.filter((fav) => fav.id === item.id).length === 1
  )
  const backgroundColor = useSetColorTheme("gray.700", "white")
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => user && setShowLogin(false), [user])
  useEffect(
    () =>
      setFavActive(favourites.filter((fav) => fav.id === item.id).length === 1),
    [favourites]
  )

  /**
   * handleFavActive
   * @function
   * @returns {boolean} favActive
   */
  const handleFavActive = () => {
    if (!user) {
      setShowLogin(true)
    } else {
      setShowLogin(false)
      !favActive ? addItemToFavourites(item) : deleteItemFromFavourites(item)
      setFavActive(!favActive)
    }
  }

  return (
    <>
      {showLogin && <LoginAlert withClose fixed={false} />}
      <Button
        onClick={handleFavActive}
        p="2.5px"
        backgroundColor={backgroundColor}
        borderRadius="5px"
        _hover={{
          backgroundColor: backgroundColor,
        }}
      >
        {favActive ? (
          <Icon
            as={MdFavorite}
            boxSize="2rem"
            borderRadius="9999px"
            fill="brand.primary"
            _hover={{
              fill: "brand.secundary",
            }}
          />
        ) : (
          <Icon
            as={MdFavoriteBorder}
            boxSize="2rem"
            borderRadius="9999px"
            fill="brand.secundary"
            _hover={{
              fill: "brand.primary",
            }}
          />
        )}
      </Button>
    </>
  )
}

FavouriteIconBtn.propTypes = {
  item: PropTypes.shape(PropTypesProduct).isRequired,
}

export default FavouriteIconBtn
