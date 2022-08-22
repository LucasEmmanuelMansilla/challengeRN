import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from '../styles/Styles';

export default function Episodes({handleGetEpisodes, url}) {
  const [episode, setEpisode] = React.useState([]);
  useEffect(() => {
    getEpisode();
  }, []);
  const getEpisode = async () => {
    const response = await handleGetEpisodes(url);
    setEpisode(response);
  };
  return (
    <View style={Styles.episodeContainer}>
      <Text>Nombre: {episode.name}</Text>
      <Text>Fecha de emision: {episode.air_date}</Text>
    </View>
  );
}
