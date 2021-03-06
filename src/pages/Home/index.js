// react
import React, { useEffect, useContext } from "react"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
// styles
import ProductsListTemplate from "components/_templates/ProductsListTemplate"
// firebase
import { FirebaseClient } from "firebase/client"
// context
import { ProductsContext } from "context"

/**
 * Home Page
 * @component
 * @author Braian D. Vaylet
 * @description Page Home
 */
const Home = () => {
  const [t] = useTranslation("global")
  const firebase = new FirebaseClient()
  const { productsDb, setProductsDb, setLoadingProductsDb } = useContext(
    ProductsContext
  )

  useEffect(async () => {
    setLoadingProductsDb(true)
    try {
      const data = await firebase.fetchProducts()
      setProductsDb(data)
      setLoadingProductsDb(false)
    } catch (error) {
      console.error("error", error)
    }
  }, [])

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.home")}
        description={t("HelmetSEO.description.home")}
      />
      <ProductsListTemplate withBanner withBannerLink data={productsDb} />
    </>
  )
}

export default Home
