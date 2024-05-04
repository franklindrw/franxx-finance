import { StyleSheet } from "react-native"
import { theme } from "../../theme/theme"

export const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    height: "auto",
    justifyContent: "space-between",
    paddingVertical: theme.sizes.lg,
    position: "absolute",
    width: "100%",
  },
})
