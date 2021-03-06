import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
import NotificationList from "components/_organisms/NotificationList"
import ButtonTooltip from "components/_molecules/ButtonTooltip"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// routes
import { ROUTES } from "routes"
// context
import { NotificationContext } from "context"

/**
 * NotificationsTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente template de las Notificaciones
 */
const NotificationsTemplate = () => {
  const [t] = useTranslation("global")
  const {
    getNotificationsViewedFalse,
    handleNotificationsToViewedTrue,
  } = useContext(NotificationContext)

  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="flex-start"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <SubHeader
        withTitle
        title={t("NotificationsTemplate.title")}
        backTo={ROUTES.HOME}
        withRightContent
        rightContent={
          getNotificationsViewedFalse().length > 0 && (
            <ButtonTooltip
              mr={2}
              tooltipLabel={t("NotificationsBtn.markAsViewed")}
              onClick={() => handleNotificationsToViewedTrue()}
            >
              👁‍🗨
            </ButtonTooltip>
          )
        }
      />
      <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
        <NotificationList />
      </Card>
    </Flex>
  )
}

export default NotificationsTemplate
