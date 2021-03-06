import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
import HelmetSEO from "components/_atoms/HelmetSEO"

/**
 * Help Page
 * @component
 * @author Braian D. Vaylet
 * @description página de ayuda
 */
const Help = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.help")}
        description={t("HelmetSEO.description.help")}
      />
      <Flex>
        <Text>Página en construción 👷‍♂️👷‍♀️</Text>
      </Flex>
    </>
  )
}

export default Help
