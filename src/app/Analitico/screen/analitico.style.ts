import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    fontSize: theme.font_size.md,
    color: theme.colors.white,
    paddingHorizontal: theme.sizes.md,
    paddingVertical: theme.sizes.xs,
    marginTop: theme.sizes.md,
  },
  categorie_expenses: {
    width: "100%",
    alignItems: "center",
    backgroundColor: theme.colors.background_dark,
    borderRadius: theme.sizes.md,
    marginBottom: theme.sizes.md,
    paddingBottom: theme.sizes.xs,
  }
});
