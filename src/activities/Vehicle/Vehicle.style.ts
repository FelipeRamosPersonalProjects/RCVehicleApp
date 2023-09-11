import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapperCtrls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  sliderContainer: {
    height: 50,
  },
  sliderThumb: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#B0FE76',
  },
  steeringCtrl: {
    width: 300,
    marginLeft: 30,
  },
  accelerationCtrl: {
    width: 300,
  },
});
