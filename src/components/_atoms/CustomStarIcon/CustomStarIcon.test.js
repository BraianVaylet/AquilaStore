/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import CustomStarIcon from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <CustomStarIcon>
        <div />
      </CustomStarIcon>
    )
  })
  test("should render the CustomStarIcon without crashing", () => {
    screen.debug()
  })
})
