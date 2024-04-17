import React from "react";
import { SafeAreaView, Text } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import { styles } from "./analitico.style";
import { theme } from "../../../theme/theme";
import { type ChartData } from "../../../interfaces/chartData";
import data from "../../../data/analitcs.json";
import LineChart from "../../../components/Charts/LineChart";
import WalletCard from "../components/WalletCard";

export default function Analitico() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [analitcsData, setAnalitcsData] = React.useState<ChartData>();

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

      <WalletCard />

      <Text style={styles.subtitle}>Ganhos</Text>
      {!!analitcsData && <LineChart data={analitcsData} />}
    </SafeAreaView>
  );
};
