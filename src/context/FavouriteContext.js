import React, { useState, createContext, useEffect } from "react"
import PropTypes from "prop-types"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"

export const FavouriteContext = createContext({})

export const FavouriteContextProvider = ({ children }) => {
  const [storedValue, setLocalStorage] = useLocalStorage("favourites", [])
  const [favourites, setFavourites] = useState(storedValue)

  useEffect(() => setLocalStorage(favourites), [favourites])

  const addItemToFavourites = (item) => {
    const newFavArray = [...favourites, item]
    setFavourites(newFavArray)
  }

  const deleteItemFromFavourites = (item) => {
    const newFavArray = favourites.filter((fav) => fav.id !== item.id)
    setFavourites(newFavArray)
  }

  const cleanFavourites = () => setFavourites([])

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        setFavourites,
        addItemToFavourites,
        deleteItemFromFavourites,
        cleanFavourites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  )
}

FavouriteContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
