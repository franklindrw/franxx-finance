import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlePrimary: {
    fontFamily: theme.font_family.light,
    fontSize: theme.font_size.x2l,
    color: theme.colors.primary,
    marginBottom: -20,
  },
  titleSecondary: {
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.x3l,
    color: theme.colors.primary,
  },
  subtitle: {
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.lg, 
    color: theme.colors.primary,
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
  }
});
