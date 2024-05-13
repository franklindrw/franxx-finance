import { StyleSheet } from "react-native";
import { theme } from "../../../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    gap: theme.sizes.sm,
    width: "100%",
    paddingHorizontal: theme.sizes.md,
  },
  label_text: {
    fontFamily: theme.font_family.regular,
    color: theme.colors.tertiary,
    fontSize: theme.sizes.md,
  },
  container: {
    width: "100%",
    flexDirection: "row",
  },
  card_container: {
    justifyContent: "center",
    alignItems: "center",
    padding: theme.sizes.sm,
    borderRadius: theme.sizes.md,
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    minWidth: 60,
    marginHorizontal: theme.sizes.xs,
  },
  card_active: {
    backgroundColor: theme.colors.tertiary,
  },
  card_title: {
    fontSize: theme.sizes.md,
    color: theme.colors.tertiary,
    fontFamily: theme.font_family.semiBold,
  },
  title_active: {
    color: theme.colors.white,
  },
});
