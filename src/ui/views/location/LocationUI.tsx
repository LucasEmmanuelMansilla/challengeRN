import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from '../../styles/Styles';

export default function LocationUI({location}) {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <Text style={[Styles.title, Styles.textDecoration]}>Ubicación</Text>
        <View style={Styles.locationContainer}>
          <View style={Styles.viewMoreLocation}>
            <Text style={Styles.text}>Nombre: {location.name}</Text>
          </View>
          <View style={Styles.viewMoreLocation}>
            <Text style={Styles.text}>Dimensión: {location.dimension}</Text>
          </View>
          <View style={Styles.viewMoreLocation}>
            <Text style={Styles.text}>
              Fecha de creación: {location.created}
            </Text>
          </View>
          <View style={Styles.viewMoreLocation}>
            <Text style={Styles.text}>Tipo: {location.type}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
