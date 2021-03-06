/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { FormHelperText, FormControl, FormLabel } from "@chakra-ui/react"
// components
import CustomInput from "components/_atoms/CustomInput"

/**
 * InputTextNumber Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Input para para los campos tipo text o number
 */
export const InputTextNumber = ({
  onChange,
  name,
  placeholder = "",
  label,
  type = "text",
  isRequired = true,
  value,
  disabled,
  ...props
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
      <CustomInput
        disabled={disabled}
        onChange={handleChange}
        value={valueState}
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      <FormHelperText maxH="1.5rem" minH="1.5rem" h="1.5rem" mt="5px" />
    </FormControl>
  )
}

InputTextNumber.defaultProps = {
  placeholder: "",
  type: "text",
  isRequired: true,
}

InputTextNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
}
