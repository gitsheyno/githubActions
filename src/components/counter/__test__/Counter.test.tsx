import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Counter from "../Counter";

test("it should render the component", () => {
  render(<Counter />);
  screen.debug();
});
