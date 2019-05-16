import React from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	Alert
} from 'react-native';

import LogoView from './LogoView';
import LoginForm from './LoginForm';


export default class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <LogoView/>
        <LoginForm/>
      </KeyboardAvoidingView>
		);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#fff',
  },
});