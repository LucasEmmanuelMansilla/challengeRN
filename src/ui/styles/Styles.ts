import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  loginTitle: {
    marginTop: height * 0.1,
  },
  bodyContainer: {
    flex: 4,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  inputsContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  inputs: {
    borderBottomColor: 'rgba(0,0,0,0.5)',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#141c3c',
    height: 50,
    width: '60%',
    borderRadius: 20,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  bodyModal: {
    backgroundColor: 'white',
    height: '20%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonModalContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    marginVertical: height * 0.02,
  },
  landingContainer: {
    flex: 1,
  },
  flatList: {
    marginTop: '5%',
  },
  image: {
    width: '70%',
    height: height * 0.2,
    resizeMode: 'cover',
  },
  infoContainer: {
    marginBottom: height * 0.05,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    paddingVertical: height * 0.03,
    marginHorizontal: 20,
  },
  bodyCharacterContainer: {
    marginTop: height * 0.03,
    flex: 1,
    alignItems: 'center',
  },
  imageCharacter: {
    width: '70%',
    height: height * 0.3,
    resizeMode: 'contain',
    marginVertical: height * 0.05,
  },
  textDecoration: {
    textDecorationLine: 'underline',
  },
  episodeContainer: {
    marginVertical: height * 0.03,
    borderWidth: 1,
    borderRadius: 10,
    padding: height * 0.02,
    borderColor: 'rgba(0,0,0,0.5)',
  },
  viewMoreLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderWidth: 1,
    padding: height * 0.02,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    marginVertical: height * 0.03,
    maxWidth: width * 0.8,
    minWidth: width * 0.8,
  },
  viewMoreButton: {
    marginLeft: width * 0.05,
    backgroundColor: '#141c3c',
    height: height * 0.05,
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
    borderRadius: 3,
  },
  viewMoreText: {
    color: '#FFF',
  },
  locationContainer: {
    paddingHorizontal: 20,
    marginVertical: height * 0.05,
    marginBottom: height * 0.09,
    alignItems: 'center',
  },
  iconLogout: {
    marginRight: width * 0.05,
    backgroundColor: '#CE243E',

    paddingHorizontal: width * 0.05,
    borderRadius: 13,
  },
  buttonNextPageContainer: {
    flexDirection: 'row',
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonNextPage: {
    backgroundColor: '#141c3c',
    borderRadius: 10,
  },
  buttonNextPageDisabled: {
    backgroundColor: 'rgba(20,28,80,0.5)',
    borderRadius: 10,
  },
  buttonNextPageText: {
    color: '#FFF',
    fontSize: 40,
  },
  welcomeTextContainer: {
    marginLeft: width * 0.05,
    backgroundColor: '#141c3c',
    borderRadius: 10,
    paddingHorizontal: width * 0.05,
  },
});
