import { StyleSheet } from "react-native";
import { theme } from "../../../../theme/theme";

export const styles = StyleSheet.create({
  flex_container: {
    flexDirection: "row",
    gap: theme.sizes.lg,
  },
  header: {
    backgroundColor: theme.colors.background_dark,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.sizes.lg,
    margin: theme.sizes.sm,
    borderRadius: theme.sizes.xl,
  },
  subtitle: {
    fontFamily: theme.font_family.light,
    color: theme.colors.white,
    fontSize: theme.font_size.md,
  },
  title: {
    fontFamily: theme.font_family.regular,
    color: theme.colors.white,
    fontSize: theme.font_size.lg,
  },
  notification: {
    backgroundColor: theme.colors.danger,
    textAlign: "center",
    borderRadius: theme.sizes.xxl,
    position: "absolute",
    zIndex: 1,
    right: -5,
    top: -5,
    paddingHorizontal: theme.sizes.xs,
  },
  notification_text: {
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.sm,
    color: theme.colors.white,
  }
});
