import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  wallet_container: {
    marginVertical: theme.sizes.sm,
    marginHorizontal: theme.sizes.lg,
  },
  wallet_label: {
    fontFamily: theme.font_family.regular,
    color: theme.colors.primary,
    fontSize: theme.font_size.md,
  },
  wallet_value: {
    fontFamily: theme.font_family.semiBold,
    color: theme.colors.primary,
    fontSize: theme.font_size.xl,
  },
  
  income_container: {
    flexDirection: "row",
    backgroundColor: theme.colors.background_light,
    borderRadius: theme.sizes.lg,
    padding: theme.sizes.lg,
    justifyContent: "center",
    marginVertical: theme.sizes.xs,
    marginHorizontal: theme.sizes.lg,
  },
  income_item: {
    borderRightWidth: 1,
    borderColor: theme.colors.tertiary,
    paddingHorizontal: theme.sizes.lg,
  },
  income_label: {
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.sm,
    marginBottom: theme.sizes.xs,
    color: theme.colors.tertiary,
  },
  income_value: {
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.font_size.lg,
  },

  buttons_container: {
    marginVertical: theme.sizes.lg,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: theme.sizes.lg,
  }
});
