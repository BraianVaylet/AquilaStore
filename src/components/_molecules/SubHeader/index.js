import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
// chakra-ui
import { Box, Flex, Text, Button } from "@chakra-ui/react"
// components
import HelpBtn from "components/_molecules/HelpBtn"

/**
 * SubHeader Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente SubHeader con info y opcion de back
 */
const SubHeader = ({
  backTo,
  withHelp,
  children,
  withTitle,
  title,
  withRightContent,
  rightContent,
}) => {
  const [t] = useTranslation("global")
  const routerHistory = useHistory()

  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      w="100%"
      pb={4}
    >
      <Flex direction="row" align="center" justify="flex-start">
        <Button onClick={() => routerHistory.push(backTo)} mr={4}>
          <Text>{t("SubHeader.back")}</Text>
        </Button>
        {withHelp && (
          <Box mr={4}>
            <HelpBtn>{children}</HelpBtn>
          </Box>
        )}
        {withTitle && (
          <Text fontWeight="bold" fontSize="1.5rem" mr={4}>
            | {title}
          </Text>
        )}
      </Flex>
      {withRightContent && rightContent}
    </Flex>
  )
}

SubHeader.defaultProps = {
  withHelp: false,
  withTitle: false,
  withRightContent: false,
}

SubHeader.propTypes = {
  backTo: PropTypes.string.isRequired,
  withHelp: PropTypes.bool,
  children: PropTypes.element,
  withTitle: PropTypes.bool,
  title: PropTypes.string,
  withRightContent: PropTypes.bool,
  rightContent: PropTypes.node,
}

export default SubHeader
