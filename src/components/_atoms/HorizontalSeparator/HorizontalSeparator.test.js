/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import HorizontalSeparator from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(<HorizontalSeparator />)
  })
  test("should render the HorizontalSeparator without crashing", () => {
    screen.debug()
  })
})
