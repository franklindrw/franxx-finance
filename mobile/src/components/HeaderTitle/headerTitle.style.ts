import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  titlePrimary: {
    fontFamily: theme.font_family.light,
    fontSize: theme.font_size.x2l,
    color: theme.colors.primary,
    marginBottom: -20,
  },
  titleSecondary: {
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.x3l,
    color: theme.colors.primary,
  },
  subtitle: {
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.lg, 
    color: theme.colors.primary,
  },
})
