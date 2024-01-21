import ResturantCard, { WithPromtedLabel} from "../ResturantCard";
import resDataMock from "../../mocks/resturantDataMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Resturant Card component", () => {
  const withLabel = WithPromtedLabel(ResturantCard)
  test("resturant card", () => {
    render(<ResturantCard resData={resDataMock} />);
    const res = screen.getByText("EatFit");
    expect(res).toBeInTheDocument();
  });
//   HOC - WithPromtedLabel
  test("resturant card with promted label", () => {
    render(<ResturantCard resData={resDataMock} />)
    const res = screen.getByText("EatFit");
    // fireEvent.click(WithPromtedLabel(res))
    expect(res).toBeInTheDocument();
  });
});
