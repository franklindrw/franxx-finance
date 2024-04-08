import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./activityList.style";
import { Beef, Hammer, Warehouse, Briefcase } from 'lucide-react-native';
import { numberToReal } from "../../utils/numberToReal";
import { stringToDate } from "../../utils/stringToDate";
import { typeValueEnum } from "../../enums/enums";
import { theme } from "../../theme/theme";

const data = require('../../data/recent_activity.json');

interface ActivityCardProps {
  id: string;
  name: string;
  description: string;
  date: string;
  value: number;
  type: string;
  category: string;
}

const ActivityCard = ({ id, name, date, value, type, category }: ActivityCardProps)  => {
  return (
    <View style={styles.item_container} key={id}>
      <View style={styles.item_row}>
        <View style={styles.item_icon}>
          {category === 'alimentacao' && <Beef size={24} color='white' />}
          {category === 'moradia' && <Warehouse size={24} color='white' />}
          {category === 'trabalho' && <Briefcase size={24} color='white' />}
          {category === 'servicos' && <Hammer size={24} color='white' />}
        </View>
        <View>
          <Text style={styles.itemTitle}>{name}</Text>
          <Text style={styles.itemDescription}>{stringToDate(date)}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <Text style={styles.itemTitle}>{numberToReal(value)}</Text>
        <Text style={styles.itemDescription}>{typeValueEnum[type as keyof typeof typeValueEnum]}</Text>
      </View>
    </View>
  );
}

export default function ActivityList() {
  return (
    <View style={styles.root}>
      <FlatList
        ListHeaderComponent={(
          <Text style={styles.title}>Atividades Recentes</Text>
        )}
        data={data}
        renderItem={({ item }) => (<ActivityCard {...item} />)}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
