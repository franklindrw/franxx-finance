import React from 'react';
import { View, Text, TouchableOpacity, type TextStyle } from 'react-native';
import { Calendar } from 'lucide-react-native';
import DateTimePicker, { type DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { styles } from './datePicker.style';

interface DatePickerProps {
  stylesProps?: TextStyle;
  date: Date;
  setDate: (date: Date) => void;
}

export default function DatePicker({ stylesProps, date, setDate }: DatePickerProps) {
  const [show, setShow] = React.useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View>
      <TouchableOpacity style={styles.label_container} onPress={() => setShow(true)}>
        <Calendar size={20} color='#0D47A1' />
        <Text style={!!stylesProps && stylesProps}>{date.toLocaleDateString('pt-br')}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          mode="date"
          display="inline"
          onChange={onChange}
          style={styles.datePicker}
          textColor='#0D47A1'
          themeVariant='light'
          locale='pt-br'
        />
      )}
    </View>
  );
}
