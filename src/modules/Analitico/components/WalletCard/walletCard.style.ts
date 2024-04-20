import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.colors.background_light,
    borderRadius: theme.sizes.lg,
    paddingVertical: theme.sizes.md,
    paddingHorizontal: theme.sizes.lg,
    gap: theme.sizes.lg,
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
  percent_tag: {
    borderRadius: theme.sizes.xl,
    flexDirection: 'row',
    gap: theme.sizes.sm,
    paddingHorizontal: theme.sizes.lg,
    paddingVertical: theme.sizes.sm,
  },
  tag_positive: {
    backgroundColor: theme.colors.success,
  },
  tag_negative: {
    backgroundColor: theme.colors.danger,
  },
  percent_text: {
    color: theme.colors.white,
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.sizes.lg,
  }
});
