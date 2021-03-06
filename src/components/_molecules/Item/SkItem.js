import React from "react"
// chakra-ui
import { Flex, Skeleton } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// styles
import { CustomShadow } from "styles/utils"

// const
const MAX_HEIGHT = "70vh"
const IMG_SIZE = "35vh"

/**
 * Skeleton/Item/SkeletonItem Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Skeleton para los items
 */
const SkeletonItem = () => {
  const backgroundColor = useSetColorTheme("gray.700", "white")

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      borderRadius="2.5px"
      backgroundColor={backgroundColor}
      boxShadow={CustomShadow}
      position="relative"
      m="1.5rem"
      minH={MAX_HEIGHT}
      maxH={MAX_HEIGHT}
      h={MAX_HEIGHT}
      w={IMG_SIZE}
    >
      <Skeleton
        w={IMG_SIZE}
        minW={IMG_SIZE}
        maxW={IMG_SIZE}
        h={IMG_SIZE}
        minH={IMG_SIZE}
        maxH={IMG_SIZE}
      />
      <Flex
        p="10px 20px"
        direction="column"
        justify="center"
        align="center"
        w="100%"
        h={IMG_SIZE}
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          w="100%"
          h="50%"
        >
          <Skeleton h="2.5rem" w="100%" />
          <Skeleton h=".75rem" w="100%" />
        </Flex>
        <Skeleton h="50%" w="100%" />
      </Flex>
    </Flex>
  )
}

export default SkeletonItem
