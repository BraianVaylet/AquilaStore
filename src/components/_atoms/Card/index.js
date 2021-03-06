import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// styles
import { CustomShadow } from "styles/utils"

/**
 * Card Component
 * @component
 * @author Braian D. Vaylet
 * @description componente Card
 */
const Card = ({ children, ...props }) => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex
      borderRadius="2.5px"
      backgroundColor={backgroundColor}
      boxShadow={CustomShadow}
      {...props}
    >
      {children}
    </Flex>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
}

export default Card
