import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.font_size.xl,
    color: theme.colors.white,
  },
  label_container: {
    width: 150,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: theme.colors.background_dark,
    paddingVertical: theme.sizes.sm,
    paddingHorizontal: theme.sizes.xl,
  },
  label_container_active: {
    backgroundColor: theme.colors.background_xdark,
  },
  tab_label: {
    fontFamily: theme.font_family.light,
    fontSize: theme.font_size.md,
    color: theme.colors.gray,
  },
  tab_label_active: {
    fontFamily: theme.font_family.semiBold,
    color: theme.colors.white,
  },
});
