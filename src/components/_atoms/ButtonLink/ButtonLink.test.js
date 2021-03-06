/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import ButtonLink from "."
import { MemoryRouter } from "react-router-dom"

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ButtonLink to="route">text</ButtonLink>
      </MemoryRouter>
    )
  })
  test("should render the ButtonLink without crashing", () => {
    screen.debug()
  })
})
