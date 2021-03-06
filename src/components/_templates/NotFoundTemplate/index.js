import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Center, Heading } from "@chakra-ui/react"

/**
 * NotFoundTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente template para página 404
 */
const NotFoundTemplate = () => {
  const [t] = useTranslation("global")
  return (
    <Center w="100vw" h="100vh">
      <Heading
        fontStyle="italic"
        fontSize="5rem"
        bgGradient="linear(to-l, brand.primary, brand.secundary)"
        bgClip="text"
        fontWeight="extrabold"
      >
        404 {t("NotFound.title")}
      </Heading>
    </Center>
  )
}

export default NotFoundTemplate
