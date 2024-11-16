import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import Counter from "../Counter";

test("it should render the component", () => {
  render(<Counter />);
  screen.debug();
});

test("updates counter value", async () => {
  const counter = render(<Counter />);

  const [increaseButton, decreaseButton] = counter.getAllByRole("button");
  const heading = screen.getByRole("heading", { level: 3 });

  expect(heading.innerHTML).toBe("counter : 0");
  fireEvent.click(increaseButton);

  expect(heading.innerHTML).toBe("counter : 1");

  fireEvent.click(decreaseButton);
  expect(heading.innerHTML).toBe("counter : 0");
});
