import {View, Text, TextInput, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from '../../styles/Styles';
import ModalError from '../../components/ModalError';

export default function LoginUI({
  handleCaptureData,
  handleConfirm,
  text,
  isVisible,
  setVisible,
}) {
  return (
    <View style={Styles.container}>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.titleContainer}>
          <Text style={[Styles.title, Styles.loginTitle]}>Iniciar sesión</Text>
        </View>
        <View style={Styles.bodyContainer}>
          <View style={Styles.inputsContainer}>
            <Text style={Styles.subtitle}>
              Ingresá tus datos para iniciar sesión
            </Text>
            <TextInput
              style={Styles.inputs}
              onChangeText={(value: string) =>
                handleCaptureData({name: 'user', value})
              }
              placeholder="Nombre"
            />
            <TextInput
              style={Styles.inputs}
              onChangeText={(value: string) =>
                handleCaptureData({name: 'email', value})
              }
              placeholder="Email"
            />
          </View>
          <View style={Styles.buttonContainer}>
            <Pressable style={Styles.button} onPress={() => handleConfirm()}>
              <Text style={Styles.textButton}>Iniciar sesión</Text>
            </Pressable>
          </View>
        </View>
        <ModalError text={text} isVisible={isVisible} setVisible={setVisible} />
      </ScrollView>
    </View>
  );
}
