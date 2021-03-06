import React from "react"
import { Link as RouterLink } from "react-router-dom"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chokra-ui
import { Button, Link, Text } from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"
// router
import { ROUTES } from "routes"
// components
import CustomPopover from "components/_atoms/CustomPopover"

/**
 * HelpBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con btn y popover que muestra una ayuda
 */
const HelpBtn = ({ children }) => {
  const [t] = useTranslation("global")

  return (
    <CustomPopover
      btn={
        <Button>
          <InfoOutlineIcon />
        </Button>
      }
      header={t("HelpBtn.help")}
      footer={
        <Text>
          {t("HelpBtn.forMoreHelp")}{" "}
          <Link color="brand.primary" as={RouterLink} to={ROUTES.HELP}>
            {t("HelpBtn.here")}
          </Link>
        </Text>
      }
    >
      {children}
    </CustomPopover>
  )
}

HelpBtn.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HelpBtn
