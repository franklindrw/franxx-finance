import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.sizes.md,
    borderRadius: theme.sizes.md,
    gap: theme.sizes.sm,
  },
  text: {
    color: "white",
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.regular,
    marginTop: 1,
  }
});
