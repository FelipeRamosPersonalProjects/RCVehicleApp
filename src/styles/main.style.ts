import {StyleSheet} from 'react-native';

const {primary, tertiary, text} = Object(global.ThemeCore.colors);

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
    backgroundColor: primary,
  },
  sectionContainer: {
    padding: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: text,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: text,
  },
  highlight: {
    fontWeight: '700',
  },
  inputText: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: tertiary,
    color: primary,
  },
});
