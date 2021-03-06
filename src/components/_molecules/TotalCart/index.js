import React, { useContext } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Text } from "@chakra-ui/react"
// context
import { CartContext } from "context"
// utils
import { handleTotalPrice } from "utils"

/**
 * TotalCart Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que te retorna el precio total de todos los productos del carrito.
 */
const TotalCart = ({ title, ...props }) => {
  const { cartItems } = useContext(CartContext)

  return (
    <Text {...props}>
      {title} ${handleTotalPrice(cartItems)}
    </Text>
  )
}

TotalCart.defaultProps = {
  title: "",
}

TotalCart.propTypes = {
  title: PropTypes.string,
}

export default TotalCart
