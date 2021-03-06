import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { BellIcon } from "@chakra-ui/icons"
// chakra-ui
import { Flex, MenuItem } from "@chakra-ui/react"
// context
import { NotificationContext } from "context"
// components
import ButtonLink from "components/_atoms/ButtonLink"
import CustomMenu from "components/_atoms/CustomMenu"
import ButtonTooltip from "components/_molecules/ButtonTooltip"
import ItemNotificationList from "components/_organisms/ItemNotificationList"
// routes
import { ROUTES } from "routes"

/**
 * NotificationsBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con contador
 */
const NotificationsBtn = ({ withText }) => {
  const {
    notification,
    getNotificationsViewedFalse,
    handleNotificationsToViewedTrue,
  } = useContext(NotificationContext)
  const [t] = useTranslation("global")
  const count = getNotificationsViewedFalse().length
  const slice = 6

  return (
    <CustomMenu
      btnIcon={<BellIcon w="1.5rem" h="1.5rem" />}
      btnText={t("NotificationsBtn.title")}
      withText={withText}
      count={count}
      footer={
        <Flex direction="row" align="center" justify="flex-end">
          {count > slice && (
            <ButtonLink
              tooltipLabel={t("NotificationsBtn.seeMoreTooltip")}
              to={ROUTES.NOTIFICATIONS}
              mr={2}
              size="lg"
            >
              👇
            </ButtonLink>
          )}
          {count > 0 && (
            <ButtonTooltip
              mr={2}
              tooltipLabel={t("NotificationsBtn.markAsViewed")}
              onClick={() => handleNotificationsToViewedTrue()}
            >
              👁‍🗨
            </ButtonTooltip>
          )}
        </Flex>
      }
    >
      {count && (
        <ItemNotificationList
          data={notification}
          as={MenuItem}
          withSlice
          slice={slice}
        />
      )}
    </CustomMenu>
  )
}

NotificationsBtn.defaultProps = {
  withText: false,
}

NotificationsBtn.propTypes = {
  withText: PropTypes.bool,
}

export default NotificationsBtn
