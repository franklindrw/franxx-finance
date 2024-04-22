import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./activityList.style";
import { numberToReal } from "../../../../utils/numberToReal";
import { stringToDate } from "../../../../utils/stringToDate";
import { typeValueEnum } from "../../../../enums/enums";
import { categoryIcons, type CategoryIcons } from "../../../../utils/categoryIcons";
import { CircleHelp } from 'lucide-react-native';

interface ActivityCardProps {
  id: string;
  name: string;
  date: string;
  value: number;
  type: string;
  category: string;
}

const ActivityCard: React.FC<ActivityCardProps> = React.memo(({ id, name, date, value, type, category }) => {
  const Icon = categoryIcons[category as CategoryIcons] ?? CircleHelp;

  return (
    <View style={styles.item_container} key={id}>
      <View style={styles.item_row}>
        <View style={styles.item_icon} testID="category-icon">
          {!!Icon && <Icon size={24} color='white' />}
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
});

export default function ActivityList({ data }: { data: ActivityCardProps[] }) {
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
