import React from "react"
import { ScrollView, Text, Modal } from "react-native"
import { styles } from "./privacityPolicy.style"

interface PrivacityPolicyProps {
  onOpen: boolean;
}

export default function PrivacityPolicy({ onOpen }: PrivacityPolicyProps) {
  const [modalVisible, setModalVisible] = React.useState(false)

  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={onOpen}
      onRequestClose={handleCloseModal}
    >
      <ScrollView
        contentContainerStyle={styles.root}
        onScrollEndDrag={({ nativeEvent }) => {
          if (nativeEvent.contentOffset.y <= -100) {
            handleCloseModal();
          }
        }}
        scrollEventThrottle={16}
      >
        <Text>Privacity Policy</Text>
        <Text>Teste teste teste</Text>
        <Text>Teste teste teste</Text>
        <Text>Teste teste teste</Text>
        <Text>Teste teste teste</Text>
        <Text>Teste teste teste</Text>
        <Text>Teste teste teste</Text>
        <Text>Teste teste teste</Text>
      </ScrollView>
    </Modal>
  )
}
