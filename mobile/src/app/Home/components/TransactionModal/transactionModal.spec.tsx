import React from "react";
import { fireEvent, render, waitFor, act } from "@testing-library/react-native";

import TransactionModal from "./TransactionModal";

jest.spyOn(console, 'warn').mockImplementation(() => {});

describe("TransactionModal", () => {
  it("should render correctly", () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<TransactionModal onOpen={true} onClose={jest.fn()} type="receita" />);
    const title = getByText("Adicionar receita");
    const closeButton = getByTestId('close-button');
    const descriptionInput = getByPlaceholderText('Digite uma descrição');
    const valueInput = getByPlaceholderText('R$ 00,00');

    expect(title).toBeTruthy();
    expect(closeButton).toBeTruthy();
    expect(descriptionInput).toBeTruthy();
    expect(valueInput).toBeTruthy();
  });

  it("should render with type despesa", () => {
    const { getByText } = render(<TransactionModal onOpen={true} onClose={jest.fn()} type="despesa" />);
    const title = getByText("Adicionar despesa");

    expect(title).toBeTruthy();
  });

  it("should call onClose when close button is pressed", () => {
    const mockOnClose = jest.fn();
    const { getByTestId } = render(<TransactionModal onOpen={true} onClose={mockOnClose} type="receita" />);
    const closeButton = getByTestId('close-button');

    fireEvent.press(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should call onSubmit when form is submitted", async () => {
    const mockOnClose = jest.fn();

    const { getByTestId, getByPlaceholderText } = render(<TransactionModal onOpen={true} onClose={mockOnClose} type="receita" />);
  
    const descriptionInput = getByPlaceholderText('Digite uma descrição');
    const valueInput = getByPlaceholderText('R$ 00,00');
    const submitButton = getByTestId('submit-button');

    const logSpy = jest.spyOn(console, 'log');
  
    await act(async () => {
      fireEvent.changeText(descriptionInput, 'Test description');
      fireEvent.changeText(valueInput, 'R$ 100,00');
      fireEvent.press(getByTestId('category-Invest'));
      fireEvent.press(submitButton);
    });
  
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledWith({
        description: 'Test description',
        value: 100,
        category: "Invest",
        date: new Date().toISOString().split('T')[0],
        type: 'receita'
      });
    });

    logSpy.mockRestore();
  });
});
