// react
import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
// components
import ProductsListTemplate from "components/_templates/ProductsListTemplate"
import HelmetSEO from "components/_atoms/HelmetSEO"
// context
import { ProductsContext } from "context"
// firebase
import { FirebaseClient } from "firebase/client"

/**
 * Products Page
 * @component
 * @author Braian D. Vaylet
 * @description Page Products
 */
const Products = () => {
  const { category } = useParams("category")
  const firebase = new FirebaseClient()
  const { productsDb, setLoadingProductsDb } = useContext(ProductsContext)
  const [t] = useTranslation("global")
  const [data, setData] = useState(null)

  useEffect(async () => {
    if (productsDb) {
      setData(handleProductsByCategory())
    } else {
      setLoadingProductsDb(true)
      try {
        const value = await firebase.fetchProductsByCategory(category)
        setData(value)
        setLoadingProductsDb(false)
      } catch (error) {
        console.error("error", error)
      }
    }
  }, [category])

  const handleProductsByCategory = () =>
    productsDb && productsDb.filter((product) => product.category === category)

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.products") + category}
        description={t("HelmetSEO.description.products") + category}
      />
      <ProductsListTemplate
        data={data}
        category={category}
        bannerLinkDesign={2}
        withBannerLink
        categoryActive={category}
      />
    </>
  )
}

export default Products
