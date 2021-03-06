/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import CustomTooltip from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <CustomTooltip label="label">
        <div />
      </CustomTooltip>
    )
  })
  test("should render the CustomTooltip without crashing", () => {
    screen.debug()
  })
})
