/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// chakra-ui
import {
  FormHelperText,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react"

/**
 * InputTextArea Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Input para para los campos tipo text o number
 */
export const InputTextArea = ({
  onChange,
  name,
  placeholder = "",
  label,
  type = "text",
  isRequired = true,
  value,
  disabled,
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
      <Textarea
        disabled={disabled}
        onChange={handleChange}
        value={valueState}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <FormHelperText maxH="1.5rem" minH="1.5rem" h="1.5rem" mt="5px" />
    </FormControl>
  )
}

InputTextArea.defaultProps = {
  placeholder: "",
  type: "text",
  isRequired: true,
}

InputTextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
}
