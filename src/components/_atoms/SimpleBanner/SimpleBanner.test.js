/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import SimpleBanner from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(<SimpleBanner img="url" />)
  })
  test("should render the SimpleBanner without crashing", () => {
    screen.debug()
  })
})
