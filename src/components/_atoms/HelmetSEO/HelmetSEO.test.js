/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import HelmetSEO from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <HelmetSEO label="label">
        <div />
      </HelmetSEO>
    )
  })
  test("should render the HelmetSEO without crashing", () => {
    screen.debug()
  })
})
