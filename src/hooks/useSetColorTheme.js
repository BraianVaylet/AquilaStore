import { useColorMode } from "@chakra-ui/react"

const useSetColorTheme = (darkColor, lightColor) => {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? darkColor : lightColor
}

export default useSetColorTheme
