import { render, fireEvent } from "@testing-library/vue";
import { test } from "vitest";
import App from "./App.vue";

test.skip("romanizes Korean text", async () => {
  const { getByLabelText, getByDisplayValue } = render(App);

  const source = getByLabelText(/korean/i);

  await fireEvent.update(source, "하이");

  getByDisplayValue("hai");
});
