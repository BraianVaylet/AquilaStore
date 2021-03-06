import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Divider, Flex } from "@chakra-ui/react"
// components
import SubHeader from "components/_molecules/SubHeader"
import ItemDetailImgBox from "components/_organisms/ItemDetail/ItemDetailImgBox"
import ItemDetailAction from "components/_organisms/ItemDetail/ItemDetailAction"
import ItemDetailCharacteristics from "components/_organisms/ItemDetail/ItemDetailCharacteristics"
import ItemDetailDescription from "components/_organisms/ItemDetail/ItemDetailDescription"
import ItemDetailQuestionsAndAnswers from "components/_organisms/ItemDetail/ItemDetailQuestionsAndAnswers"
import SkeletonItemDetailImgBox from "components/_organisms/ItemDetail/SkItemDetailImgBox"
import SkeletonItemDetailAction from "components/_organisms/ItemDetail/SkItemDetailAction"
import SkeletonItemDetailContent from "components/_organisms/ItemDetail/SkItemDetailContent"
// styles
import { CustomShadow, setValueResponsiveMin1280 } from "styles/utils"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// routes
import { ROUTES } from "routes"
// utils
import { PropTypesProduct } from "utils/propTypes"
import Card from "components/_atoms/Card"

const withQuestionsAndAnswer = false

/**
 * ItemDetailTemplate Page
 * @Component
 * @author Braian D. Vaylet
 * @description Page ItemDetailTemplate, detalle del producto seleccionado
 */
const ItemDetailTemplate = ({ item }) => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      w="100%"
      p={setValueResponsiveMin1280("20px 100px", "10px")}
    >
      <SubHeader backTo={ROUTES.HOME} />
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        w="100%"
        wrap="wrap"
        mb={10}
      >
        {/* image */}
        <Card
          w={setValueResponsiveMin1280("72.5%", "100%")}
          minH={setValueResponsiveMin1280("80vh", "100%")}
          h={setValueResponsiveMin1280("80vh", "100%")}
        >
          {item !== null ? (
            <ItemDetailImgBox
              pictureName={item.pictureName}
              pictureUrl={item.pictureUrl}
              pictureId={item.id}
            />
          ) : (
            <SkeletonItemDetailImgBox />
          )}
        </Card>

        {/* right :: info item */}
        <Card
          w={setValueResponsiveMin1280("25%", "100%")}
          minH={setValueResponsiveMin1280("80vh", "100%")}
          h={setValueResponsiveMin1280("80vh", "80vh")}
          p="20px"
          bgColor={backgroundColor}
          boxShadow={CustomShadow}
        >
          {item !== null ? (
            <ItemDetailAction item={item} />
          ) : (
            <SkeletonItemDetailAction />
          )}
        </Card>
      </Flex>

      {/* bottom :: info item */}
      <Card
        direction="column"
        justify="flex-start"
        center="flex-start"
        w="100%"
        minH="20vh"
        p="20px"
      >
        <Flex direction="column" justify="flex-start" center="flex-start">
          {item !== null ? (
            <>
              {/* characteristics */}
              <ItemDetailCharacteristics
                brand={item.brand}
                model={item.model}
                colors={item.colors}
                sizes={item.sizes}
                filter={item.filter}
              />

              <Divider mt={10} mb={10} />

              {/* description */}
              <ItemDetailDescription description={item.description} />

              <Divider mt={10} mb={10} />

              {/* comments */}
              {withQuestionsAndAnswer && <ItemDetailQuestionsAndAnswers />}
            </>
          ) : (
            <SkeletonItemDetailContent />
          )}
        </Flex>
      </Card>
    </Flex>
  )
}

ItemDetailTemplate.propTypes = {
  item: PropTypes.shape(PropTypesProduct),
}

export default ItemDetailTemplate
