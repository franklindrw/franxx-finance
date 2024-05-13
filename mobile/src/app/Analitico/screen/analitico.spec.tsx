import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Analitico from './Analitico';

const expensesData = [
  {
    "id": 1,
    "category": "alimentacao",
    "expense_total": 235.78,
    "percentage": 9.85
  },
  {
    "id": 2,
    "category": "transporte",
    "expense_total": 120.59,
    "percentage": 3.65
  },
  {
    "id": 3,
    "category": "lazer",
    "expense_total": 300.00,
    "percentage": 12.00
  }
]

describe('Analitico Screen', () => {
  it('should render the screen', () => {
    const { getByText } = render(<Analitico />);

    expect(getByText('Analítico')).toBeDefined();
    expect(getByText('Ganhos')).toBeDefined();
    expect(getByText('Mapa de gastos')).toBeDefined();
  });

  it('should render ButtonGroup with 3 buttons', () => {
    const { getByText } = render(<Analitico />);

    const weekButton = getByText('Semana');
    const monthButton = getByText('Mês');
    const yearButton = getByText('Ano');

    expect(weekButton).toBeTruthy();
    expect(monthButton).toBeTruthy();
    expect(yearButton).toBeTruthy();

    fireEvent.press(weekButton);
    expect(weekButton.props.style.color).toBe('#FAFAFA');
    expect(monthButton.props.style.color).toBe('#BDBDBD');
    expect(yearButton.props.style.color).toBe('#BDBDBD');

    fireEvent.press(monthButton);
    expect(monthButton.props.style.color).toBe('#FAFAFA');
    expect(weekButton.props.style.color).toBe('#BDBDBD');
    expect(yearButton.props.style.color).toBe('#BDBDBD');

    fireEvent.press(yearButton);
    expect(yearButton.props.style.color).toBe('#FAFAFA');
    expect(weekButton.props.style.color).toBe('#BDBDBD');
    expect(monthButton.props.style.color).toBe('#BDBDBD');
  });

  it('should render list of expenses categories', () => {
    const { getByText } = render(<Analitico />);

    expect(getByText('Gastos por categoria')).toBeDefined();

    expensesData.forEach(expense => {
      expect(getByText(expense.category)).toBeDefined();
      expect(getByText(expense.expense_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))).toBeDefined();
      expect(getByText(`${expense.percentage}%`)).toBeDefined();
    });
  });
});
