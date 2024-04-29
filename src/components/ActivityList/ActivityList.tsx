import React from "react";
import { View, Text, FlatList } from "react-native";
import { CircleHelp } from 'lucide-react-native';

import { categoryIcons, type CategoryIcons } from "../../utils/categoryIcons";
import { numberToReal } from "../../utils/numberToReal";
import { stringToDate } from "../../utils/stringToDate";

import { typeValueEnum } from "../../enums/enums";

import { styles } from "./activityList.style";

import { ActivityData } from "../../interfaces/activityData";

interface ActivityCardProps {
  data: ActivityData[];
  title?: string;
}

const ActivityCard: React.FC<ActivityData> = React.memo(({ id, name, date, value, type, category }) => {
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

export default function ActivityList({ data, title }: ActivityCardProps) {
  return (
    <View style={styles.root}>
      <FlatList
        ListHeaderComponent={!!title ? (
          <Text style={styles.title}>{title}</Text>
        ) : null}
        data={data}
        renderItem={({ item }) => (<ActivityCard {...item} />)}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
