import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: theme.sizes.md,
  },
  input: {
    width: "100%",
    marginBottom: theme.sizes.xs,
    color: theme.colors.tertiary,
  },
  input_sm: {
    height: theme.sizes.lg,
    fontSize: theme.font_size.md,
  },
  input_md: {
    height: theme.sizes.xl,
    fontSize: theme.font_size.lg,
  },
  input_lg: {
    height: theme.sizes.xxl,
    fontSize: theme.font_size.x2l,
  },
  label: {
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.regular,
    color: theme.colors.tertiary,
    marginBottom: theme.sizes.xs,
  },
  error: {
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_family.regular,
    color: theme.colors.danger,
    marginBottom: theme.sizes.xs,
  },
});
