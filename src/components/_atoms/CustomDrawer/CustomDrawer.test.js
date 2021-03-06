/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import CustomDrawer from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <CustomDrawer onClose={() => {}} isOpen={false}>
        <div />
      </CustomDrawer>
    )
  })
  test("should render the CustomDrawer without crashing", () => {
    screen.debug()
  })
})
