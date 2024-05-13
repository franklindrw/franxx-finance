import React from "react";
import { View, Text, Modal } from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "./transactionModal.style";
import { XIcon } from "lucide-react-native";
import IconButton from "../../../../components/IconButton/IconButton";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button/Button";
import SelectCategory from "../SelectCategory/SelectCategory";
import { formatDate } from "../../../../utils/stringToDate";
import transactionData from "../../../../data/transaction_categories.json";
import DatePicker from "../../../../infra/DatePicker/DatePicker";
import { moneyToNumber } from "../../../../utils/numberToReal";
import { theme } from "../../../../theme/theme";
import BottomSheet from "../../../../components/BottomSheet";

interface TransactionModalProps {
  type: string;
  onOpen: boolean;
  onClose: () => void;
}


export default function TransactionModal({ onOpen, onClose, type }: TransactionModalProps) {
  const [categoryActive, setCategoryActive] = React.useState<string>("");
  const [dateSelected, setDateSelected] = React.useState(new Date());

  const { register, setValue, handleSubmit } = useForm();

  React.useEffect(() => {
    register("description");
    register("value");
    register("category");
    register("date");
    register("type");
  }, [register]);

  React.useEffect(() => {
    if (type) setValue("type", type);
    if (dateSelected) setValue("date", formatDate(dateSelected));
  }, [type]);

  const handleCategoryActive = (category: string) => {
    setValue("category", category);
    setCategoryActive(category);
  };

  const handleDateSelected = (date: Date) => {
    const formattedDate = formatDate(date);
    setValue("date", formattedDate);
    setDateSelected(date);
  }

  const onSubmit = (data: any) => {
    // transforma string em number
    data.value = moneyToNumber(data.value);
    console.log(data);
    onClose();
  }

  const handleCloseModal = () => {
    setCategoryActive("");
    onClose();
  }

  return (
    <BottomSheet.Root
      onOpen={onOpen}
      onClose={handleCloseModal}
      modalStyles={{ height: "70%" }}
    >
      <BottomSheet.Container>
        <View style={styles.modal_header}>
          <Text style={styles.title}>Adicionar {type}</Text>
        </View>

        <View style={styles.inputs_container}>
          <TextField.Root>
            <TextField.Label label="Descrição" />
            <TextField.InputText 
              size="md"
              onChangeText={text => setValue("description", text)}
              placeholder="Digite uma descrição"
            />
          </TextField.Root>

          <TextField.Root>
            <TextField.Label label="Valor R$" />
            <TextField.MoneyInput 
              size="lg"
              onChange={text => setValue("value", text)}
              placeholder="R$ 00,00"
            />
          </TextField.Root>

          <SelectCategory 
            data={type === "receita" ? transactionData.income : transactionData.expenses}
            categoryActive={categoryActive}
            onPress={handleCategoryActive}
          />

          <View style={styles.inputs_container}>
            <Text style={styles.label}>Selecione a Data</Text>
            <DatePicker date={dateSelected} setDate={handleDateSelected} stylesProps={styles.date_text} />
          </View>
        </View>

        <Button
          contentStyles={{ width: "80%" }}
          label="Adicionar"
          color={theme.colors.background}
          onPress={handleSubmit(onSubmit)}
          testID="submit-button"
        />
      </BottomSheet.Container>
    </BottomSheet.Root>
  );
}