import { useEffect, useState } from "react"
import { FirebaseClient } from "firebase/client"

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useUser() {
  const firebase = new FirebaseClient()
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)

  useEffect(() => {
    firebase.onAuthStateChanged(setUser)
  }, [])

  return user
}
