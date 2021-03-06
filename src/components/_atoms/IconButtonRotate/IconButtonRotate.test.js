/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import IconButtonRotate from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(<IconButtonRotate onClick={() => {}} icon={<div />} />)
  })
  test("should render the IconButtonRotate without crashing", () => {
    screen.debug()
  })
})
