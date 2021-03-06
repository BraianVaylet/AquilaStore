import React from "react"
// chakra-ui
import { Center, Skeleton } from "@chakra-ui/react"

/**
 * Skeleton/ItemDetail/SkeletonItemDetailAction Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Skeleton para la sección action de ItemDetail
 */
const SkeletonItemDetailAction = () => {
  return (
    <Center w="100%" h="100%" p="20px">
      <Skeleton w="100%" h="100%" />
    </Center>
  )
}

export default SkeletonItemDetailAction
