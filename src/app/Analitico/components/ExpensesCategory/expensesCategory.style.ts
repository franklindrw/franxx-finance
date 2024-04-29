import { StyleSheet } from "react-native";
import { theme } from "../../../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: theme.sizes.xs,
  },
  category_div: {
    width: "40%",
    alignItems: "center",
    backgroundColor: theme.colors.tertiary,
    paddingVertical: theme.sizes.sm,
    borderRadius: theme.sizes.lg,
  },
  category_text: {
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.sm,
    color: theme.colors.white,
    marginTop: theme.sizes.xs,
  },
  values_div: {
    alignItems: "flex-end",
  },
  percentage_value: {
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.md,
    color: theme.colors.white,
  },
  money_value: {
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.font_size.lg,
    color: theme.colors.white,
  }
});
