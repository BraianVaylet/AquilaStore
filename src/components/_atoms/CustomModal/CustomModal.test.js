/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import CustomModal from "."

describe("When evertithings is OK", () => {
  beforeEach(() => {
    render(
      <CustomModal onClose={() => {}} isOpen={false}>
        <div />
      </CustomModal>
    )
  })
  test("should render the CustomModal without crashing", () => {
    screen.debug()
  })
})
