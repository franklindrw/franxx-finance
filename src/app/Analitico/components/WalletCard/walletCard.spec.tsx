import React from "react";
import { render } from "@testing-library/react-native";

import WalletCard from "./WalletCard";

describe("WalletCard Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<WalletCard value={100} percent={10} />);

    expect(getByText("Total da carteira")).toBeDefined();
    expect(getByText("R$ 100,00")).toBeDefined();
    expect(getByText("10%")).toBeDefined();
  });

  it("should render the component with negative percent", () => {
    const { getByText } = render(<WalletCard value={100} percent={-10} />);

    expect(getByText("Total da carteira")).toBeDefined();
    expect(getByText("R$ 100,00")).toBeDefined();
    expect(getByText("-10%")).toBeDefined();
  });
});
