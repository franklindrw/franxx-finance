import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  datePicker: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'absolute',
    top: -280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

