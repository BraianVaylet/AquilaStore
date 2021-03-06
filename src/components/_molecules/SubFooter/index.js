import React from "react"
import { IoLogoLinkedin, IoLogoReact } from "react-icons/io5"
// chakra-ui
import { Flex, Icon, Text, Link } from "@chakra-ui/react"
// styles
import { setValueResponsiveMax600 } from "styles/utils"

/**
 * SubFooter Componente
 * @component
 * @author Braian D. Vaylet
 * @description Componente Footer secundario
 */
const SubFooter = () => {
  return (
    <Flex
      pl={6}
      pr={6}
      bgColor="black"
      w="100%"
      direction="row"
      justify="space-between"
      align="center"
    >
      <Text
        color="gray.400"
        fontSize={setValueResponsiveMax600(".5rem", ".8rem")}
      >
        Copyright ©2021
      </Text>
      <Flex direction="row" align="center" justify="flex-end">
        <Link
          color="gray.400"
          fontSize={setValueResponsiveMax600(".5rem", ".8rem")}
          href="https://es.reactjs.org/"
          isExternal
        >
          <Flex align="center">
            <Icon
              color="brand.primary"
              boxSize="1.25rem"
              as={IoLogoReact}
              mr=".5rem"
            />
            ReactJs
          </Flex>
        </Link>
        <Text m="0 1rem">|</Text>
        <Link
          color="gray.400"
          fontSize={setValueResponsiveMax600(".5rem", ".8rem")}
          href="https://www.linkedin.com/in/braianvaylet/"
          isExternal
        >
          <Flex align="center">
            <Icon
              as={IoLogoLinkedin}
              boxSize="1.25rem"
              color="brand.secundary"
              mr=".5rem"
            />
            Braian D. Vaylet
          </Flex>
        </Link>
      </Flex>
    </Flex>
  )
}

export default SubFooter
