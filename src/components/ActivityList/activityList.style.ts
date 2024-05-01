import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background_dark,
    marginHorizontal: theme.sizes.lg,
    marginBottom: theme.sizes.sm,
    borderRadius: theme.sizes.md,
  },
  title: {
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.semiBold,
    color: theme.colors.primary,
    margin: theme.sizes.md,
  },
  item_container: {
    borderRadius: theme.sizes.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: theme.sizes.md,
    padding: theme.sizes.md,
  },
  item_row: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.sizes.sm,
  },
  itemTitle: {
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.semiBold,
    color: theme.colors.primary,
  },
  itemDescription: {
    fontFamily: theme.font_family.light,
    fontSize: theme.font_size.sm,
    color: theme.colors.primary,
  },
  item_icon: {
    backgroundColor: theme.colors.tertiary,
    borderRadius: theme.sizes.md,
    padding: theme.sizes.md,
  }
});
