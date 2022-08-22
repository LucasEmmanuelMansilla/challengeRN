import {View, Text, Modal, Pressable} from 'react-native';
import React from 'react';
import {Styles} from '../styles/Styles';

export default function ModalError({isVisible, text, setVisible}) {
  return (
    <Modal transparent visible={isVisible}>
      <View style={Styles.modalContainer}>
        <View style={Styles.bodyModal}>
          <Text style={Styles.text}>{text}</Text>
          <View style={Styles.buttonModalContainer}>
            <Pressable style={Styles.button} onPress={() => setVisible()}>
              <Text style={Styles.textButton}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
