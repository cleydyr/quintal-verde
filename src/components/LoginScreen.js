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
				resolve(true);
			}
			else {
				Alert.alert(
					'Problema ao entrar',
					'CPF ou senha estão incorretos, por favor, verifique-os e tente novamente.',
					[
						{text: 'Tentar novamente'},
					],
				);
				resolve(false);
			}
		}, 2000
		);
	});
}

export default class LoginScreen extends React.Component {

	handleSubmitForm = async ({cpf, password}) => {
		const {onAuthSuccess} = this.props;
		const success = await dummyDoSomething({cpf, password});
		success && onAuthSuccess();
		return success;
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding'>
				<LogoView/>
				<LoginForm onSubmitForm={this.handleSubmitForm}/>
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