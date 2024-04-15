import React from "react";
import { View, Text, Modal } from "react-native";
import { styles } from "./transactionModal.style";
import { XIcon } from "lucide-react-native";
import IconButton from "../../IconButton/IconButton";
import TextField from "../../TextField/TextField";
import Button from "../../Button/Button";
import SelectCategory from "../SelectCategory/SelectCategory";

interface TransactionModalProps {
  type: string;
  onOpen: boolean;
  onClose: () => void;
}

import transactionData from "../../../data/transaction_categories.json";

export default function TransactionModal({ onOpen, onClose, type }: TransactionModalProps) {
  const [categoryActive, setCategoryActive] = React.useState<string>("");

  const handleCategoryActive = (category: string) => {
    setCategoryActive(category);
  };

  const handleCloseModal = () => {
    setCategoryActive("");
    onClose();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={onOpen}
      onRequestClose={onClose}
    >
      <View style={styles.modal_container}>
        <View style={styles.modal_header}>
          <Text style={styles.title}>Adicionar {type}</Text>
          <IconButton icon={<XIcon size={20} />} onPress={handleCloseModal} />
        </View>

        <View style={styles.inputs_container}>
          <TextField
            label="Descrição"
            onChangeText={() => {}}
            placeholder="Digite uma descrição"
            size="md"
          />

          <TextField
            label="Valor R$"
            onChangeText={() => {}}
            placeholder="R$ 00,00"
            size="lg"
          />

          <SelectCategory 
            data={type === "receita" ? transactionData.income : transactionData.expenses}
            categoryActive={categoryActive}
            onPress={handleCategoryActive}
          />
        </View>

        <Button label="Adicionar" width="80%" onPress={() => {}} />
      </View>
    </Modal>
  );
}