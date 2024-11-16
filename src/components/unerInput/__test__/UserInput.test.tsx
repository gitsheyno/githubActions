import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import UserInput from "../UserInput";

test("it should render the component", () => {
  const input = render(<UserInput />);
  screen.debug();

  const inputElement = input.getByRole("textbox") as HTMLInputElement;
  const headingElement = input.getByRole("heading");

  expect(inputElement.innerHTML).toBe("");
  expect(headingElement.textContent).toBe("");

  fireEvent.change(inputElement, { target: { value: "Hello, World!" } });

  expect(inputElement.value).toBe("Hello, World!");
  expect(headingElement.textContent).toBe("Hello, World!");
});
