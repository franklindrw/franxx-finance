import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  modal_container: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    bottom: 0,
    height: "auto",
    justifyContent: "space-between",
    paddingVertical: theme.sizes.lg,
    position: "absolute",
    width: "100%",
  },
  modal_header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputs_container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.semiBold,
    color: theme.colors.tertiary,
  }
});
