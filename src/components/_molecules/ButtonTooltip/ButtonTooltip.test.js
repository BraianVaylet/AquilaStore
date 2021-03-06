/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import ButtonTooltip from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <ButtonTooltip tooltipLabel="label" onClick={() => {}}>
        <div />
      </ButtonTooltip>
    )
  })
  test("should render the ButtonTooltip without crashing", () => {
    screen.debug()
  })
})
