import { StyleSheet } from "react-native"
import { theme } from "../../theme/theme"

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  container: {
    marginVertical: theme.sizes.lg,
    width: '80%',
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.sizes.xl,
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.sizes.md,
    marginVertical: theme.sizes.xxl,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.font_family.medium,
    fontSize: theme.sizes.lg,
    textAlign: 'justify',
    width: '100%',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.sizes.xl,
  },
  cancelButton: {
    backgroundColor: theme.colors.danger,
    shadowColor: 'transparent',
    paddingHorizontal: theme.sizes.xl,
  },
  cancelText: {
    color: theme.colors.white,
    fontSize: theme.sizes.lg,
    fontFamily: theme.font_family.medium,
    textAlign: 'center',
  },
})
