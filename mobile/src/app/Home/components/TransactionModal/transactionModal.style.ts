import { StyleSheet } from "react-native";
import { theme } from "../../../../theme/theme";

export const styles = StyleSheet.create({
  modal_header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.sizes.lg,
  },
  inputs_container: {
    width: "100%",
    paddingHorizontal: theme.sizes.sm,
    paddingVertical: theme.sizes.lg,
  },
  title: {
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.semiBold,
    color: theme.colors.tertiary,
  },
  label: {
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.light,
    color: theme.colors.tertiary,
    marginBottom: 5,
  },
  date_text: {
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.lg,
    color: theme.colors.tertiary,
  }
});
