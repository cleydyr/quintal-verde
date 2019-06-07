import React from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	Alert,
} from 'react-native';

import LogoView from './LogoView';
import LoginForm from './LoginForm';
import {authenticate} from '../service-api/user-service';

export default class LoginScreen extends React.Component {

	handleSubmitForm = async ({cpf, password}) => {
		const {onAuthSuccess} = this.props;
		const success = await authenticate(cpf, password);
		if (success) {
			onAuthSuccess();
		}
		else {
			Alert.alert(
				'Problema ao entrar',
				'CPF ou senha estão incorretos, por favor, verifique-os e tente novamente.',
				[
					{text: 'Tentar novamente'},
				],
			);
		}

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