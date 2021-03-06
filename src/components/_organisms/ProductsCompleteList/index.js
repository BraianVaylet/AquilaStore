import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Divider, Flex } from "@chakra-ui/react"
// components
import ItemComplete from "components/_molecules/ItemComplete"
import SkItemComplete from "components/_molecules/ItemComplete/SkItemComplete"
// utils
import { PropTypesProduct } from "utils/propTypes"

/**
 * ProductsCompleteList Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente listado de productos para Admin
 */
const ProductsCompleteList = ({
  data,
  loading,
  handleIsActiveClick,
  handleEdit,
  handleDelete,
}) => {
  const [t] = useTranslation("global")

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      w="100%"
      p={10}
    >
      {loading ? (
        <SkItemComplete />
      ) : data && data.length > 0 ? (
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          w="100%"
        >
          {data
            .map((prod, index) => {
              return (
                <>
                  <Flex
                    key={index}
                    w="100%"
                    justify="space-between"
                    align="center"
                  >
                    <ItemComplete item={prod} />
                    <Flex>
                      {!prod.isActive ? (
                        <Button
                          onClick={() => handleIsActiveClick(prod.id, true)}
                        >
                          ✔
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleIsActiveClick(prod.id, false)}
                        >
                          ❌
                        </Button>
                      )}
                      <Button onClick={() => handleEdit(prod.id)} ml={2}>
                        ✏
                      </Button>
                      <Button onClick={() => handleDelete(prod.id)} ml={2}>
                        🗑
                      </Button>
                    </Flex>
                  </Flex>
                  <Divider m="1.5rem 0" />
                </>
              )
            })
            .reverse()}
        </Flex>
      ) : (
        <Flex>{t("AdminTemplate.noItems")}</Flex>
      )}
    </Flex>
  )
}

ProductsCompleteList.propTypes = {
  data: PropTypes.shape(PropTypesProduct),
  loading: PropTypes.bool.isRequired,
  handleIsActiveClick: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default ProductsCompleteList
