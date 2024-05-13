import React from "react"
import Modal from "react-native-modal"
import { View, type StyleProp, type ViewStyle } from "react-native"
import { styles } from "./bottomSheet.style"

interface BottomSheetRootProps {
  onOpen: boolean
  onClose: () => void
  children: React.ReactNode
  modalStyles?: StyleProp<ViewStyle>
}

export default function BottomSheetRoot({ 
  onOpen,
  onClose,
  children,
  modalStyles,
  }: BottomSheetRootProps) {
  return (
    <Modal
      isVisible={onOpen}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={styles.modal}
      propagateSwipe={true}
    >
      <View style={[styles.container, modalStyles]}>
        <View style={styles.puller}></View>
        {children}
      </View>
    </Modal>
  )
}