import React from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	Alert
} from 'react-native';

import LogoView from './LogoView';
import LoginForm from './LoginForm';

async function dummyDoSomething() {
	return new Promise(resolve => {
		setTimeout(() => {
			Alert.alert('Sucesso!');
			resolve();
		}, 2000
		);
	});
}

export default class LoginScreen extends React.Component {
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding'>
				<LogoView/>
				<LoginForm onSubmitForm={dummyDoSomething}/>
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