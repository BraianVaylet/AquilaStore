import React, { useState, createContext } from "react"
import PropTypes from "prop-types"

export const CheckoutContext = createContext({})

export const CheckoutContextProvider = ({ children }) => {
  const [activePayment, setActivePayment] = useState(false)
  const [purchase, setPurchase] = useState(null)

  return (
    <CheckoutContext.Provider
      value={{
        activePayment,
        setActivePayment,
        purchase,
        setPurchase,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

CheckoutContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
