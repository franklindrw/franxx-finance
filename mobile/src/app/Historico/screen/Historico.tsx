import React from "react";
import { SafeAreaView, View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import ActivityList from "../../../components/ActivityList/ActivityList";

import { styles } from "./historico.style";
import { theme } from "../../../theme/theme";

const incomeData = require('../../../data/income_history.json');
const expenseData = require('../../../data/expenses_history.json');

const renderScene = SceneMap({
  income: () => <ActivityList data={incomeData} />,
  expense: () => <ActivityList data={expenseData} />,
});

export default function Historico() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'income', title: 'Receitas' },
    { key: 'expense', title: 'Despesas' },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      pressOpacity={1}
      pressColor="transparent"
      renderLabel={({ route, focused }) => (
        <View style={[styles.label_container, focused && styles.label_container_active]}>
          <Text style={[styles.tab_label, focused && styles.tab_label_active]}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Histórico</Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        lazy
      />
    </SafeAreaView>
  );
};
