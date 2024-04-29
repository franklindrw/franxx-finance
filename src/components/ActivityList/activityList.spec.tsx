import React from 'react';
import { render } from '@testing-library/react-native';

import ActivityList from './ActivityList';

describe('ActivityList Component', () => {
  const defaultProps = [
      {
        id: '1',
        name: 'Test Activity',
        date: '2022-01-01',
        value: 100,
        type: 'cartao',
        category: 'test',
      },
      {
        id: '2',
        name: "Internet",
        date: "2021-04-05",
        value: 99.90,
        type: "dinheiro",
        category: "servicos",
      },
    ];

  it('renders correctly', () => {
    const { getByText } = render(<ActivityList data={defaultProps} />);

    expect(getByText(defaultProps[0].name)).toBeTruthy();
    expect(getByText('01/01/2022')).toBeTruthy();
    expect(getByText('R$ 100,00')).toBeTruthy();
  });

  it('renders multiple items', () => {
    const { getByText } = render(<ActivityList data={defaultProps} />);

    expect(getByText(defaultProps[0].name)).toBeTruthy();
    expect(getByText(defaultProps[1].name)).toBeTruthy();
  });

  it('renders correct date format', () => {
    const { getByText } = render(<ActivityList data={defaultProps} />);

    expect(getByText('01/01/2022')).toBeTruthy();
    expect(getByText('05/04/2021')).toBeTruthy();
  });

  it('renders correct value format', () => {
    const { getByText } = render(<ActivityList data={defaultProps} />);

    expect(getByText('R$ 100,00')).toBeTruthy();
    expect(getByText('R$ 99,90')).toBeTruthy();
  });
});