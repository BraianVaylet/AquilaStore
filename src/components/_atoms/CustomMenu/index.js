import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { ChevronDownIcon } from "@chakra-ui/icons"
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text,
} from "@chakra-ui/react"

const CustomMenu = ({
  count,
  btnIcon,
  btnWithTex,
  btnText,
  children,
  footer,
  onClick,
}) => {
  return (
    <Menu closeOnSelect={false} arrowPadding={0}>
      <MenuButton
        as={IconButton}
        onClick={onClick}
        variant="ghost"
        size="lg"
        p="0 5px"
        rightIcon={count > 0 && <ChevronDownIcon />}
        leftIcon={
          <Flex direction="row" align="center">
            {btnIcon}
            {btnWithTex && <Text m="0 .5rem">{btnText}</Text>}
            {count !== 0 && " (" + count + ")"}
          </Flex>
        }
      />
      {count > 0 && (
        <MenuList>
          {children}
          <MenuDivider />
          {footer}
        </MenuList>
      )}
    </Menu>
  )
}

CustomMenu.defaultProps = {
  btnWithTex: false,
  btnText: "",
  onClick: () => {},
}

CustomMenu.propTypes = {
  count: PropTypes.number.isRequired,
  btnIcon: PropTypes.node.isRequired,
  btnWithTex: PropTypes.bool,
  btnText: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  onClick: PropTypes.func,
}

export default CustomMenu
