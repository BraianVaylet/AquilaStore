import React, { useState, createContext, useEffect } from "react"
import PropTypes from "prop-types"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"

export const NotificationContext = createContext({})

export const NotificationContextProvider = ({ children }) => {
  const [storedValue, setLocalStorage] = useLocalStorage("notifications", [])
  const [notification, setNotification] = useState(storedValue)

  useEffect(() => setLocalStorage(notification), [notification])

  // agrego una nueva notificacion
  const addNotification = (item) => {
    const newFavArray = [...notification, item]
    setNotification(newFavArray)
  }

  // elimino una notificacion
  const deleteNotification = (item) => {
    const newFavArray = notification.filter((fav) => fav.id !== item.id)
    setNotification(newFavArray)
  }

  // limpio todas las notificaciones
  const cleanNotification = () => setNotification([])

  // obtengo notificaciones con viewed === false
  const getNotificationsViewedFalse = () =>
    notification && notification.filter((noti) => noti.viewed === false)

  // paso el estado viewed a true en todas las notificaciones
  const handleNotificationsToViewedTrue = () =>
    notification &&
    setNotification(
      notification.map((noti) => {
        noti.viewed = true
        return noti
      })
    )

  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
        addNotification,
        deleteNotification,
        cleanNotification,
        getNotificationsViewedFalse,
        handleNotificationsToViewedTrue,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

NotificationContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
