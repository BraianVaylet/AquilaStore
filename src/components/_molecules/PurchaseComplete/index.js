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
import {
  EmailIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PhoneIcon,
  InfoIcon,
} from "@chakra-ui/icons"
// utils
import { IMG } from "utils/images"
import { PropTypesProduct } from "utils/propTypes"
// components
import ItemProductList from "components/_organisms/ItemProductList"
// hooks
import useDateTimeFormat from "hooks/useDateTimeFormat"

/**
 * PurchaseComplete Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente de item de las notificaciones
 */
const PurchaseComplete = ({ item }) => {
  const [t] = useTranslation("global")
  const { isOpen, onToggle } = useDisclosure()
  const dateFormated = useDateTimeFormat(item.createdAt)
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
      ? `${t("PurchaseComplete.bought")}: ${products[0].title}`
      : `${t("PurchaseComplete.bought")}: ${products.length} ${t(
          "PurchaseComplete.products"
        )}`

  return (
    <Box minH="10vh" w="100%">
      <Flex
        direction="row"
        justify="space-between"
        align="flex-start"
        wrap="nowrap"
        w="100%"
        mb={5}
      >
        <Flex
          direction="row"
          justify="flex-start"
          align="flex-start"
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

            <Badge fontSize="1.5rem" colorScheme="blue">
              ${item.total}
            </Badge>

            <Flex direction="column" align="flex-start" justify="flex-start">
              <Text fontSize="1.2rem" fontWeight="bold" color="brand.primary">
                {item.fullname}
              </Text>
              <Text>
                <EmailIcon /> {item.email}
              </Text>
              <Text>
                <PhoneIcon /> {item.phone}
              </Text>
              <Text>
                <InfoIcon /> {item.address} - {item.addressNum} -{" "}
                {item.addressInfo}
              </Text>
            </Flex>
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

PurchaseComplete.propTypes = {
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

export default PurchaseComplete
