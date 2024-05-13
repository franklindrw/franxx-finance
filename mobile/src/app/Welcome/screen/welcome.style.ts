import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.md, 
    color: theme.colors.primary,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  image: {
    width: 280,
    height: 280,
    marginVertical: 10,
  },
  button: {
    width: '60%',
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.sizes.xl,
  }
});
