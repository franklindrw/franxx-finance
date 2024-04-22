import React from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { styles } from './selectCategory.style';
import type { TransactionItem } from '../../../../interfaces/transaction_categories';
import { categoryIcons, type CategoryIcons } from '../../../../utils/categoryIcons';
import { CircleHelp } from 'lucide-react-native';

interface SelectCategoryProps {
  onPress: (category: string) => void;
  categoryActive: string;
  data: TransactionItem[];
}

interface CategoryCardProps {
  active?: boolean;
  name: string;
  category: string;
  onPress: (category: string) => void;
}

const CategoryCard = ({ name, category, onPress, active = false }: CategoryCardProps) => {
  const Icon = categoryIcons[category as CategoryIcons] ?? CircleHelp;

  return (
    <TouchableOpacity
      testID={`category-${name}`}
      disabled={active}
      onPress={() => onPress(name ?? "")}
      style={[styles.card_container, active && styles.card_active]}
    >
      <Icon size={24} color={active ? 'white' : '#0D47A1'} />
      <Text style={[styles.card_title, active && styles.title_active]}>{name}</Text>
    </TouchableOpacity>
  )
}

export default function SelectCategory({ data, categoryActive, onPress }: SelectCategoryProps) {
  return (
    <View style={styles.root}>
      <Text style={styles.label_text}>Categoria</Text>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            category={category.category}
            active={category.name === categoryActive}
            onPress={onPress}
          />
        ))}
      </ScrollView>
    </View>
  )
}
