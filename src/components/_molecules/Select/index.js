import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/react"
// components
import CustomSelect from "components/_atoms/CustomSelect"

/**
 * Select Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente select con FormControl
 */
const Select = ({
  label,
  isRequired,
  placeholder,
  data,
  name,
  onChange,
  value,
}) => {
  const [valueState, setValueState] = useState(value)

  useEffect(() => setValueState(value), [value])

  useEffect(() => onChange(valueState), [valueState])

  /**
   * handleChange
   * @function
   * @returns {string}
   * @description retorno el valor ingresado en el input
   */
  const handleChange = (event) => setValueState(event.target.value)

  return (
    <FormControl p={2} isRequired={isRequired}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <CustomSelect
        value={value}
        placeholder={placeholder}
        data={data}
        onChange={handleChange}
        name={name}
      />
      <FormHelperText maxH="1.5rem" minH="1.5rem" h="1.5rem" mt="5px" />
    </FormControl>
  )
}

Select.defaultProps = {
  isRequired: true,
}

Select.propTypes = {
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Select
