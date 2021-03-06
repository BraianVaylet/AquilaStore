import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"

/**
 * CustomModal
 * @component
 * @author Braian D. Vaylet
 * @description Componente Modal
 */
const CustomModal = ({
  isOpen,
  onClose,
  header,
  footer,
  children,
  size,
  withFooter,
  withHeader,
  withCloseBtn,
  color,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} size={size}>
    <ModalOverlay />
    <ModalContent bgColor={color}>
      {withHeader && <ModalHeader>{header}</ModalHeader>}
      {withCloseBtn && <ModalCloseButton />}
      <ModalBody>{children}</ModalBody>
      {withFooter && <ModalFooter>{footer}</ModalFooter>}
    </ModalContent>
  </Modal>
)

CustomModal.defaultProps = {
  size: "md",
  withFooter: true,
  withHeader: true,
  withCloseBtn: true,
}

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
  withFooter: PropTypes.bool,
  withHeader: PropTypes.bool,
  withCloseBtn: PropTypes.bool,
  color: PropTypes.string,
}

export default CustomModal
