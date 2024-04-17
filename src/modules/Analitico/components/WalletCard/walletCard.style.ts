import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.colors.background_light,
    borderRadius: theme.sizes.xl,
    padding: theme.sizes.md,
    marginBottom: theme.sizes.lg,
  },
  label: {
    color: theme.colors.tertiary,
    fontFamily: theme.font_family.light,
    fontSize: theme.sizes.md,
  },
  money: {
    color: theme.colors.tertiary,
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.sizes.xl,
  },
  percent_container: {
    borderRadius: theme.sizes.xl,
    flexDirection: 'row',
    gap: theme.sizes.sm,
    backgroundColor: theme.colors.tertiary,
    paddingHorizontal: theme.sizes.lg,
    paddingVertical: theme.sizes.sm,
  },
  percent_text: {
    color: theme.colors.white,
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.sizes.lg,
  }
});
