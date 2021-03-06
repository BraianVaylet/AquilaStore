import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import BtnInfoAdmin from "components/_atoms/BtnInfoAdmin"

/**
 * BtnInfoAdminList Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente listado de BtnInfoAdmin para info en admin
 */
const BtnInfoAdminList = () => {
  const [t] = useTranslation("global")

  return (
    <Flex
      direction="column"
      mb="1rem"
      align="flex-start"
      justify="space-between"
      w="100%"
    >
      <BtnInfoAdmin
        mb={4}
        btnText="✔"
        infoText={t("AdminTemplate.activeTrue")}
      />
      <BtnInfoAdmin
        mb={4}
        btnText="❌"
        infoText={t("AdminTemplate.activeFalse")}
      />
      <BtnInfoAdmin mb={4} btnText="✏" infoText={t("AdminTemplate.edit")} />
      <BtnInfoAdmin mb={4} btnText="🗑" infoText={t("AdminTemplate.delete")} />
    </Flex>
  )
}

export default BtnInfoAdminList
