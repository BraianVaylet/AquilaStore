import React from "react"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import NotificationsTemplate from "components/_templates/NotificationsTemplate"

/**
 * Notifications Page
 * @component
 * @author Braian D. Vaylet
 * @description página donde se muestran todas las notificaciones
 */
const Notifications = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.notifications")}
        description={t("HelmetSEO.description.notifications")}
      />
      <NotificationsTemplate />
    </>
  )
}

export default Notifications
