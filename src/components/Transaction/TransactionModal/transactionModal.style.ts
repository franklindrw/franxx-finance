import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  modal_container: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  modal_header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  inputs_container: {
    width: "100%",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.semiBold,
    color: theme.colors.tertiary,
  }
});
