/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import ItemNavLink from "."
import { MemoryRouter } from "react-router-dom"

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ItemNavLink to="route" text="text" />
      </MemoryRouter>
    )
  })
  test("should render the ItemNavLink without crashing", () => {
    screen.debug()
  })
})
