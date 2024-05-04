import { StyleSheet } from "react-native"
import { theme } from "../../theme/theme"

export const styles = StyleSheet.create({
  logoSubtitle: {
    fontFamily: theme.font_family.light,
    fontSize: theme.font_size.lg,
    marginBottom: -6,
  },
  logoTitle: {
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.x2l,
  },
  logoSlogan: {
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.sm,
    marginBottom: theme.sizes.lg,
  },

  title: {
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.font_size.lg,
    marginVertical: theme.sizes.lg,
  },
  subtitle: {
    width: "90%",
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.md,
    marginVertical: theme.sizes.md,
  },
  text: {
    width: "90%",
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.sm,
    marginBottom: theme.sizes.sm,
    textAlign: "justify",
  }
})
