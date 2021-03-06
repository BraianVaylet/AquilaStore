/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ButtonZoom from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(<ButtonZoom onClick={() => {}}>text</ButtonZoom>)
  })
  test("should render the ButtonZoom without crashing", () => {
    screen.debug()
  })
  test("Should find de ButtonZoom in the document", () => {
    expect(screen.getByRole("button")).toBeInTheDocument()
  })
  test("ButtonZoom Click", () => {
    userEvent.click(screen.getByRole("button"))
  })
})
