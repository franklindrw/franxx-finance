import React from "react";
import { render } from "@testing-library/react-native";

import TotalExpensesCard from "./TotalExpensesCard";

describe("TotalExpensesCard Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<TotalExpensesCard money={100} creditCard={10} />);

    expect(getByText("Gastos com Dinheiro")).toBeDefined();
    expect(getByText("+ R$ 100,00")).toBeDefined();
    expect(getByText("Gastos com Cartão")).toBeDefined();
    expect(getByText("+ R$ 10,00")).toBeDefined();
  });
});
