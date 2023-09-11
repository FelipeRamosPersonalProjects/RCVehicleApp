import React, {useState, useEffect} from 'react';
import {io} from 'socket.io-client';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, TextInput} from 'react-native-paper';

import styles from '../../styles/main.style';
import {connectVehicle} from './Home.scripts';
import Spinner from '../../components/Spinner/Spinner';
import {SocketProps} from '../../interfaces/main.interface';

const {primary, tertiary} = Object(global.ThemeCore.colors);

export default function Home({
  setView,
  socket,
  setSocket,
}: SocketProps): JSX.Element {
  const [spinner, setSpinner] = useState(false);
  const [serverIP, setServerIP] = useState('');

  useEffect((): void => {
    const pastServerIPLoader = AsyncStorage.getItem('serverIP');

    pastServerIPLoader
      .then(pastServerIP => {
        if (pastServerIP) {
          setServerIP(pastServerIP);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect((): void => {
    AsyncStorage.setItem('serverIP', serverIP);
  }, [serverIP]);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>RC Vehicle</Text>
      <Text style={styles.sectionDescription}>Choose a vehicle to connect</Text>

      <TextInput
        label="Vehicle IP"
        style={styles.inputText}
        value={serverIP}
        onChangeText={text => setServerIP(text)}
        underlineColor={tertiary}
      />
      <Button
        mode="contained"
        textColor={primary}
        style={styles.button}
        onPress={() => {
          setSpinner(true);

          connectVehicle(serverIP, 'otter-v1')
            .then(res => {
              if (res.success) {
                setSocket(io(`http://${serverIP}:5555`));
                setView('vehicle-1');
                setSpinner(false);

                socket.on('connect', () => {
                  console.log('Vehicle socket connection opened!');
                });

                socket.on('disconnect', () => {
                  console.log('Vehicle socket connection closed!');
                  setView('initial');
                });
              } else {
                console.error(
                  'An error occured when connecting via socket to the vehicle!',
                );

                throw res;
              }
            })
            .catch(err => {
              setSpinner(false);
              throw err;
            });
        }}>
        CONNECT TO VEHICLE
      </Button>

      <Spinner visible={spinner} />
    </View>
  );
}
