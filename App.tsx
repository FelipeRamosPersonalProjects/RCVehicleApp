import React, {useState} from 'react';
import {io} from 'socket.io-client';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Home from './src/activities/Home';
import Vehicle from './src/activities/Vehicle/Vehicle';
import styles from './src/styles/main.style';

export default function App(): JSX.Element {
  const [view, setView] = useState('initial');
  const [socket, setSocket] = useState(io);

  return (
    <SafeAreaView style={styles.fullscreen}>
      <StatusBar backgroundColor="#191F24" />

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
