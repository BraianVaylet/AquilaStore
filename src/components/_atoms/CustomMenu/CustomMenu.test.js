/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import CustomMenu from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <CustomMenu count={0} btnIcon={<div />}>
        <div />
      </CustomMenu>
    )
  })
  test("should render the CustomMenu without crashing", () => {
    screen.debug()
  })
})
