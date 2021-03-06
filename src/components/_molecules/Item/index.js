import React from "react"
import PropTypes from "prop-types"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import { Flex, Text, Heading, Box, Link } from "@chakra-ui/react"
// components
import ImageBox from "components/_atoms/ImageBox"
import CartCount from "components/_atoms/CartCount"
import Card from "components/_atoms/Card"
import ItemCount from "components/_molecules/ItemCount" // ! AtomicDesignError
import ButtonModalFullImage from "components/_molecules/ButtonModalFullImage" // ! AtomicDesignError
import FavouriteIconBtn from "components/_molecules/FavouriteIconBtn" // ! AtomicDesignError
// routes
import { ROUTES } from "routes"
// utils
import { PropTypesProduct } from "utils/propTypes"

// const
const MAX_HEIGHT = "75vh"
const IMG_SIZE = "35vh"

/**
 * Item Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Item para ser listado, con link a ItemDetail
 */
const Item = ({ item }) => {
  return (
    <Card
      direction="column"
      align="center"
      justify="flex-start"
      position="relative"
      m="1.5rem"
      minH={MAX_HEIGHT}
      maxH={MAX_HEIGHT}
      h={MAX_HEIGHT}
      w={IMG_SIZE}
    >
      <Link as={RouterLink} to={ROUTES.ITEM_DETAIL + "/" + item.id}>
        <ImageBox
          name={item.pictureName}
          url={item.pictureUrl}
          id={item.id}
          w={IMG_SIZE}
          minW={IMG_SIZE}
          maxW={IMG_SIZE}
          h={IMG_SIZE}
          minH={IMG_SIZE}
          maxH={IMG_SIZE}
        />
      </Link>
      <Box position="absolute" top="3" right="3">
        <FavouriteIconBtn item={item} />
      </Box>
      <Box position="absolute" top="1" left="1">
        <ButtonModalFullImage
          pictureName={item.pictureName}
          pictureUrl={item.pictureUrl}
          title={item.title}
        />
      </Box>
      <Flex
        p="10px"
        direction="column"
        justify="space-between"
        align="center"
        w="100%"
        h={IMG_SIZE}
        minH={IMG_SIZE}
        maxH={IMG_SIZE}
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          w="100%"
          h="40%"
        >
          <Flex w="100%" direction="row" align="center" justify="space-between">
            <Heading fontSize="2.5rem" mb="10px">
              ${item.price}
            </Heading>
            <Box mb={2} mr={2}>
              <CartCount item={item} />
            </Box>
          </Flex>
          <Text fontSize="1rem">{item.title}</Text>
        </Flex>
        <Box w="80%" h="60%">
          <ItemCount stock={item.stock} item={item} />
        </Box>
      </Flex>
    </Card>
  )
}

Item.propTypes = {
  item: PropTypes.shape(PropTypesProduct).isRequired,
}

export default Item
