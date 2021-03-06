import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
import PurchasesList from "components/_organisms/PurchasesList"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// routes
import { ROUTES } from "routes"
// hooks
import useUser from "hooks/useUser"
// firebase
import { FirebaseClient } from "firebase/client"

/**
 * PurchasesTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente template del historial de compras
 */
const PurchasesTemplate = () => {
  const [t] = useTranslation("global")
  const firebase = new FirebaseClient()
  const user = useUser()
  const [data, setData] = useState([])
  const [loadingData, setLoadingData] = useState(false)

  useEffect(() => {
    setLoadingData(true)
    user &&
      firebase
        .fetchAllPurchasesByUser(user.email)
        .then((value) => {
          setData(value)
          setLoadingData(false)
        })
        .catch((error) => {
          console.error("error", error)
          setLoadingData(false)
        })
  }, [user])

  /**
   * handleStatistics
   * @function
   * @description retorna total de compras y total de productos
   * @returns {object}
   */
  const handleStatistics = () => {
    const initialValue = 0
    const totalProducts =
      data &&
      data.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.products.length,
        initialValue
      )

    return {
      totalPurchases: data.length,
      totalProducts,
    }
  }

  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="flex-start"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <SubHeader
        withTitle
        title={t("PurchasesTemplate.title")}
        backTo={ROUTES.HOME}
        withRightContent
        rightContent={
          <Flex align="center">
            <Text>
              <b>{data.length && handleStatistics().totalPurchases}</b>{" "}
              {t("PurchasesTemplate.purchasesMade")}
            </Text>
            <Text m="0 1rem">|</Text>
            <Text>
              <b>{data.length && handleStatistics().totalProducts}</b>{" "}
              {t("PurchasesTemplate.productsPurchased")}
            </Text>
          </Flex>
        }
      />
      <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
        <PurchasesList data={data} loading={loadingData} />
      </Card>
    </Flex>
  )
}

export default PurchasesTemplate
