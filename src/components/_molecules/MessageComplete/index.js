import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { IoLogoLinkedin } from "react-icons/io5"
// chakra-ui
import { Button, Flex, Icon, Tag, Text } from "@chakra-ui/react"
import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons"
// hooks
import useTimeAgo from "hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat"
// components
import ExternalLink from "components/_atoms/ExternalLink"

/**
 * MessageComplete Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente para un mensaje
 */
const MessageComplete = ({ message, onDelete, withDelete }) => {
  const [t] = useTranslation("global")
  const timeago = useTimeAgo(message.createdAt)
  const dateFormat = useDateTimeFormat(message.createdAt)

  return (
    <Flex align="flex-start" justify="space-between" w="100%">
      <Flex direction="column" align="flex-start" justify="flex-start">
        <Text fontWeight="bold">
          {message?.linkedin && (
            <Tag bgColor="purple.500" mr={2}>
              {t("MessageComplete.work")}
            </Tag>
          )}
          {message?.comment && (
            <Tag bgColor="yellow.500" mr={2}>
              {t("MessageComplete.help")}
            </Tag>
          )}
          {dateFormat} ({timeago})
        </Text>
        <Text fontSize="1.5rem">
          {t("MessageComplete.messageFrom")}: {message.name}
        </Text>
        <Text>
          <EmailIcon /> {message.email}
        </Text>
        <Text>
          <PhoneIcon /> {message.phone}
        </Text>
        {message?.linkedin && (
          <ExternalLink href={message.linkedin}>
            <Icon as={IoLogoLinkedin} /> {message.linkedin}
          </ExternalLink>
        )}
        {message?.comment && (
          <Text>
            <ChatIcon /> {message.comment}
          </Text>
        )}
      </Flex>
      <Flex>
        <Button as={ExternalLink} href={`mailto:${message.email}`}>
          {t("MessageComplete.replyEmail")}
        </Button>
        {withDelete && (
          <Button ml={2} onClick={onDelete}>
            🗑
          </Button>
        )}
      </Flex>
    </Flex>
  )
}

MessageComplete.defaultProps = {
  withDelete: true,
}

MessageComplete.propTypes = {
  message: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    linkedin: PropTypes.string,
    comment: PropTypes.string,
    createdAt: PropTypes.any.isRequired,
  }),
  withDelete: PropTypes.bool,
  onDelete: PropTypes.func,
}

export default MessageComplete
