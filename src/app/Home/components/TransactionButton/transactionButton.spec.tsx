import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import TransactionButton from "./TransactionButton";

describe("TransactionButton Component", () => {
  it("renders success correctly", () => {
    const { getByText, getByTestId } = render(<TransactionButton variant="success" title="Adicionar Receita" onPress={jest.fn()} />);
    const button = getByTestId("transaction-button");
    const buttonText = getByText("Adicionar Receita");

    expect(button).toBeTruthy();
    expect(button.props.style.backgroundColor).toBe("#009688");
    expect(buttonText.props.style.color).toBe("white");
  });

  it("renders danger correctly", () => {
    const { getByText, getByTestId } = render(<TransactionButton variant="danger" title="Adicionar Despesa" onPress={jest.fn()} />);
    const button = getByTestId("transaction-button");
    const buttonText = getByText("Adicionar Despesa");

    expect(button).toBeTruthy();
    expect(button.props.style.backgroundColor).toBe("#D84315");
    expect(buttonText.props.style.color).toBe("white");
  });

  it("calls onPress when button is pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<TransactionButton variant="success" title="Income" onPress={mockOnPress} />);

    fireEvent.press(getByText("Income"));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
