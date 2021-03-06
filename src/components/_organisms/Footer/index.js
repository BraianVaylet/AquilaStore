import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Button,
  Flex,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"
// styles
import { setValueResponsiveMax600 } from "styles/utils"
import { MY_BREAKPOINTS } from "styles/theme"
// components
import LogoOpc2 from "components/_molecules/LogoOpc2"
import SubFooter from "components/_molecules/SubFooter"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// routes
import { ROUTES } from "routes"
import ItemNavLink from "components/_atoms/ItemNavLink"
import ExternalLink from "components/_atoms/ExternalLink"
import CustomModal from "components/_atoms/CustomModal"
import WorkWithUsForm from "../WorkWithUsForm"
import HelpForm from "../HelpForm"

/**
 * Footer Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente footer de la aplicacion
 */
const Footer = () => {
  const [t] = useTranslation("global")
  const modalWorkWithUs = useDisclosure()
  const modalHelp = useDisclosure()
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="center"
      w="100%"
      mt={4}
      boxShadow="lg"
    >
      <Flex
        direction={setValueResponsiveMax600("column", "row")}
        justify="space-between"
        align="center"
        w="100%"
        p={6}
        bgColor={backgroundColor}
      >
        {!mediaQueryMax600 && <LogoOpc2 />}
        <Flex
          direction={setValueResponsiveMax600("column", "row")}
          justify="flex-end"
          align={setValueResponsiveMax600("flex-start", "center")}
        >
          <Button
            variant="ghost"
            onClick={modalWorkWithUs.onOpen}
            m={setValueResponsiveMax600("1rem 0", "0 1rem")}
          >
            {t("Footer.workWithUs")}
          </Button>

          <ItemNavLink
            to={ROUTES.TERMS_AND_COND}
            m={setValueResponsiveMax600("1rem 0", "0 1rem")}
          >
            {t("Footer.termsAndConditions")}
          </ItemNavLink>

          <Button
            variant="ghost"
            onClick={modalHelp.onOpen}
            m={setValueResponsiveMax600("1rem 0", "0 1rem")}
          >
            {t("Footer.help")}
          </Button>

          <ExternalLink
            href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            m={setValueResponsiveMax600("1rem 0", "0 1rem")}
          >
            {t("Footer.covidPrecautions")}
          </ExternalLink>
        </Flex>
      </Flex>
      <SubFooter />

      <CustomModal
        isOpen={modalWorkWithUs.isOpen}
        onClose={modalWorkWithUs.onClose}
        withHeader
        header={<Text>{t("Footer.workWithUs")}</Text>}
      >
        <WorkWithUsForm onClose={modalWorkWithUs.onClose} />
      </CustomModal>

      <CustomModal
        isOpen={modalHelp.isOpen}
        onClose={modalHelp.onClose}
        withHeader
        header={<Text>{t("Footer.help")}</Text>}
      >
        <HelpForm onClose={modalHelp.onClose} />
      </CustomModal>
    </Flex>
  )
}

export default Footer
