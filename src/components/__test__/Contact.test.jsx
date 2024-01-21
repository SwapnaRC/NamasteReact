import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("contact us component", () => {
  beforeAll(() => {
    console.log("before all ");
  });
  afterAll(() => {
    console.log("after all");
  });
  beforeEach(() => {
    console.log("befre each");
  });
  afterEach(() => {
    console.log("after each");
  });
  test("Contact us page should render", () => {
    render(<Contact />);
    // querying
    const heading = screen.getByRole("heading");
    // assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should render 2 input box", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
  test("Should render inside the contact component", () => {
    render(<Contact />);
    const inputBoxe = screen.getByPlaceholderText("name");
    expect(inputBoxe).toBeInTheDocument();
  });

  it("should render button ", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
  });
});
