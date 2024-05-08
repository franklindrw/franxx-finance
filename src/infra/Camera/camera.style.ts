import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  backButton: {
    width: '100%',
  },
  innerBorder: {
    width: 66,
    height: 66,
    borderRadius: 99,
    borderWidth: 4,
    borderColor: theme.colors.black,
    backgroundColor: theme.colors.white,
  },
  modalContent: {
    width: '100%',
    height: '100%',
  },
  modalButtons: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: theme.sizes.xxl,
    position: 'absolute',
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
  root: {
    flex: 1,
    justifyContent: 'space-between',
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
})
