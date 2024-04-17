import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    alignItems: "center",
  },
  heading: {
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.font_size.xl,
    color: theme.colors.primary,
  },
  subtitle: {
    width: "100%",
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.font_size.lg,
    color: theme.colors.white,
    paddingHorizontal: theme.sizes.md,
    paddingVertical: theme.sizes.xs,
  }
});
