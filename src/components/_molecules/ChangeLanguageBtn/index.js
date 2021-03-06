import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"
// components
import ButtonZoom from "components/_atoms/ButtonZoom"

/**
 * ChangeLanguageBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón para cambiar el idioma Español-Inglés
 */
const ChangeLanguageBtn = () => {
  // hooks
  const [t, i18n] = useTranslation("global")
  const [storedValue, setLocalStorage] = useLocalStorage("language", null)
  const [spanish, setSpanish] = useState(storedValue === "es")

  useEffect(() => i18n.changeLanguage(storedValue), [])
  useEffect(() => i18n.changeLanguage(storedValue), [storedValue])
  useEffect(() => setLocalStorage(spanish ? "es" : "en"), [spanish])

  /**
   * handleLanguage
   * @function
   * @returns {boolean} change spanish state
   */
  const handleLanguage = () => setSpanish(!spanish)

  return (
    <ButtonZoom onClick={handleLanguage} fontSize="1rem">
      {storedValue === "es"
        ? t("ChangeLanguageBtn.en")
        : t("ChangeLanguageBtn.es")}
    </ButtonZoom>
  )
}

export default ChangeLanguageBtn
