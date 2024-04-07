import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.backgroud,
  },

  wallet_container: {
    marginVertical: theme.sizes.sm,
    marginHorizontal: theme.sizes.lg,
  },
  wallet_label: {
    fontFamily: theme.font_family.regular,
    color: theme.colors.primary,
    fontSize: theme.font_size.lg,
  },
  wallet_value: {
    fontFamily: theme.font_family.semiBold,
    color: theme.colors.primary,
    fontSize: theme.font_size.x2l,
  },
  
  income_container: {
    flexDirection: "row",
    backgroundColor: theme.colors.background_light,
    borderRadius: theme.sizes.lg,
    padding: theme.sizes.lg,
    justifyContent: "space-around",
    marginVertical: theme.sizes.sm,
    marginHorizontal: theme.sizes.lg,
  },
  income_item: {
    borderRightWidth: 1,
    borderColor: theme.colors.tertiary,
    paddingRight: theme.sizes.lg,
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
});
