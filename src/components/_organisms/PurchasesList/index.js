import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Center, Divider, Flex } from "@chakra-ui/react"
// components
import ItemPurchases from "components/_molecules/ItemPurchases"
import SkItemPurchases from "components/_molecules/ItemPurchases/SkItemPurchases"
import PurchaseComplete from "components/_molecules/PurchaseComplete"

/**
 * PurchasesList Component
 * @component
 * @author Braian D. Vaylet
 * @description componente listado de todas las compras
 */
const PurchasesList = ({ data, loading, complete }) => {
  const [t] = useTranslation("global")
  const count = data && data.length

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      w="100%"
      p={10}
    >
      {loading ? (
        <SkItemPurchases />
      ) : count > 0 ? (
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          w="100%"
        >
          {data
            .map((purchase, index) => {
              return (
                <>
                  {!complete ? (
                    <Box key={index} w="100%">
                      <ItemPurchases item={purchase} />
                    </Box>
                  ) : (
                    <Flex
                      key={index}
                      w="100%"
                      justify="space-between"
                      align="center"
                    >
                      <PurchaseComplete item={purchase} />
                    </Flex>
                  )}
                  <Divider m="1.5rem 0" />
                </>
              )
            })
            .reverse()}
        </Flex>
      ) : (
        <Center w="100%" h="80vh">
          <Flex fontSize="2rem">{t("PurchasesList.noItems")}</Flex>
        </Center>
      )}
    </Flex>
  )
}

PurchasesList.propTypes = {
  complete: false,
}

PurchasesList.propTypes = {
  data: PropTypes.number,
  loading: PropTypes.bool,
  complete: PropTypes.bool,
}

export default PurchasesList
