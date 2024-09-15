import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { test, expect } from "vitest";
import App from "./App";

test("romanizes Korean text", () => {
  const { getByLabelText } = render(<App />);

  fireEvent.change(getByLabelText("Korean Text"), {
    target: { value: "하이" },
  });

  expect(getByLabelText("Results")).toHaveTextContent("hai");
});
