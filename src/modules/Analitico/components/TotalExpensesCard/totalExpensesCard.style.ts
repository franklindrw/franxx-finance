import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: theme.colors.background_light,
    borderRadius: theme.sizes.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: theme.sizes.sm,
    marginVertical: theme.sizes.md,
    paddingVertical: theme.sizes.md,
    paddingHorizontal: theme.sizes.xl,
  },
  label: {
    color: theme.colors.tertiary,
    fontFamily: theme.font_family.light,
    fontSize: theme.font_size.sm,
  },
  value: {
    color: theme.colors.tertiary,
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.lg,
  },
});
