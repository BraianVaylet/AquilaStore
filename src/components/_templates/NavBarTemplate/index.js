// react
import React from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5"
import styles from "./styles.module.css"
// chakra-ui
import {
  Flex,
  Box,
  Link,
  useDisclosure,
  Button,
  useMediaQuery,
  Icon,
  Divider,
  Text,
} from "@chakra-ui/react"
// components
import CustomDrawer from "components/_atoms/CustomDrawer"
import HorizontalSeparator from "components/_atoms/HorizontalSeparator"
import ChangeThemeBtn from "components/_molecules/ChangeThemeBtn"
import ChangeLanguageBtn from "components/_molecules/ChangeLanguageBtn"
import LogoOpc1 from "components/_molecules/LogoOpc1"
import Logout from "components/_molecules/Logout"
import PresentationLinks from "components/_organisms/PresentationLinks"
import FavoritesBtn from "components/_organisms/FavoritesBtn"
import NotificationsBtn from "components/_organisms/NotificationsBtn"
import CartWidgetBtn from "components/_organisms/CartWidgetBtn"
import LoginBtn from "components/_organisms/LoginBtn"
// styles
import { MY_BREAKPOINTS } from "styles/theme"
import { addOpacityToColor } from "styles/utils"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
import useUser from "hooks/useUser"
// routes
import { ROUTES } from "routes"
// utils
import { CATEGORIES } from "utils/constants"
import ItemNavLink from "components/_atoms/ItemNavLink"
import ButtonLink from "components/_atoms/ButtonLink"

/**
 * NavBarTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente NavBarTemplate con Drawer
 */
const NavBarTemplate = () => {
  const [t] = useTranslation("global")
  const user = useUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const backgroundColor = useSetColorTheme(
    addOpacityToColor("#1A202C", 0.75),
    addOpacityToColor("#FFFFFF", 0.75)
  )
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  /**
   * renderLinks
   * @function
   * @description retorna links a las diferentes categorias
   * @returns {undefined} return ItemNavLInk Components
   */
  const renderLinks = (_default = true) => {
    return (
      <>
        <ItemNavLink
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.JACKETS}
          m={_default ? ".25rem 0" : "0 1rem"}
        >
          <Text>{t(`NavBarTemplate.${CATEGORIES.JACKETS}`)}</Text>
        </ItemNavLink>

        <ItemNavLink
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.SHIRTS}
          m={_default ? ".25rem 0" : "0 1rem"}
        >
          <Text>{t(`NavBarTemplate.${CATEGORIES.SHIRTS}`)}</Text>
        </ItemNavLink>

        <ItemNavLink
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.SHOES}
          m={_default ? ".25rem 0" : "0 1rem"}
        >
          <Text>{t(`NavBarTemplate.${CATEGORIES.SHOES}`)}</Text>
        </ItemNavLink>

        <ItemNavLink
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.ACCESORIES}
          m={_default ? ".25rem 0" : "0 1rem"}
        >
          <Text>{t(`NavBarTemplate.${CATEGORIES.ACCESORIES}`)}</Text>
        </ItemNavLink>
      </>
    )
  }

  return (
    <>
      <Flex
        w="100%"
        p={2}
        mb={2}
        direction="row"
        justify="space-between"
        align="center"
        borderTopWidth="0.25rem"
        borderColor="brand.primary"
        boxShadow="lg"
        position="fixed"
        bg={backgroundColor}
        opacity="0.95"
        top="0"
        zIndex="1000"
        className={styles.NavBarContainer}
      >
        <Flex direction="row" justify="flex-start" align="center">
          <Flex ml={2} direction="row" align="center" justify="space-between">
            <Button
              variant="none"
              _focus={{
                borderStyle: "none",
                backgroundColor: "transparent",
              }}
              onClick={onOpen}
            >
              <LogoOpc1 />
            </Button>
            <HorizontalSeparator withSeparator />
            <Link as={NavLink} to={ROUTES.HOME} p="0 1rem">
              <Icon as={IoHomeOutline} w="1.5rem" h="1.5rem" />
            </Link>
          </Flex>
        </Flex>
        <Flex direction="row" justify="flex-start" align="center">
          {mediaQueryMin1280 && renderLinks(false)}
          <Box ml={4} mr={4}>
            {!mediaQueryMax600 && user && <FavoritesBtn />}
            {!mediaQueryMax600 && user && <NotificationsBtn />}
            <CartWidgetBtn />
            <LoginBtn ml={10} />
          </Box>
        </Flex>
      </Flex>
      <CustomDrawer
        direction="left"
        onClose={onClose}
        isOpen={isOpen}
        header={<LogoOpc1 />}
        footer={
          <Flex align="center" justify="space-between" w="100%">
            <Box>
              <ChangeThemeBtn />
              <ChangeLanguageBtn />
              <ButtonLink variant="ghost" to={ROUTES.ADMIN}>
                🏗
              </ButtonLink>
            </Box>
            <Logout />
          </Flex>
        }
      >
        <Flex direction="column" align="space-between" justify="flex-start">
          <PresentationLinks m="1rem 0" />
          <Flex
            direction="column"
            align="flex-start"
            justify="flex-start"
            mt={4}
          >
            <Text fontWeight="bold" fontSize="1.25rem">
              {t("NavBarTemplate.categories")}
            </Text>
            <Divider m="1rem 0" />
            {renderLinks()}
          </Flex>
        </Flex>
      </CustomDrawer>
    </>
  )
}

export default NavBarTemplate
