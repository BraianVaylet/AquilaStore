/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import CustomPopover from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <CustomPopover btn={<div />}>
        <div />
      </CustomPopover>
    )
  })
  test("should render the CustomPopover without crashing", () => {
    screen.debug()
  })
})
