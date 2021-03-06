import React, { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Divider, Flex, Text } from "@chakra-ui/react"
import { InputEmail, InputTextNumber } from "components/_molecules/Inputs"
// context
import { CartContext, CheckoutContext } from "context"
// hooks
import useUser from "hooks/useUser"
// utils
import { handleTotalPrice, handleMapArrayProducts } from "utils"

/**
 * PaymentForm Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con formulario para la compra
 */
const PaymentForm = () => {
  const { setActivePayment, setPurchase } = useContext(CheckoutContext)
  const { cartItems } = useContext(CartContext)
  const user = useUser()
  const [t] = useTranslation("global")
  const [emailValue, setEmailValue] = useState(null)
  const [nameValue, setNameValue] = useState(null)
  const [dniValue, setDniValue] = useState(null)
  const [phoneValue, setPhoneValue] = useState(null)
  const [streetNameValue, setStreetNameValue] = useState(null)
  const [streetNumberValue, setStreetNumberValue] = useState(null)
  const [deptoValue, setDeptoValue] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if (user) {
      setEmailValue(user?.email)
      setNameValue(user?.username)
    }
  }, [user])

  useEffect(() => setActivePayment(isDisabled), [isDisabled])

  /**
   * handleSubmit
   * @function
   * @description habilita el btn de pago
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      cartItems &&
      emailValue &&
      nameValue &&
      dniValue &&
      phoneValue &&
      streetNameValue &&
      streetNumberValue
    ) {
      setIsDisabled(true)
      setPurchase({
        email: emailValue,
        fullname: nameValue,
        dni: dniValue,
        phone: phoneValue,
        address: streetNameValue,
        addressNum: streetNumberValue,
        addressInfo: deptoValue || "",
        products: handleMapArrayProducts(cartItems),
        total: handleTotalPrice(cartItems),
      })
    } else {
      setIsDisabled(false)
    }
  }

  /**
   * handleClick
   * @function
   * @description permite editar el form
   * @returns {boolean}
   */
  const handleClick = () => setIsDisabled(false)

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" justify="space-between" align="flex-start">
        <Text fontWeight="bold" fontSize="1.25rem">
          {t("PaymentForm.completeForm")}
        </Text>
        <Divider m="10px 0" />
        <Flex direction="row" align="center" justify="space-between">
          <InputEmail
            disabled={emailValue !== null || isDisabled}
            value={emailValue}
            onChange={(value) => setEmailValue(value)}
          />
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <InputTextNumber
            disabled={nameValue !== null || isDisabled}
            name="name"
            value={nameValue}
            label={t("PaymentForm.enterName")}
            onChange={(value) => setNameValue(value)}
          />
          <InputTextNumber
            disabled={isDisabled}
            name="dni"
            type="number"
            label={t("PaymentForm.enterDni")}
            onChange={(value) => setDniValue(value)}
          />
          <InputTextNumber
            disabled={isDisabled}
            name="phone"
            label={t("PaymentForm.enterPhone")}
            type="number"
            onChange={(value) => setPhoneValue(value)}
          />
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <InputTextNumber
            disabled={isDisabled}
            name="streetName"
            label={t("PaymentForm.enterStreetName")}
            onChange={(value) => setStreetNameValue(value)}
          />
          <InputTextNumber
            disabled={isDisabled}
            name="streetNumber"
            label={t("PaymentForm.enterStreetNumber")}
            onChange={(value) => setStreetNumberValue(value)}
          />
          <InputTextNumber
            disabled={isDisabled}
            name="depto"
            label={t("PaymentForm.enterDepto")}
            isRequired={false}
            onChange={(value) => setDeptoValue(value)}
          />
        </Flex>

        <Flex w="100%" align="center" justify="flex-start" mt={4} p={4}>
          <Button disabled={isDisabled} type="submit">
            {t("PaymentForm.confirm")}
          </Button>
          {isDisabled && (
            <Button variant="outline" ml={4} onClick={handleClick}>
              {t("PaymentForm.edit")}
            </Button>
          )}
        </Flex>
      </Flex>
    </form>
  )
}

export default PaymentForm
