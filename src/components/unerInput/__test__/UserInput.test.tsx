import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import UserInput from "../UserInput";

test("it should render the component", () => {
  render(<UserInput />);
  screen.debug();
});
