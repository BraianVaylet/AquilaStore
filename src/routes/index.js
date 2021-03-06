import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
// containers
import Layout from "containers/Layout"
// pages
import Home from "pages/Home"
import Cart from "pages/Cart"
import Checkout from "pages/Checkout"
import Help from "pages/Help"
import Notifications from "pages/Notifications"
import Favourites from "pages/Favourites"
import ItemDetail from "pages/ItemDetail"
import Products from "pages/Products"
import NotFound from "pages/NotFound"
import TermsAndCond from "pages/TermsAndCond"
import Purchases from "pages/Purchases"
import Admin from "pages/Admin"
// hooks
import useStorageByUser from "hooks/useStorageByUser"

/**
 * Project routes
 * @constant
 */
export const ROUTES = {
  ENTRYPOINT: "/",
  HOME: "/home",
  ITEM_DETAIL: "/item",
  CART: "/cart",
  PRODUCTS: "/products",
  CHECKOUT: "/ckeckout",
  HELP: "/help",
  NOTIFICATIONS: "/notifications",
  FAVOURITES: "/favourites",
  TERMS_AND_COND: "/termsAndCond",
  PURCHASES: "/purchases",
  ADMIN: "/admin",
}

const URL_PUBLIC = process.env.REACT_APP_API_URL

/**
 * Routes Component
 * @component
 * @author Braian D. Vaylet
 * @description Router con React-Router
 */
const Routes = () => {
  useStorageByUser()

  return (
    <BrowserRouter basename={URL_PUBLIC}>
      <Switch>
        {/* Homepage */}
        <Route path={ROUTES.HOME}>
          <Layout>
            <Home />
          </Layout>
        </Route>
        {/* Shopping cart page */}
        <Route path={ROUTES.CART}>
          <Layout>
            <Cart />
          </Layout>
        </Route>
        {/* Checkout page */}
        <Route path={ROUTES.CHECKOUT}>
          <Layout>
            <Checkout />
          </Layout>
        </Route>
        {/* Help page (not used at the moment) */}
        <Route path={ROUTES.HELP}>
          <Layout>
            <Help />
          </Layout>
        </Route>
        {/* Terms and conditions of use page */}
        <Route path={ROUTES.TERMS_AND_COND}>
          <Layout>
            <TermsAndCond />
          </Layout>
        </Route>
        {/* Notifications page */}
        <Route path={ROUTES.NOTIFICATIONS}>
          <Layout>
            <Notifications />
          </Layout>
        </Route>
        {/* Favourites page */}
        <Route path={ROUTES.FAVOURITES}>
          <Layout>
            <Favourites />
          </Layout>
        </Route>
        {/* Purchases page */}
        <Route path={ROUTES.PURCHASES}>
          <Layout>
            <Purchases />
          </Layout>
        </Route>
        {/* Admin dashboard page */}
        <Route path={ROUTES.ADMIN}>
          <Admin />
        </Route>
        {/* Product detail page by id */}
        <Route path={ROUTES.ITEM_DETAIL + "/:id"}>
          <Layout>
            <ItemDetail />
          </Layout>
        </Route>
        {/* Product page by category */}
        <Route path={ROUTES.PRODUCTS + "/:category"}>
          <Layout>
            <Products />
          </Layout>
        </Route>
        {/* Entry point page === Homepage */}
        <Route exact path={ROUTES.ENTRYPOINT}>
          <Layout>
            <Home />
          </Layout>
        </Route>
        {/* Not found page */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
