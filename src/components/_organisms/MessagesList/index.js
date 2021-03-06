import React from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Divider, Flex, toast } from "@chakra-ui/react"
// components
import SkItemComplete from "components/_molecules/ItemComplete/SkItemComplete"
import MessageComplete from "components/_molecules/MessageComplete"
// firebase
import { FirebaseClient } from "firebase/client"

/**
 * MessagesList Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente listado de mensajes
 */
const MessagesList = ({ data, loading }) => {
  const [t] = useTranslation("global")
  const firebase = new FirebaseClient()

  /**
   * handleDelete
   * @function
   * @param {string} id
   * @description Elimina el registro de la Base de datos ⚠
   */
  const handleDeleteMessage = async (id) => {
    await firebase
      .deleteMessagesByID(id)
      .then(() => {
        toast({
          title: t("AdminTemplate.deleteMessageSuccess"),
          description: "",
          status: "success",
          position: "bottom",
          duration: 5000,
          isClosable: true,
        })
      })
      .catch(() => {
        toast({
          title: t("AdminTemplate.deleteError"),
          description: "",
          status: "error",
          position: "bottom",
          duration: 5000,
          isClosable: true,
        })
      })
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      w="100%"
      p={10}
    >
      {loading ? (
        <SkItemComplete />
      ) : data && data.length > 0 ? (
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          w="100%"
        >
          {data
            .map((message, index) => {
              return (
                <>
                  <Flex
                    key={index}
                    w="100%"
                    justify="space-between"
                    align="center"
                  >
                    <MessageComplete
                      message={message}
                      withDelete
                      onDelete={() => handleDeleteMessage(message.id)}
                    />
                  </Flex>
                  <Divider m="1.5rem 0" />
                </>
              )
            })
            .reverse()}
        </Flex>
      ) : (
        <Flex>{t("AdminTemplate.noItems")}</Flex>
      )}
    </Flex>
  )
}

MessagesList.propTypes = {
  data: PropTypes.any.isRequired, // 😝
  loading: PropTypes.bool.isRequired,
}

export default MessagesList
