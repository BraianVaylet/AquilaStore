import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import CustomModal from "components/_atoms/CustomModal"
import LoginGoogle from "components/_atoms/LoginGoogle"
import LoginFacebook from "components/_atoms/LoginFacebook"

/**
 * LoginAlert Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Modal con login
 */
const LoginAlert = ({ withClose, fixed }) => {
  const [t] = useTranslation("global")
  const [open, setOpen] = useState(true)

  return fixed ? (
    <CustomModal
      withCloseBtn={false}
      isOpen={true}
      header={t("LoginBtn.login2")}
    >
      <Flex w="100%" direction="column" align="flex-start" justify="center">
        <LoginGoogle mb={2} />
        <LoginFacebook mb={2} />
      </Flex>
    </CustomModal>
  ) : (
    <CustomModal
      withCloseBtn={withClose}
      isOpen={open}
      onClose={() => setOpen(false)}
      header={t("LoginBtn.login2")}
    >
      <Flex w="100%" direction="column" align="flex-start" justify="center">
        <LoginGoogle mb={2} />
        <LoginFacebook mb={2} />
      </Flex>
    </CustomModal>
  )
}

LoginAlert.defaultProps = {
  withClose: false,
  fixed: true,
}

LoginAlert.propTypes = {
  withClose: PropTypes.bool,
  fixed: PropTypes.bool,
}

export default LoginAlert
