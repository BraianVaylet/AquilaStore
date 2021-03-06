import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Center, Divider, Flex } from "@chakra-ui/react"
// context
import { NotificationContext } from "context"
// components
import ItemNotificaton from "components/_molecules/ItemNotification"

/**
 * NotificationList Component
 * @component
 * @author Braian D. Vaylet
 * @description componente listado de todas las notificaciones
 */
const NotificationList = () => {
  const [t] = useTranslation("global")
  const { notification } = useContext(NotificationContext)
  const count = notification.length

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      w="100%"
      p={10}
    >
      {count > 0 ? (
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          w="100%"
        >
          {notification
            .map((_notification, index) => {
              return (
                <Box key={index} w="100%">
                  <Box w="100%">
                    <ItemNotificaton item={_notification} />
                  </Box>
                  <Divider m="1.5rem 0" />
                </Box>
              )
            })
            .reverse()}
        </Flex>
      ) : (
        <Center w="100%" h="80vh">
          <Flex fontSize="2rem">{t("NotificationList.noItems")}</Flex>
        </Center>
      )}
    </Flex>
  )
}

export default NotificationList
