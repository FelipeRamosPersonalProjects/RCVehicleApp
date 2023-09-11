import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import {Socket} from 'socket.io-client';

import localStyles from './Vehicle.style';
import {changeSteeringWheel, changeAcceleration} from './Vehicle.scripts';

interface VehicleProps {
  socket: Socket;
}

export default function Vehicle({socket}: VehicleProps): JSX.Element {
  const [steering, setSteering] = useState(0);
  const [acceleration, setAcceleration] = useState(0);

  useEffect(() => {
    console.log('Steering Wheel: ', steering);
    console.log('Acceleration: ', acceleration);
  }, [steering, acceleration]);

  useEffect(() => {
    changeSteeringWheel(socket, steering);
  }, [socket, steering]);

  useEffect(() => {
    changeAcceleration(socket, acceleration);
  }, [socket, acceleration]);

  return (
    <View style={localStyles.wrapperCtrls}>
      <Slider
        value={steering}
        minimumValue={-100}
        maximumValue={100}
        startFromZero={true}
        containerStyle={{
          ...localStyles.sliderContainer,
          ...localStyles.steeringCtrl,
        }}
        thumbStyle={localStyles.sliderThumb}
        onValueChange={value => setSteering(Number(value))}
        onSlidingComplete={() => setSteering(0)}
      />

      <Slider
        value={acceleration}
        vertical={true}
        minimumValue={0}
        maximumValue={100}
        containerStyle={{
          ...localStyles.sliderContainer,
          ...localStyles.accelerationCtrl,
        }}
        thumbStyle={localStyles.sliderThumb}
        onValueChange={value => setAcceleration(Number(value))}
      />
    </View>
  );
}
