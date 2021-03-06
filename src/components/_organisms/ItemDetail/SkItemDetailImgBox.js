import React from "react"
// chakra-ui
import { Center, Skeleton } from "@chakra-ui/react"

/**
 * Skeleton/ItemDetail/SkeletonItemDetailImgBox Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Skeleton para la sección ImgBox de ItemDetail
 */
const SkeletonItemDetailImgBox = () => {
  return (
    <Center p="20px" w="100%">
      <Skeleton
        w="300px"
        minW="300px"
        maxW="300px"
        h="300px"
        minH="300px"
        maxH="300px"
      />
    </Center>
  )
}

export default SkeletonItemDetailImgBox
