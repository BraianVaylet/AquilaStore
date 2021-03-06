import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react"
// utils
import { IMG } from "utils/images"
import { PropTypesProduct } from "utils/propTypes"
// hooks
import useTimeAgo from "hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat"

/**
 * ItemNotification Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente de item de las notificaciones
 */
const ItemNotificaton = ({ item }) => {
  const [t] = useTranslation("global")
  const timeago = useTimeAgo(item.date)
  const dateFormated = useDateTimeFormat(item.date)

  /**
   * handleItemImg
   * @function
   * @description retorna imagen de la notificación
   * @returns {string}
   */
  const handleItemImg = () =>
    item.count === 1 ? item.items[0].pictureUrl : IMG.SHOPPING_BAG

  /**
   * handleItemTitle
   * @function
   * @description retorna título de la notificación
   * @returns {string}
   */
  const handleItemTitle = () =>
    item.count === 1
      ? `${t("ItemNotification.bought")} ${item.items[0].title}`
      : `${t("ItemNotification.bought")} ${item.count} ${t(
          "ItemNotification.products"
        )}`

  return (
    <Box minH="10vh">
      <Flex
        direction="row"
        justify="flex-start"
        align="flex-start"
        wrap="nowrap"
      >
        <Image
          boxSize="3rem"
          borderRadius="full"
          src={handleItemImg()}
          mr="12px"
        />
        <Flex direction="column" align="flex-start" justify="center">
          <Flex align="center" mb={2}>
            {!item.viewed && (
              <Badge mr={2} fontSize="1rem" colorScheme="green">
                NEW
              </Badge>
            )}
            <time title={dateFormated}>
              <b>{dateFormated}</b>
            </time>{" "}
            <Text ml={2}>| {handleItemTitle()}</Text>
          </Flex>
          {item.count && <Badge colorScheme="blue">${item.total}</Badge>}
          <Text fontSize=".75rem" mt={2}>
            <time title={dateFormated}>{timeago}</time>
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

ItemNotificaton.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape(PropTypesProduct).isRequired),
    viewed: PropTypes.bool.isRequired,
  }),
}

export default ItemNotificaton
