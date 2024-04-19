import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import { styles } from "./analitico.style";
import { theme } from "../../../theme/theme";
import { type ChartData } from "../../../interfaces/chartData";
import data from "../../../data/analitcs.json";
import LineChart from "../../../components/Charts/LineChart";
import WalletCard from "../components/WalletCard/WalletCard";
import CalendarHeatmap from "../../../components/Charts/CalendarHeatmap";
import TotalExpensesCard from "../components/TotalExpensesCard/TotalExpensesCard";

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
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Text style={styles.heading}>Analítico</Text>

        <ButtonGroup
          buttons={['Semana', 'Mês', 'Ano']}
          selectedIndex={selectedIndex}
          onPress={handleSelectedIndex}
          containerStyle={{ width: "80%", height: 35, marginVertical: 16, borderRadius: 50, borderWidth: 0 }}
          buttonStyle={{ backgroundColor: theme.colors.background_xdark }}
          textStyle={{ color: theme.colors.gray, fontFamily: theme.font_family.light }}
          selectedButtonStyle={{ backgroundColor: theme.colors.tertiary }}
          selectedTextStyle={{ color: theme.colors.white, fontFamily: theme.font_family.medium }}
        />

        <WalletCard value={35_460.45} percent={2.5} />

        <Text style={styles.subtitle}>Ganhos</Text>
        {!!analitcsData && <LineChart data={analitcsData} />}

        <Text style={styles.subtitle}>Despesas</Text>
        {!!analitcsData && <CalendarHeatmap data={data.expenses} />}
        <TotalExpensesCard />
      </ScrollView>
    </SafeAreaView>
  );
};
