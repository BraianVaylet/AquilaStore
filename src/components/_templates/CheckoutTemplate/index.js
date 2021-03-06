import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
import { MY_BREAKPOINTS } from "styles/theme"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
import PaymentForm from "components/_organisms/PaymentForm"
import PaymentMenuTemplate from "components/_templates/PaymentMenuTemplate"
// routes
import { ROUTES } from "routes"
import LoginAlert from "components/_organisms/LoginAlert"
// hooks
import useUser from "hooks/useUser"
import CustomAvatar from "components/_atoms/AvatarText"

/**
 * CheckoutTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description template del checkout
 */
const CheckoutTemplate = () => {
  const [t] = useTranslation("global")
  const user = useUser()
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => (user ? setShowLogin(false) : setShowLogin(true)), [user])

  /**
   * handleRows
   * @function
   * @returns {number} number of columns
   */
  const handleRows = () => (mediaQueryMin1280 ? 3 : mediaQueryMax600 ? 1 : 2)

  return (
    <>
      <Flex
        p={4}
        mt={8}
        direction="column"
        align="center"
        justify="flex-start"
        w={setValueResponsiveMin1280("72.5%", "100%")}
      >
        <SubHeader
          backTo={ROUTES.CART}
          withHelp
          withTitle
          title={t("CheckoutTemplate.title")}
          withRightContent
          rightContent={
            user &&
            !mediaQueryMax600 && (
              <CustomAvatar
                src={user.avatar}
                alt={user.username}
                text={`${t("Checkout.hello")}, ${user.username}`}
              />
            )
          }
        >
          <Flex direction="column" align="flex-start" justify="flex-start">
            <Text mb={4}>
              <b>1.</b> {t("Checkout.helpStage1")}
            </Text>
            <Text mb={4}>
              <b>2.</b> {t("Checkout.helpStage2")}
            </Text>
            <Text mb={4}>
              <b>3.</b> {t("Checkout.helpStage3")}
            </Text>
          </Flex>
        </SubHeader>
        <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
          <Grid w="100%" templateColumns={`repeat(${handleRows()}, 1fr)`}>
            <GridItem colSpan={1} colStart={1} colEnd={3} p={6}>
              <PaymentForm />
            </GridItem>
            <GridItem colSpan={1} p={6}>
              <PaymentMenuTemplate />
            </GridItem>
          </Grid>
        </Card>
      </Flex>
      {showLogin && <LoginAlert />}
    </>
  )
}

export default CheckoutTemplate
