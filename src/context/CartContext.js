import React, { useState, createContext, useEffect } from "react"
import PropTypes from "prop-types"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"

export const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
  const [storedValue, setLocalStorage] = useLocalStorage("cart", [])
  const [cartItems, setCartItems] = useState(storedValue)
  const [total, setTotal] = useState(0)

  useEffect(() => setLocalStorage(cartItems), [cartItems])

  // agrego item a carrito
  const addItemToCart = (items) => {
    const newCartItemsArray = [...cartItems]
    const newCartItemsArray2 = [...newCartItemsArray, ...items]
    setCartItems(newCartItemsArray2)
  }

  // elimino items del carrito
  const deleteItemsFromCart = (item) => {
    const newCartItemsArray = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    )
    setCartItems(newCartItemsArray)
  }

  // elimino un item del carrito
  const deleteOneItemFromCart = (item) => {
    const filterProductArr = cartItems.filter(
      (cartItem) => cartItem.id === item.id
    )
    filterProductArr.pop()
    const productsArr = cartItems.filter((cartItem) => cartItem.id !== item.id)
    const newArr = [...productsArr, ...filterProductArr]
    setCartItems(newArr)
  }

  // agrego la prop color al item del carrito
  const addColorToItemCart = (id, color) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.color = color
      }
      return item
    })
    setCartItems(newCartItems)
  }

  // agrego la prop size al item del carrito
  const addSizeToItemCart = (id, size) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.size = size
      }
      return item
    })
    setCartItems(newCartItems)
  }

  const cleanCart = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItemToCart,
        deleteItemsFromCart,
        deleteOneItemFromCart,
        cleanCart,
        total,
        setTotal,
        addColorToItemCart,
        addSizeToItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
