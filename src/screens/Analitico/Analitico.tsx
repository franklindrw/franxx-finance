import React from "react";
import { SafeAreaView, Text, Dimensions } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import { LineChart } from "react-native-chart-kit";
import { styles } from "./analitico.style";
import { theme } from "../../theme/theme";
import data from "../../data/analitcs.json";

export default function Analitico() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [analitcsData, setAnalitcsData] = React.useState<any>();

  React.useEffect(() => {
    if (selectedIndex === 0) setAnalitcsData(data.weekData);
    if (selectedIndex === 1) setAnalitcsData(data.monthData);
    if (selectedIndex === 2) setAnalitcsData(data.yearData);
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

      <LineChart
        data={analitcsData}
        width={Dimensions.get("window").width - 20}
        height={200}
        yAxisLabel="R$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: theme.colors.background_xdark,
          backgroundGradientTo: theme.colors.background_xdark,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "4",
            strokeWidth: "1",
            stroke: theme.colors.tertiary
          }
        }}
        style={{ borderRadius: 8 }}
      />
    </SafeAreaView>
  );
};
