import React from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	Alert,
} from 'react-native';

import LogoView from './LogoView';
import LoginForm from './LoginForm';

async function dummyDoSomething({cpf, password}) {
	return new Promise(resolve => {
		setTimeout(() => {
			if (cpf === '1234' && password === '1234') {
				Alert.alert('Sucesso!');
				
			}
			else {
				Alert.alert(
					'Problema ao entrar',
					'CPF ou senha estão incorretos, por favor, verifique-os e tente novamente.',
					[
						{text: 'Tentar novamente', onPress: () => console.log('Ask me later pressed')},
					],
				);
			}
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