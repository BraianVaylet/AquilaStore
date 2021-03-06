import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Input } from "@chakra-ui/react"

/**
 * CustomInput
 * @component
 * @author Braian D. Vaylet
 * @description Componente input
 */
const CustomInput = ({
  onChange,
  value,
  name,
  type,
  placeholder,
  disabled,
  ...props
}) => {
  return (
    <Input
      onChange={onChange}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  )
}

CustomInput.defaultProps = {
  placeholder: "",
  type: "text",
  disabled: false,
}

CustomInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

export default CustomInput
