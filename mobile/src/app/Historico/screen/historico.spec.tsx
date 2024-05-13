import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import Historico from "./Historico";

describe("Historico", () => {
  it("should render the title", () => {
    const { getByText } = render(<Historico />);

    expect(getByText("Histórico")).toBeDefined();
  });

  it("should render the tab bar", () => {
    const { getAllByText } = render(<Historico />);

    expect(getAllByText("Receitas")).toBeDefined();
    expect(getAllByText("Despesas")).toBeDefined();
  });
});
