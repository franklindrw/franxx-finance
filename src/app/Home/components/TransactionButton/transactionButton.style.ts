import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme';

export const styles = StyleSheet.create({
  root: {
    width: "45%",
    borderRadius: theme.sizes.lg,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },
  flex_container: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.sizes.md,
    padding: theme.sizes.md,
    width: "100%",
  },
  label: {
    width: "60%",
    fontFamily: theme.font_family.semiBold,
    color: "white",
    fontSize: theme.font_size.md,
  }
});
