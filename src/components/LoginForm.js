import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginForm extends React.Component {
  state = {
    submitting: false,
  }

  onSubmitForm = async () => {
    this.setState({
      submitting: true,
    });

    await this.props.onSubmitForm();

    this.setState({
      submitting: false,
    });
  }

  render() {
    const {submitting} = this.state;

    return (
      <View style={styles.container} pointerEvents={submitting ? 'none' : 'auto'}>
        <Text style={styles.text}>CPF</Text>
        <TextInput style={styles.textInput} keyboardType='phone-pad' />
        <Text style={styles.text}>Senha</Text>
        <TextInput style={styles.textInput} secureTextEntry />
        <TouchableHighlight onPress={this.onSubmitForm}>
          <View style={[styles.loginButtonActive, submitting && {opacity: 0.4}]}>
            <Text style={styles.loginButtonText}>{submitting ? 'Entrando...' : 'Entrar'}</Text>
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
  loginButtonActive: {
    backgroundColor: '#1d72b6',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonActive: {
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
