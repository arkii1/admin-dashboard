import React from "react"
import ReactDOM from "react-dom/client"
import { cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import Main from "./Main"

afterEach(cleanup)

it("renders without crashing", () => {
  const container = document.createElement("div")
  const root = ReactDOM.createRoot(container)
  root.render(<Main />)
})

it("matches snapshot", () => {
  const tree = renderer.create(<Main />).toJSON()
  expect(tree).toMatchSnapshot()
})
