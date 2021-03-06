import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box } from "@chakra-ui/react"
import ItemNotificaton from "components/_molecules/ItemNotification"
/**
 * ProductList Component
 * @component
 * @author Braian D. Vaylet
 * @description retorna listado de productos
 */
const ItemNotificationList = ({
  data,
  asComponent,
  slice,
  withSlice,
  ...props
}) => {
  const [items, setItems] = useState(data)

  useEffect(() => setItems(data), [data])

  return (
    <Box w="100%">
      {items &&
        items
          .map((item, index) => {
            return (
              <Box as={asComponent} key={index} {...props}>
                <ItemNotificaton item={item} />
              </Box>
            )
          })
          .reverse()
          .slice(0, withSlice ? slice : items.length)}
    </Box>
  )
}

ItemNotificationList.defaultProps = {
  withSlice: false,
}

ItemNotificationList.propTypes = {
  data: PropTypes.any.isRequired,
  asComponent: PropTypes.node,
  slice: PropTypes.number,
  withSlice: PropTypes.bool,
}

export default ItemNotificationList
