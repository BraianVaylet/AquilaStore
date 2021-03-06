import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Badge,
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
// utils
import { IMG } from "utils/images"
import { PropTypesProduct } from "utils/propTypes"
// hooks
import useTimeAgo from "hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat"
// components
import ItemProductList from "components/_organisms/ItemProductList"

/**
 * ItemPurchases Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente de item de las notificaciones
 */
const ItemPurchases = ({ item }) => {
  const [t] = useTranslation("global")
  const timeago = useTimeAgo(item.createdAt)
  const dateFormated = useDateTimeFormat(item.createdAt)
  const { isOpen, onToggle } = useDisclosure()
  const [products, setProducts] = useState([])

  useEffect(() => item && setProducts(item.products), [item])

  /**
   * handleItemImg
   * @function
   * @description retorna imagen de la notificación
   * @returns {string}
   */
  const handleItemImg = () =>
    item && products.length === 1
      ? item.products[0].pictureUrl
      : IMG.SHOPPING_BAG

  /**
   * handleItemTitle
   * @function
   * @description retorna título de la notificación
   * @returns {string}
   */
  const handleItemTitle = () =>
    item && products.length === 1
      ? `${t("ItemNotification.bought")} ${products[0].title}`
      : `${t("ItemNotification.bought")} ${products.length} ${t(
          "ItemNotification.products"
        )}`

  return (
    <Box minH="10vh" w="100%">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="nowrap"
        w="100%"
        mb={5}
      >
        <Flex
          direction="row"
          justify="flex-start"
          align="center"
          wrap="nowrap"
          w="100%"
          mb={5}
        >
          <Image
            boxSize="3rem"
            borderRadius="full"
            src={handleItemImg()}
            mr="12px"
          />
          <Flex direction="column" align="flex-start" justify="center">
            <Flex align="center">
              <Text mr={2}>{t("ItemNotification.order")}:</Text>{" "}
              <Text color="brand.secundary">{item.id}</Text>
            </Flex>
            <Text>
              <time title={dateFormated}>
                <b>{dateFormated}</b>
              </time>{" "}
              | {handleItemTitle()}
            </Text>
            {
              <Badge ml="1" colorScheme="blue">
                ${item.total}
              </Badge>
            }
            <Text fontSize=".75rem">
              <time title={dateFormated}>{timeago}</time>
            </Text>
          </Flex>
        </Flex>
        <Button onClick={onToggle}>
          {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex direction="column" align="flex-start" justify="center">
          <ItemProductList
            data={products}
            asComponent={Box}
            type="item"
            design={1}
            withSlice={false}
            withDelete={false}
          />
        </Flex>
      </Collapse>
    </Box>
  )
}

ItemPurchases.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    addressNum: PropTypes.string.isRequired,
    addressInfo: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    itsPaid: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape(PropTypesProduct).isRequired),
  }),
}

export default ItemPurchases
