import { StyleSheet } from "react-native"
import { theme } from "../../../theme/theme"

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: theme.colors.white,
    borderRadius: theme.sizes.md,
    gap: theme.sizes.sm,
    marginVertical: theme.sizes.x3l,
    paddingVertical: theme.sizes.lg,
  },
  button: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
