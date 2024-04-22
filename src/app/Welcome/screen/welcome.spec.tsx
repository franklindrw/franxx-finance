import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Welcome from './Welcome';

//Mock do Stack Navigator
jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn(),
  };
});

describe('Welcome screen', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  it('should render the Welcome screen', () => {
    const { getByText } = render(<Welcome navigation={navigation} />);
    const titlePrimary = getByText('Franxx');
    const titleSecondary = getByText('Finance');
    const subtitle = getByText('Controle Financeiro Pessoal');
    const button = getByText('continuar');

    expect(titlePrimary).toBeDefined();
    expect(titleSecondary).toBeDefined();
    expect(subtitle).toBeDefined();
    expect(button).toBeDefined();
  });

  it('should navigate to the Main screen when the button is pressed', () => {
    const { getByText } = render(<Welcome navigation={navigation} />);
    
    fireEvent.press(getByText('continuar'));

    expect(navigation.navigate).toHaveBeenCalledWith('Main');
  });
});
