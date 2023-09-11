import React, {useState} from 'react';
import './src/styles/theme.style';
import {io} from 'socket.io-client';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Home from './src/activities/Home';
import Vehicle from './src/activities/Vehicle/Vehicle';
import styles from './src/styles/main.style';

// Colors
const {primaryDark} = Object(global.ThemeCore.colors);

export default function App(): JSX.Element {
  const [view, setView] = useState('initial');
  const [socket, setSocket] = useState(io);

  return (
    <SafeAreaView style={styles.fullscreen}>
      <StatusBar backgroundColor={primaryDark} />

      <View style={styles.mainContainer}>
        {view === 'vehicle-1' ? (
          <Vehicle socket={socket} />
        ) : (
          <Home setView={setView} socket={socket} setSocket={setSocket} />
        )}
      </View>
    </SafeAreaView>
  );
}
