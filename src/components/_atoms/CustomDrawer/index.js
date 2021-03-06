import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react"

/**
 * CustomDrawer Component
 * @component
 * @author Braian D. Vaylet
 * @description componente drawer
 */
const CustomDrawer = ({
  onClose,
  isOpen,
  direction,
  size,
  children,
  withFooter,
  footer,
  header,
  withHeader,
}) => (
  <Drawer placement={direction} onClose={onClose} isOpen={isOpen} size={size}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton variant="none" />
        {withHeader && (
          <DrawerHeader borderBottomWidth="1px">{header}</DrawerHeader>
        )}
        <DrawerBody>{children}</DrawerBody>
        {withFooter && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
)

CustomDrawer.defaultProps = {
  size: "md",
  direction: "bottom",
  withFooter: true,
  withHeader: true,
}

CustomDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
  header: PropTypes.node,
  footer: PropTypes.node,
  withFooter: PropTypes.bool,
  withHeader: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

export default CustomDrawer
