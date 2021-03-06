import React, { useState, createContext } from "react"
import PropTypes from "prop-types"

export const ProductsContext = createContext({})

export const ProductsContextProvider = ({ children }) => {
  const [productsDb, setProductsDb] = useState(null)
  const [loadingProductsDb, setLoadingProductsDb] = useState(false)

  return (
    <ProductsContext.Provider
      value={{
        productsDb,
        setProductsDb,
        loadingProductsDb,
        setLoadingProductsDb,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

ProductsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
