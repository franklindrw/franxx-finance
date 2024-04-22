import React from "react";
import { render } from "@testing-library/react-native";

import ExpensesCategory from "./ExpensesCategory";

describe("ExpensesCategory Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<ExpensesCategory category="category" expense_total={100} percentage={10} />);

    expect(getByText("category")).toBeDefined();
    expect(getByText("R$ 100,00")).toBeDefined();
    expect(getByText("10%")).toBeDefined();
  });
});