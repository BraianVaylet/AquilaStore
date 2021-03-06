import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Select } from "@chakra-ui/react"

/**
 * CustomSelect Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente select
 */
const CustomSelect = ({
  placeholder,
  data,
  onChange,
  name,
  value,
  ...props
}) => {
  const [_data, setData] = useState([])

  useEffect(() => setData(data), [data])

  return (
    <Select
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    >
      {_data &&
        _data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
    </Select>
  )
}

CustomSelect.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.any,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CustomSelect
