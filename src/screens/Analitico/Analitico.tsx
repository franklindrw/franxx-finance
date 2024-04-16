import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import { styles } from "./analitico.style";
import { theme } from "../../theme/theme";

export default function Analitico() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (selectedIndex === 0) console.log("Semana");
    if (selectedIndex === 1) console.log("Mês");
    if (selectedIndex === 2) console.log("Ano");
  }, [selectedIndex]);

  const handleSelectedIndex = (index: number) => {
    setSelectedIndex(index);
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.heading}>Analítico</Text>

      <ButtonGroup
        buttons={['Semana', 'Mês', 'Ano']}
        selectedIndex={selectedIndex}
        onPress={handleSelectedIndex}
        containerStyle={{ width: "80%", height: 35, marginVertical: 20, borderRadius: 50, borderWidth: 0 }}
        buttonStyle={{ backgroundColor: theme.colors.background_xdark }}
        textStyle={{ color: theme.colors.gray, fontFamily: theme.font_family.light }}
        selectedButtonStyle={{ backgroundColor: theme.colors.tertiary }}
        selectedTextStyle={{ color: theme.colors.white, fontFamily: theme.font_family.medium }}
      />
    </SafeAreaView>
  );
};
