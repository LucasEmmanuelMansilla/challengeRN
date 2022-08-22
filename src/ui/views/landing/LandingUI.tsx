import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Pressable,
  BackHandler,
} from 'react-native';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import React, {useRef} from 'react';
import {Styles} from '../../styles/Styles';
import NavigationConstant from '../../../navigation/NavigationConstant';

export default function LandingUI({
  characters,
  handleIndividualCharacter,
  handleCaptureName,
  handleNextAndPrevPage,
  info,
  visible,
}) {
  const route = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === NavigationConstant.LANDING_STACK.LANDING) {
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  const flatListRef = useRef();
  const handleItemPress = index => {
    flatListRef.current?.scrollToIndex({animated: true, index});
  };
  return (
    <View style={Styles.landingContainer}>
      <Text style={Styles.title}>Bienvenido</Text>
      <TextInput
        style={[Styles.inputs, {marginHorizontal: 20}]}
        placeholder="Buscar personaje"
        onChangeText={text => handleCaptureName(text)}
      />
      <FlatList
        contentContainerStyle={Styles.flatList}
        data={characters}
        ref={flatListRef}
        renderItem={({item}) => (
          <Pressable
            onPress={() => handleIndividualCharacter(item.id)}
            style={Styles.infoContainer}
          >
            <Text style={{marginVertical: 5}}>Nombre: {item.name}</Text>
            <Text>Ubicación: {item.location.name}</Text>
            <Image style={Styles.image} source={{uri: item.image}} />
          </Pressable>
        )}
      />
      <View style={Styles.buttonNextPageContainer}>
        {visible && (
          <>
            <Pressable
              style={
                info && info.prev === null
                  ? Styles.buttonNextPageDisabled
                  : Styles.buttonNextPage
              }
              disabled={info && info.prev === null ? true : false}
              onPress={() => {
                handleNextAndPrevPage(info.prev);
                handleItemPress(0);
              }}
            >
              <Text style={Styles.buttonNextPageText}> {'<'} </Text>
            </Pressable>
            <Pressable
              disabled={info && info.next === null ? true : false}
              onPress={() => {
                handleNextAndPrevPage(info.next);
                handleItemPress(0);
              }}
              style={
                info && info.next === null
                  ? Styles.buttonNextPageDisabled
                  : Styles.buttonNextPage
              }
            >
              <Text style={Styles.buttonNextPageText}> {'>'} </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}
