import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react"
import ImageBox from "components/_atoms/ImageBox"
// utils
import { IMG } from "utils/images"
import { CATEGORIES } from "utils/constants"
// routes
import { ROUTES } from "routes"
// styles
import { COLORS, MY_BREAKPOINTS } from "styles/theme"

/**
 * BannerLinks Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente banner con links a las categorias principales
 */
const BannerLinks = ({ design, active }) => {
  const [t] = useTranslation("global")
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  return design === 1 ? (
    <Flex
      w="98%"
      direction={mediaQueryMax600 ? "column" : "row"}
      m="0 1rem"
      align="center"
      justify="space-between"
      maxH="75vh"
      h="75vh"
    >
      <Flex
        h="100%"
        w={mediaQueryMax600 ? "100%" : "50%"}
        align="center"
        justify="center"
        direction={mediaQueryMax600 ? "column" : "row"}
      >
        <Flex
          as={Link}
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.JACKETS}
          _hover={{
            opacity: ".95",
          }}
          bg={COLORS.jacket}
          borderRadius="5px"
          align="center"
          w={mediaQueryMax600 ? "100%" : "60%"}
          h="100%"
          position="relative"
          boxShadow="lg"
        >
          <ImageBox url={IMG.JACKET} w="100%" h="100%" />
          <Text
            position="absolute"
            top="2.5"
            left="5"
            color="white"
            fontWeight="900"
            fontSize="3rem"
            letterSpacing="-4px"
          >
            {t("BannerLinks.jackets")}
          </Text>
        </Flex>
        <Flex
          as={Link}
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.SHIRTS}
          _hover={{
            opacity: ".95",
          }}
          bg={COLORS.shirt}
          w={mediaQueryMax600 ? "100%" : "40%"}
          align="center"
          m="1rem"
          borderRadius="5px"
          direction="column"
          h="100%"
          position="relative"
          boxShadow="lg"
        >
          <ImageBox title="" url={IMG.SHIRT} w="100%" h="100%" />
          <Text
            position="absolute"
            top="50%"
            color="white"
            fontWeight="900"
            fontSize="3rem"
            letterSpacing="-4px"
          >
            {t("BannerLinks.shirts")}
          </Text>
        </Flex>
      </Flex>
      <Flex
        h="100%"
        w={mediaQueryMax600 ? "100%" : "50%"}
        align="center"
        justify="center"
        direction="column"
      >
        <Flex
          as={Link}
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.SHOES}
          _hover={{
            opacity: ".95",
          }}
          bg={COLORS.shoes}
          w="100%"
          align="center"
          borderRadius="5px"
          h="50%"
          position="relative"
          boxShadow="lg"
        >
          <ImageBox url={IMG.SHOES} w="100%" h="100%" />
          <Text
            position="absolute"
            right="10"
            color="white"
            fontWeight="900"
            fontSize="3rem"
            letterSpacing="-4px"
          >
            {t("BannerLinks.shoes")}
          </Text>
        </Flex>
        <Flex
          as={Link}
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.ACCESORIES}
          _hover={{
            opacity: ".95",
          }}
          bg={COLORS.accesories}
          w="100%"
          align="center"
          justify="flex-end"
          mt="1rem"
          borderRadius="5px"
          direction="row"
          h="50%"
          position="relative"
          boxShadow="lg"
        >
          <Text
            position="absolute"
            left="10"
            bottom="10"
            color="white"
            fontWeight="900"
            fontSize="3rem"
            letterSpacing="-4px"
          >
            {t("BannerLinks.accesories")}
          </Text>
          <Flex w="50%" h="100%" justify="flex-end">
            <ImageBox url={IMG.WATCH} w="100%" h="100%" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  ) : design === 2 ? (
    <Flex w="100%" h="30vh">
      <BannerLinkImgBox
        active={active === CATEGORIES.JACKETS}
        color={COLORS.jacket}
        text={t("BannerLinks.jackets")}
        image={IMG.JACKET}
        route={ROUTES.PRODUCTS + "/" + CATEGORIES.JACKETS}
      />
      <BannerLinkImgBox
        active={active === CATEGORIES.SHIRTS}
        color={COLORS.shirt}
        text={t("BannerLinks.shirts")}
        image={IMG.SHIRT}
        route={ROUTES.PRODUCTS + "/" + CATEGORIES.SHIRTS}
      />
      <BannerLinkImgBox
        active={active === CATEGORIES.SHOES}
        color={COLORS.shoes}
        text={t("BannerLinks.shoes")}
        image={IMG.SHOES}
        route={ROUTES.PRODUCTS + "/" + CATEGORIES.SHOES}
      />
      <BannerLinkImgBox
        active={active === CATEGORIES.ACCESORIES}
        color={COLORS.accesories}
        text={t("BannerLinks.accesories")}
        image={IMG.WATCH}
        route={ROUTES.PRODUCTS + "/" + CATEGORIES.ACCESORIES}
      />
    </Flex>
  ) : (
    <Box />
  )
}

BannerLinks.defaultProps = {
  design: 1,
}

BannerLinks.propTypes = {
  design: PropTypes.number,
  active: PropTypes.string.isRequired,
}

const BannerLinkImgBox = ({ active, image, text, color, route }) => {
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  return (
    <Flex
      w="100%"
      h="100%"
      as={Link}
      to={route}
      bgColor={color}
      direction="column"
      align="center"
      justify="center"
      opacity={active ? "1" : ".5"}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Text
        color="white"
        fontWeight="900"
        fontSize={mediaQueryMax600 ? "1rem" : "2rem"}
        letterSpacing={mediaQueryMax600 ? "-1px" : "-4px"}
      >
        {text}
      </Text>
      <ImageBox url={image} w="100%" h="100%" size="contain" />
    </Flex>
  )
}

BannerLinkImgBox.defaultProps = {
  active: false,
}

BannerLinkImgBox.propTypes = {
  active: PropTypes.bool,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

export default BannerLinks
