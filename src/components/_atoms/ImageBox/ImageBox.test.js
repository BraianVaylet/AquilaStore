/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import ImageBox from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(<ImageBox />)
  })
  test("should render the ImageBox without crashing", () => {
    screen.debug()
  })
})
