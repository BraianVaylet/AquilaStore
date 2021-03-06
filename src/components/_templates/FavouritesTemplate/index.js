import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Center, Divider, Flex } from "@chakra-ui/react"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
import ItemProduct from "components/_molecules/ItemProduct"
import ButtonTooltip from "components/_molecules/ButtonTooltip"
// context
import { FavouriteContext } from "context"
// routes
import { ROUTES } from "routes"

/**
 * FavouritesTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente template de los favoritos
 */
const FavouritesTemplate = () => {
  const { favourites, deleteItemFromFavourites, cleanFavourites } = useContext(
    FavouriteContext
  )
  const [t] = useTranslation("global")
  const count = favourites.length

  return (
    <Flex
      h="100%"
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="flex-start"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <SubHeader
        withTitle
        title={t("FavouritesTemplate.title")}
        backTo={ROUTES.HOME}
        withRightContent
        rightContent={
          count > 0 && (
            <ButtonTooltip
              tooltipLabel={t("FavouritesBtn.clean")}
              size="lg"
              onClick={cleanFavourites}
            >
              🗑
            </ButtonTooltip>
          )
        }
      />
      <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
        <Flex
          direction="column"
          align="center"
          justify="flex-start"
          w="100%"
          p={10}
        >
          {count > 0 ? (
            <Flex
              direction="column"
              align="flex-start"
              justify="flex-start"
              w="100%"
            >
              {favourites
                .map((fav, index) => {
                  return (
                    <Box key={index} w="100%">
                      <Box w="100%">
                        <ItemProduct
                          design={1}
                          item={fav}
                          withDelete
                          onDelete={deleteItemFromFavourites}
                        />
                      </Box>
                      <Divider m="1.5rem 0" />
                    </Box>
                  )
                })
                .reverse()}
            </Flex>
          ) : (
            <Center w="100%" h="80vh">
              <Flex fontSize="2rem">{t("FavouritesTemplate.noItems")}</Flex>
            </Center>
          )}
        </Flex>
      </Card>
    </Flex>
  )
}

export default FavouritesTemplate
