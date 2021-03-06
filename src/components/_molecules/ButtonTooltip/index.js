import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Button } from "@chakra-ui/react"
// components
import CustomTooltip from "components/_atoms/CustomTooltip"

/**
 * ButtonTooltip Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Button con tooltip
 */
const ButtonTooltip = ({ children, tooltipLabel, onClick, ...props }) => (
  <CustomTooltip label={tooltipLabel}>
    <Button {...props} onClick={onClick}>
      {children}
    </Button>
  </CustomTooltip>
)

ButtonTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltipLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ButtonTooltip
