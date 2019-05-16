import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class LogoView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Entypo name="leaf" size={72} color="white" />
        <Text style={styles.text}>QUINTAL VERDE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15a453',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
