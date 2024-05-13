import React from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  root: {
    borderRadius: 50,
    backgroundColor: theme.colors.background,
    elevation: 5,
    marginVertical: 10,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    color: theme.colors.primary,
    padding: 10,
  },
  label: {
    color: theme.colors.primary,
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.bold,
    textAlign: "center",
  },
});
  