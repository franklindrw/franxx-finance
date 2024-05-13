import React from "react";
import { Dimensions } from "react-native";
import { LineChart as RNLineChart } from "react-native-chart-kit";
import type { ChartData } from "../../interfaces/chartData";
import { theme } from "../../theme/theme";

interface LineChartProps {
  data: ChartData;
}

export default function LineChart({ data }: LineChartProps) {
  return (
    <RNLineChart
      data={data}
      width={Dimensions.get("window").width - 20}
      height={200}
      yAxisLabel="R$ "
      yAxisInterval={1}
      chartConfig={{
        backgroundGradientFrom: theme.colors.background_dark,
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
  )
}
