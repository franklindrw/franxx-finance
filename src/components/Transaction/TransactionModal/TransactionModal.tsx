import React from "react";
import { View, Text, Modal } from "react-native";
import { styles } from "./transactionModal.style";
import { XIcon } from "lucide-react-native";
import IconButton from "../../IconButton/IconButton";
import TextField from "../../TextField/TextField";
import Button from "../../Button/Button";

interface TransactionModalProps {
  type: string;
  onOpen: boolean;
  onClose: () => void;
}

export default function TransactionModal({ onOpen, onClose, type }: TransactionModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={onOpen}
      onRequestClose={onClose}
    >
      <View style={styles.modal_container}>
        <View style={styles.modal_header}>
          <Text style={styles.title}>{type}</Text>
          <IconButton icon={<XIcon size={20} />} onPress={onClose} />
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
        </View>

        <Button label="Salvar" width="80%" onPress={() => {}} />
      </View>
    </Modal>
  );
}