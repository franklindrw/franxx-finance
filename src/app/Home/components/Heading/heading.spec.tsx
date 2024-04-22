import React from 'react';
import { render } from '@testing-library/react-native';

import Heading from './Heading';

describe('Heading Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Heading name="Franklin Campos" src='https://github.com/franklindrw.png' notifications={3} />);

    expect(getByText('Bem vindo,')).toBeTruthy();
    expect(getByText('Franklin Campos')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
  });
});
