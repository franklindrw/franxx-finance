import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";
import { version } from "react";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: theme.colors.background,
  },
  title_container: {
    padding: theme.sizes.md,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.sizes.xs,
  },
  title_text: {
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.lg,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  version_text: {
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.sm,
    color: theme.colors.white,
  },
  menuContainer: {
    width: "100%",
    padding: theme.sizes.md,
    gap: theme.sizes.sm,
    marginTop: theme.sizes.lg,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: theme.sizes.md,
    marginBottom: theme.sizes.lg,
  }
});
