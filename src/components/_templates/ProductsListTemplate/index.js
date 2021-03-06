import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Flex, Grid, GridItem, useMediaQuery } from "@chakra-ui/react"
// styles
import { MY_BREAKPOINTS } from "styles/theme"
// components
import SkeletonItem from "components/_molecules/Item/SkItem"
import Banner from "components/_molecules/Banner"
import ItemProductList from "components/_organisms/ItemProductList"
import BannerLinks from "components/_molecules/BannerLinks"

/**
 * ProductsListTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Template para el listado de productos
 */
const ProductsListTemplate = ({
  data,
  withBanner,
  withBannerLink,
  bannerLinkDesign,
  categoryActive,
}) => {
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  /**
   * handleRows
   * @function
   * @returns {number} number of columns
   */
  const handleRows = () => (mediaQueryMin1280 ? 4 : mediaQueryMax600 ? 1 : 2)

  /**
   * renderSkeletons
   * @function
   * @returns {undefined} list of SkeletonItems components
   */
  const renderSkeletons = () => {
    const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return counter.map((index) => (
      <GridItem key={index} colSpan={1}>
        <SkeletonItem />
      </GridItem>
    ))
  }

  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      w="100vw"
      p={2}
    >
      {!mediaQueryMax600 && withBanner && <Banner />}
      {withBannerLink && (
        <BannerLinks design={bannerLinkDesign} active={categoryActive} />
      )}
      <Grid
        w="100%"
        templateColumns={`repeat(${handleRows()}, 1fr)`}
        p={2}
        gap={6}
        mt={20}
      >
        {data === null ? (
          renderSkeletons()
        ) : (
          <ItemProductList
            data={data}
            type="card"
            asComponent={GridItem}
            colSpan={1}
          />
        )}
      </Grid>
    </Flex>
  )
}

ProductsListTemplate.defaultProps = {
  withBanner: false,
  withBannerLink: false,
  bannerLinkDesign: 1,
  categoryActive: "",
}

ProductsListTemplate.propTypes = {
  data: PropTypes.array,
  category: PropTypes.string,
  withBanner: PropTypes.bool,
  withBannerLink: PropTypes.bool,
  bannerLinkDesign: PropTypes.number,
  categoryActive: PropTypes.string,
}

export default ProductsListTemplate
