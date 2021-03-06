import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import { Badge, Flex, Link, Text, Image, Box, Kbd } from "@chakra-ui/react"
// routes
import { ROUTES } from "routes"
// styles
import { setValueResponsiveMax600 } from "styles/utils"
// components
import ButtonLink from "components/_atoms/ButtonLink" // ! AtomicDesignError
import CustomSelect from "components/_atoms/CustomSelect"
import CustomColorsBox from "components/_atoms/CustomColorBox"
import ItemCount from "components/_molecules/ItemCount" // ! AtomicDesignError
import ButtonTooltip from "components/_molecules/ButtonTooltip" // ! AtomicDesignError
// utils
import { handleMapArraySelectFormat } from "utils"
import { PropTypesProduct } from "utils/propTypes"
// context
import { CartContext } from "context"

/**
 * ItemProducts
 * @component
 * @author Braian D. Vaylet
 * @description Componente para los menu de favoritos y del carrito
 */
const ItemProduct = ({ item, onDelete, onSave, design, withDelete }) => {
  const [t] = useTranslation("global")
  const { addColorToItemCart, addSizeToItemCart } = useContext(CartContext)
  const [colorValue, setColorValue] = useState(item.color || null)
  const [sizeValue, setSizeValue] = useState(item.size || null)

  useEffect(() => colorValue && addColorToItemCart(item.id, colorValue), [
    colorValue,
  ])

  useEffect(() => sizeValue && addSizeToItemCart(item.id, sizeValue), [
    sizeValue,
  ])

  const handleChangeColor = (e) => setColorValue(e.target.value)
  const handleChangeSize = (e) => setSizeValue(e.target.value)

  return design === 1 ? (
    <Box minH="10vh" w="100%">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="nowrap"
        w="100%"
      >
        <Flex align="center">
          <Image
            boxSize="3rem"
            borderRadius="full"
            src={item.pictureUrl}
            alt={item.title}
            mr="12px"
          />
          <Link as={RouterLink} to={ROUTES.ITEM_DETAIL + "/" + item.id}>
            <Text>
              <b>${item.price}</b> | {item.title}
            </Text>
            <Flex align="center" justify="flex-start">
              {item.count && (
                <Badge mr="1rem" fontSize="1rem" colorScheme="green">
                  x{item.count}
                </Badge>
              )}
              {item.color && <CustomColorsBox color={item.color} />}
              {item.size && <Kbd>{item.size}</Kbd>}
            </Flex>
          </Link>
        </Flex>
        {onDelete && withDelete && (
          <ButtonTooltip
            ml={6}
            onClick={onDelete}
            tooltipLabel={t("ItemProduct.deleteItem")}
          >
            ❌
          </ButtonTooltip>
        )}
      </Flex>
    </Box>
  ) : design === 2 ? (
    <Box minH="10vh">
      <Flex
        direction={setValueResponsiveMax600("column", "row")}
        justify="space-between"
        align={setValueResponsiveMax600("flex-start ", "center")}
        wrap="nowrap"
      >
        <Flex
          direction="row"
          justify="flex-start"
          align="center"
          w={setValueResponsiveMax600("100%", "40%")}
        >
          <Image
            boxSize={setValueResponsiveMax600("2.5rem", "5rem")}
            borderRadius="full"
            src={item.pictureUrl}
            alt={item.title}
            mr="20px"
          />
          <Flex direction="column" justify="center" align="flex-start">
            <Link as={RouterLink} to={ROUTES.ITEM_DETAIL + "/" + item.id}>
              <Text fontWeight="bold">{item.title}</Text>
              {item.count && (
                <Badge ml="1" colorScheme="green">
                  x{item.count}
                </Badge>
              )}
            </Link>
            <Flex mt={4}>
              {withDelete && (
                <ButtonTooltip
                  mr={4}
                  size="xs"
                  onClick={onDelete}
                  tooltipLabel={t("ItemProduct.deleteItem")}
                >
                  {t("ItemProduct.delete")}
                </ButtonTooltip>
              )}

              <ButtonLink
                to={ROUTES.PRODUCTS + "/" + item.category}
                mr={4}
                size="xs"
              >
                {t("ItemProduct.seeMore")}
              </ButtonLink>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction={setValueResponsiveMax600("column", "row")}
          align={"flex-start"}
          justify="space-between"
          w={setValueResponsiveMax600("100%", "60%")}
          mt={setValueResponsiveMax600("2rem", "0")}
        >
          <Box mr={8} w="30%">
            <ItemCount
              stock={item.stock}
              item={item}
              design={2}
              initial={item.count}
            />
          </Box>
          <Flex align="flex-start" w="40%">
            <CustomSelect
              placeholder="color"
              value={colorValue}
              onChange={handleChangeColor}
              data={handleMapArraySelectFormat(item.colors)}
              mr={2}
            />
            <CustomSelect
              placeholder="size"
              value={sizeValue}
              onChange={handleChangeSize}
              data={handleMapArraySelectFormat(item.sizes)}
            />
          </Flex>
          <Flex
            direction="column"
            align="flex-end"
            justify="flex-start"
            minW="30%"
            w="30%"
          >
            <Text fontSize="2rem">
              <b>${item.price * item.count}</b>
            </Text>
            <Text
              color="gray.500"
              fontSize={setValueResponsiveMax600(".75rem", "1rem")}
            >
              {item.count}u. (${item.price})
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  ) : (
    <Box />
  )
}

ItemProduct.defaultProps = {
  design: 1,
}

ItemProduct.propTypes = {
  item: PropTypes.shape(PropTypesProduct).isRequired,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  /**
   * design = 1: Preparado para ser usado en el menu desplegable de la NavBar
   * design = 2: Preparado para ser usado en la pagina del carrito
   */
  design: PropTypes.number,
  withDelete: PropTypes.bool,
}

export default ItemProduct
