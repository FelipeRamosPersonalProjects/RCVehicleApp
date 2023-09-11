import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fullscreen: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#2C363F',
  },
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  inputText: {
    marginBottom: 10,
  },
});
