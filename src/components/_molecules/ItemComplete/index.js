import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Flex, Image, Tag, Text } from "@chakra-ui/react"
// components
import CustomGender from "components/_atoms/CustomGender"
import CustomColorsBoxList from "components/_molecules/CustomColorsBoxList"
import CustomSizeBoxList from "components/_molecules/CustomSizeBoxList"
import Calification from "components/_molecules/Calification"
// utils
import { PropTypesProduct } from "utils/propTypes"

/**
 * ItemComplete Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Item con toda la info
 */
const ItemComplete = ({ item }) => {
  const [t] = useTranslation("global")

  return (
    <Box minH="20vh" w="100%">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="nowrap"
        w="100%"
      >
        <Flex justify="flex-start" align="flex-start">
          <Flex align="center">
            <Image
              boxSize="3rem"
              borderRadius="full"
              src={item.pictureUrl}
              alt={item.title}
              mr="12px"
            />
          </Flex>
          <Flex
            direction="column"
            align="flex-start"
            justify="flex-start"
            mr="12px"
          >
            <Flex align="center">
              <Text fontSize="1.25rem" fontWeight="bold">
                {item.title}
              </Text>
              {item.isActive ? (
                <Tag bg="green.500" ml={2}>
                  {t("ItemComplete.active")}
                </Tag>
              ) : (
                <Tag bg="red.500" ml={2}>
                  {t("ItemComplete.inactive")}
                </Tag>
              )}
              {item.stock <= 0 && (
                <Tag bg="tomato" ml={2}>
                  {t("ItemComplete.noStock")}
                </Tag>
              )}
            </Flex>
            <Text>{item.description}</Text>
            <Text>
              ${item.price} | Stock: {item.stock}
            </Text>
            <Calification value={item.calification} />
            <Text>
              {t("ItemComplete.brandModel")}: {item.brand} - {item.model}
            </Text>
            <Flex align="center">
              <Text mr={2}>{t("ItemComplete.sizes")}:</Text>
              <CustomSizeBoxList value={item.sizes} />
            </Flex>
            <Flex align="center">
              <Text mr={2}>{t("ItemComplete.colors")}:</Text>
              <CustomColorsBoxList value={item.colors} />
            </Flex>
            <Flex align="center">
              <Text mr={2}>{t("ItemComplete.gender")}:</Text>
              <CustomGender value={item.gender} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

ItemComplete.propTypes = {
  item: PropTypes.shape(PropTypesProduct).isRequired,
}

export default ItemComplete
