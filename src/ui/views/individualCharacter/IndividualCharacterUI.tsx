import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {Styles} from '../../styles/Styles';
import Episodes from '../../components/Episodes';

export default function IndividualCharacterUI({
  character,
  handleGetEpisode,
  handleGetLocation,
}) {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <Text style={[Styles.title, Styles.textDecoration]}>
          Ficha del personaje
        </Text>
        <View style={Styles.bodyCharacterContainer}>
          <View style={Styles.viewMoreLocation}>
            <Text style={Styles.text}>Nombre: {character.name}</Text>
          </View>
          <View style={Styles.viewMoreLocation}>
            <Text style={Styles.text}>Especie: {character.species}</Text>
          </View>
          <View style={Styles.viewMoreLocation}>
            <Text style={Styles.text}>
              Tipo: {character.type ? character.type : 'Dato no informado'}
            </Text>
          </View>
          <View style={Styles.viewMoreLocation}>
            <Text style={Styles.text}>
              Ubicación:{' '}
              {character.location
                ? character.location.name
                : 'Dato no informado'}
            </Text>
            <Pressable
              style={Styles.viewMoreButton}
              onPress={() => handleGetLocation(character.location.url)}
            >
              <Text style={Styles.viewMoreText}>Ver más</Text>
            </Pressable>
          </View>

          <Image
            style={Styles.imageCharacter}
            source={{uri: character.image}}
          />
          {character.episode.length > 0 && (
            <View>
              <Text style={[Styles.subtitle, Styles.textDecoration]}>
                Episodios en los que aparece
              </Text>
              {character.episode.map(ep => (
                <View key={ep}>
                  <Episodes handleGetEpisodes={handleGetEpisode} url={ep} />
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
