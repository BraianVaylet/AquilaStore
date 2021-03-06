import { useContext, useEffect } from "react"
// firebase
import { FirebaseClient } from "firebase/client"
// context
import { CartContext, FavouriteContext, NotificationContext } from "context"
// hooks
import useUser from "./useUser"

const useStorageByUser = () => {
  const user = useUser()
  const firebase = new FirebaseClient()
  const { setFavourites } = useContext(FavouriteContext)
  const { cartItems, setCartItems } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  useEffect(() => {
    user &&
      firebase
        .fetchStorageByUser(user.email)
        .then((value) => {
          setFavourites(value[0].favourites)
          setNotification(value[0].notifications)
          cartItems.length === 0 && setCartItems(value[0].cart) // Si el usuario ya tenia articulos en el carrito antes de la autentificación, no actualizo el carrito con la info de la BD
        })
        .catch((error) => console.error("error", error))
  }, [user])
}

export default useStorageByUser
