import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import Home from "./Home";

describe('Home screen', () => {
  it('should render the Home screen', () => {
    const { getByText } = render(<Home />);
    const walletLabel = getByText('Carteira Total');
    const walletValue = getByText('R$ 7840,00');
    const receitaLabel = getByText('Receita');
    const receitaValue = getByText('+ R$ 5400,00');
    const despesasLabel = getByText('Despesas');
    const despesasValue = getByText('- R$ 2345,90');
    const addReceitaButton = getByText('Adicionar Receita');
    const addDespesaButton = getByText('Adicionar Despesa');

    expect(walletLabel).toBeDefined();
    expect(walletValue).toBeDefined();
    expect(receitaLabel).toBeDefined();
    expect(receitaValue).toBeDefined();
    expect(despesasLabel).toBeDefined();
    expect(despesasValue).toBeDefined();
    expect(addReceitaButton).toBeDefined();
    expect(addDespesaButton).toBeDefined();
  });

  it('should open the modal when the add receita button is pressed', () => {
    const { getByText } = render(<Home />);
    const addReceitaButton = getByText('Adicionar Receita');

    fireEvent.press(addReceitaButton);

    const modal = getByText('Adicionar receita');
    expect(modal).toBeDefined();
  });

  it('should open the modal when the add despesa button is pressed', () => {
    const { getByText } = render(<Home />);
    const addDespesaButton = getByText('Adicionar Despesa');

    fireEvent.press(addDespesaButton);

    const modal = getByText('Adicionar despesa');
    expect(modal).toBeDefined();
  });

  it('should close the modal when the close button is pressed', () => {
    const { getByText, getByTestId, queryByTestId } = render(<Home />);
    const addReceitaButton = getByText('Adicionar Receita');

    fireEvent.press(addReceitaButton);

    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);

    const modal = queryByTestId('modal');
    expect(modal).toBeNull();
  });

  it('deve testar se a lista de atividades é renderizada', () => {
    const { getByText } = render(<Home />);
    const activityList = getByText('Atividades Recentes');

    expect(activityList).toBeDefined();
  });
});
