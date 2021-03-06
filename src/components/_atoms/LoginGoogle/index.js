import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Flex, Image, useToast } from "@chakra-ui/react"
// firebase
import { FirebaseClient } from "firebase/client"
// utils
import { IMG } from "utils/images"
// hooks
import useUser from "hooks/useUser"

/**
 * LoginGoogle Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente button con autentificación con Google
 */
const LoginGoogle = ({ ...props }) => {
  const [t] = useTranslation("global")
  const toast = useToast()
  const user = useUser()
  const firebase = new FirebaseClient()

  /**
   * handleClick
   * @function
   * @description Autentificación con firebase y google
   */
  const handleClick = () =>
    firebase
      .loginWithGoogle()
      .then(async (value) => {
        if (user) {
          toast({
            title: `🙂 ${t("Authentication.welcome")}, ${
              value.user.displayName
            }`,
            description: "",
            status: "success",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
        }
      })
      .catch((error) => {
        console.error("error", error)
        user &&
          toast({
            title: t("Authentication.errorLogin"),
            description: "",
            status: "error",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
      })

  return (
    <Button
      as={Flex}
      onClick={handleClick}
      align="center"
      justify="center"
      w="100%"
      {...props}
    >
      <Image src={IMG.GOOGLE} alt="google" mr={2} w="1.25rem" h="1.25rem" />
      Google
    </Button>
  )
}

export default LoginGoogle
