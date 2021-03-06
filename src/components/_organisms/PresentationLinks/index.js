import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Flex } from "@chakra-ui/react"
// hooks
import useUser from "hooks/useUser"
import useSetColorTheme from "hooks/useSetColorTheme"
// components
import ItemNavLink from "components/_atoms/ItemNavLink"
import CustomAvatar from "components/_atoms/AvatarText"
// routes
import { ROUTES } from "routes"

/**
 * PresentationLinks Components
 * @component
 * @author Braian D. Vaylet
 * @description Componente con info del user y links importantes
 */
const PresentationLinks = ({ ...props }) => {
  const user = useUser()
  const [t] = useTranslation("global")
  const backgroundColorItems = useSetColorTheme("gray.600", "gray.300")

  return user ? (
    <Flex
      direction="column"
      align="flex-start"
      justify="flex-start"
      w="100%"
      p={4}
      bg={backgroundColorItems}
      borderRadius={10}
      {...props}
    >
      <CustomAvatar
        src={user.avatar}
        alt={user.username}
        text={user.username}
      />
      <Flex
        w="100%"
        direction="column"
        align="flex-start"
        justify="flex-start"
        p="1rem 0"
      >
        <ItemNavLink to={ROUTES.FAVOURITES} mb={2}>
          {`💕 ${t(`PresentationLinks.favourites`)}`}
        </ItemNavLink>

        <ItemNavLink to={ROUTES.NOTIFICATIONS} mb={2}>
          {`📫 ${t(`PresentationLinks.notifications`)}`}
        </ItemNavLink>

        <ItemNavLink to={ROUTES.CART} mb={2}>
          {`🛒 ${t(`PresentationLinks.cart`)}`}
        </ItemNavLink>

        <ItemNavLink to={ROUTES.PURCHASES} mb={2}>
          {`🛍 ${t(`PresentationLinks.purchases`)}`}
        </ItemNavLink>
      </Flex>
    </Flex>
  ) : (
    <Box />
  )
}

export default PresentationLinks
