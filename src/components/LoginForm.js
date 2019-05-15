import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text}>CPF</Text>
        <TextInput style={styles.textInput} keyboardType='phone-pad' />
        <Text style={styles.text}>Senha</Text>
        <TextInput style={styles.textInput} secureTextEntry />
        <TouchableHighlight>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    height: 304,

  },
  text: {
    marginBottom: 6,
    height: 24,
    fontSize: 16,
    color: '#212121',
  },
  textInput: {
    marginBottom: 12,
    height: 54,
    backgroundColor: '#21212110',
    paddingLeft: 8,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1d72b6',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 19,
  },
});
