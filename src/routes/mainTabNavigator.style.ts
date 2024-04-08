import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const styles = StyleSheet.create({
  tabIcon: {
    backgroundColor: 'transparent',
    padding: theme.sizes.lg,
  },
  tabIconActive: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 50,
    alignItems: 'center',
  },
});
