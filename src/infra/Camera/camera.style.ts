import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: '100%',
  },
  optionsContainer: {
    width: '100%',
    height: '50%',
    gap: theme.sizes.lg,
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.lg,
  },
  optionButton: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleCamera: {
    width: 70,
    height: 70,
    backgroundColor: theme.colors.primary,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.sizes.lg,
  },
  innerBorder: {
    width: 66,
    height: 66,
    borderRadius: 99,
    borderWidth: 4,
    borderColor: theme.colors.black,
    backgroundColor: theme.colors.white,
  }
})
