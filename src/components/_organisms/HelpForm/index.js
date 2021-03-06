import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Button, Flex, useToast } from "@chakra-ui/react"
// components
import { InputEmail, InputTextNumber } from "components/_molecules/Inputs"
import { InputTextArea } from "components/_molecules/Inputs/inputTextArea"
// firebase
import { FirebaseClient } from "firebase/client"

/**
 * HelpForm Component
 * @component
 * @author Braian D. Vaylet
 * @description formulario de contacto para ayuda
 */
const HelpForm = ({ onClose }) => {
  const toast = useToast()
  const [t] = useTranslation("global")
  const firebase = new FirebaseClient()
  const [emailValue, setEmailValue] = useState(null)
  const [nameValue, setNameValue] = useState(null)
  const [phoneValue, setPhoneValue] = useState(null)
  const [commentValue, setCommentValue] = useState(null)

  /**
   * handleSubmit
   * @function
   * @description guarda el form en la bd
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailValue && nameValue && phoneValue && commentValue) {
      firebase
        .addMessageHelp({
          email: emailValue,
          name: nameValue,
          phone: phoneValue,
          comment: commentValue,
        })
        .then(() => {
          toast({
            title: t("WorkWithUs.sendOk"),
            description: "",
            status: "success",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
          onClose()
        })
        .catch((error) => {
          console.error("error", error)
          toast({
            title: t("WorkWithUs.canNotSend"),
            description: "",
            status: "error",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
        })
    }
  }

  return (
    <form w="100%" onSubmit={handleSubmit}>
      <Flex direction="column" align="flex-start" justify="flex-start" w="100%">
        <InputEmail
          value={emailValue}
          onChange={(value) => setEmailValue(value)}
        />
        <InputTextNumber
          name="name"
          value={nameValue}
          label={t("WorkWithUs.name")}
          onChange={(value) => setNameValue(value)}
        />
        <InputTextNumber
          name="phone"
          type="tel"
          value={phoneValue}
          label={t("WorkWithUs.phone")}
          onChange={(value) => setPhoneValue(value)}
        />
        <InputTextArea
          name="comment"
          value={commentValue}
          label={t("HelpForm.comment")}
          onChange={(value) => setCommentValue(value)}
        />
        <Button type="submit">{t("WorkWithUs.send")}</Button>
      </Flex>
    </form>
  )
}

HelpForm.propTypes = {
  onClose: PropTypes.func,
}

export default HelpForm
