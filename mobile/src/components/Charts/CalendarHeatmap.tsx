import React from 'react'
import { Dimensions } from "react-native";
import { ContributionGraph } from 'react-native-chart-kit';
import { theme } from "../../theme/theme";

interface CalendarHeatmapProps {
  data: any;
}

export default function CalendarHeatmap({ data }: CalendarHeatmapProps) {
  return (
    <ContributionGraph
      values={data}
      endDate={new Date()}
      numDays={105}
      width={Dimensions.get("window").width - 20}
      height={220}
      tooltipDataAttrs={data}
      chartConfig={{
        backgroundGradientFrom: theme.colors.background_dark,
        backgroundGradientTo: theme.colors.tertiary,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 8,
        }
      }}
    />
  )
}