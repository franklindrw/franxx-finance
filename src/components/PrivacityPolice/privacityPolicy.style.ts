import { StyleSheet } from "react-native"
import { theme } from "../../theme/theme"

export const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '80%',
    paddingBottom: theme.sizes.xl,
    width: '100%',
  },
  puller: {
    width: 40,
    height: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.gray,
    marginVertical: theme.sizes.lg,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: theme.sizes.xxl,
  },

  logoSubtitle: {
    fontFamily: theme.font_family.light,
    fontSize: theme.font_size.lg,
    marginBottom: -6,
  },
  logoTitle: {
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.x2l,
  },
  logoSlogan: {
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.sm,
    marginBottom: theme.sizes.lg,
  },

  title: {
    fontFamily: theme.font_family.semiBold,
    fontSize: theme.font_size.lg,
    marginVertical: theme.sizes.lg,
  },
  subtitle: {
    width: "90%",
    fontFamily: theme.font_family.medium,
    fontSize: theme.font_size.md,
    marginVertical: theme.sizes.md,
  },
  text: {
    width: "90%",
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.sm,
    marginBottom: theme.sizes.sm,
    textAlign: "justify",
  }
})
