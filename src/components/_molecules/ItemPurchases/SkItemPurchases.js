import React from "react"
// chakra-ui
import { Flex, Skeleton } from "@chakra-ui/react"

/**
 * SkItemPurchases Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Skeleton para la carga
 */
const SkItemPurchases = () => (
  <Flex
    direction="row"
    justify="space-between"
    align="center"
    wrap="nowrap"
    w="100%"
    h="20vh"
  >
    <Flex justify="flex-start" align="flex-start" w="100%" h="100%">
      <Flex align="center">
        <Skeleton boxSize="3rem" borderRadius="full" mr="12px" />
      </Flex>
      <Skeleton
        w="100%"
        h="100%"
        direction="column"
        align="flex-start"
        justify="flex-start"
        mr="12px"
      />
    </Flex>
  </Flex>
)

export default SkItemPurchases
