import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.background_light,
    borderRadius: theme.sizes.lg,
    flexDirection: 'row',
    gap: theme.sizes.xl,
    justifyContent: 'space-around',
    marginHorizontal: theme.sizes.sm,
    marginVertical: theme.sizes.md,
    paddingVertical: theme.sizes.md,
    paddingHorizontal: theme.sizes.xl,
  },
  label: {
    color: theme.colors.tertiary,
    fontFamily: theme.font_family.light,
    fontSize: theme.font_size.md,
  },
  value: {
    color: theme.colors.tertiary,
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.lg,
  },
});
