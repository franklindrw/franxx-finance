import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  heading: {
    width: "100%",
    fontFamily: theme.font_family.bold,
    color: theme.colors.secondary,
    fontSize: theme.font_size.lg,
  },
  container: {
    width: "90%",
    alignItems: "center",
    marginTop: theme.sizes.lg,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.lg,
    paddingVertical: theme.sizes.lg,
    borderRadius: theme.sizes.md,
    marginVertical: theme.sizes.md,
    gap: theme.sizes.xs,
  },
  button: {
    width: "80%",
    backgroundColor: theme.colors.secondary,
    marginBottom: theme.sizes.xl,
  },
  hyperlink: {
    color: theme.colors.white,
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.md,
    textDecorationLine: "underline",
  },
  acceptTerms: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  acceptText: {
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.sm,
    color: theme.colors.tertiary,
    textDecorationLine: "underline",
  }
});
