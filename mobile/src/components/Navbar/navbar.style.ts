import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.background_dark,
    padding: theme.sizes.lg,
    justifyContent: 'space-around',
  }
});
