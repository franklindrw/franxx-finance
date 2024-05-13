import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import SelectCategory from './SelectCategory';

describe('SelectCategory', () => {
  const mockData = [
    { id: 1, name: 'Salário', category: 'trabalho' },
    { id: 2, name: 'Invest', category: 'dinheiro' },
    { id: 3, name: 'Extra', category: 'extra' },
  ];

  it('renders correctly', () => {
    const { getByText } = render(<SelectCategory data={mockData} categoryActive='Salário' onPress={jest.fn()} />);

    expect(getByText('Salário')).toBeTruthy();
    expect(getByText('Invest')).toBeTruthy();
    expect(getByText('Extra')).toBeTruthy();
  });

  it('calls onPress with the correct category when a category is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<SelectCategory data={mockData} categoryActive='Salário' onPress={mockOnPress} />);

    fireEvent.press(getByTestId('category-Invest'));

    expect(mockOnPress).toHaveBeenCalledWith('Invest');
  });

  it('displays the active category correctly', () => {
    const { getByText, getByTestId } = render(<SelectCategory data={mockData} categoryActive="Salário" onPress={jest.fn()} />);
    const activeButton = getByTestId('category-Salário');
    const activeText = getByText('Salário');

    expect(activeButton.props.style.backgroundColor).toBe('#0D47A1');
    expect(activeText.props.style[1].color).toBe('#FAFAFA');
  });
});
