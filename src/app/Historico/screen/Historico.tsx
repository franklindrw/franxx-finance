import React from "react";
import { SafeAreaView, View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { styles } from "./historico.style";

import IncomeTab from "../components/IncomeTab";
import ExpenseTab from "../components/ExpenseTab";

const renderScene = SceneMap({
  income: IncomeTab,
  expense: ExpenseTab,
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
      indicatorStyle={{ backgroundColor: 'transparent' }}
      style={{ backgroundColor: 'transparent' }}
      pressColor="transparent"
      pressOpacity={0.8}
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
