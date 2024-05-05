import { StyleSheet } from "react-native"
import { theme } from "../../theme/theme"

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    backgroundColor: theme.colors.secondary,
  },
  camButton: {
    backgroundColor: theme.colors.gray,
    borderRadius: 50,
    bottom: 0,
    padding: 4,
    position: 'absolute',
    right: 0,
  },
  camDisabled: {
    display: 'none',
  }
})
