import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

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
    height: '75%',
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
    height: '100%',
    alignItems: 'center',
  },
})
