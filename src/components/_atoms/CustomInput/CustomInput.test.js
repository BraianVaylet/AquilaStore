/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import CustomInput from "./"

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(<CustomInput onChange={() => {}} name="name" />)
  })
  test("should render the CustomInput without crashing", () => {
    screen.debug()
  })
})
