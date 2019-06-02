import React from 'react';

import {
	StyleSheet,
	TouchableHighlight,
	View,
	Text,
	TextInput,
} from 'react-native';

import {
	BUTTON_MAIN_ACTIVE,
	LABEL_TEXT,
	TEXT_INPUT_BG,
	ERROR_MAIN,
} from '../util/Colors';

export default class LoginForm extends React.Component {
	state = {
		submitting: false,
		cpf: '',
		password: '',
		missingCPF: false,
		missingPassword: false,
	}

	onSubmitForm = async () => {
		const {cpf, password} = this.state;

		if (password === '') {
			this.setState({
				missingPassword: true,
			});

			hasMissingField = true;
		}

		if (cpf === '') {
			this.setState({
				missingCPF: true,
			});
		}

		if (cpf === '' || password === '') {
			return;
		}

		this.setState({
			submitting: true,
		});

		const success = await this.props.onSubmitForm({
			cpf,
			password,
		});

		success || this.setState({
			submitting: false,
		});
	}

	handlePasswordTextInputChange = password => {
		this.setState({
			password,
			missingPassword: false,
		});
	}

	handleCPFTextInputChange = cpf => {
		this.setState({
			cpf,
			missingCPF: false,
		});
	}

	render() {
		const {cpf, password, submitting, missingCPF, missingPassword} = this.state;
		const ErrorMessageElement = () => <Text style={styles.textError}>É obrigatório preencher este campo.</Text>;

		return (
			<View style={styles.container} pointerEvents={submitting ? 'none' : 'auto'}>
				<Text style={styles.text}>CPF</Text>
				<TextInput onChangeText={this.handleCPFTextInputChange} value={cpf} style={[styles.textInput, missingCPF && styles.textInputError]} keyboardType='phone-pad' />
				{missingCPF && <ErrorMessageElement/>}
				<Text style={styles.text}>Senha</Text>
				<TextInput onChangeText={this.handlePasswordTextInputChange} value={password} style={[styles.textInput, missingPassword && styles.textInputError]} secureTextEntry />
				{missingPassword && <ErrorMessageElement/>}
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
		marginTop: 12,
		marginBottom: 6,
		height: 24,
		fontSize: 16,
		color: LABEL_TEXT,
	},
	textError: {
		color: ERROR_MAIN,
		fontSize: 16,
		lineHeight: 24,
		letterSpacing: 0.11,
		fontFamily: 'Roboto',
	},
	textInput: {
		height: 54,
		backgroundColor: TEXT_INPUT_BG,
		paddingLeft: 8,
		fontSize: 16,
	},
	textInputError: {
		borderColor: ERROR_MAIN,
		borderWidth: 2,
	},
	loginButtonActive: {
		backgroundColor: BUTTON_MAIN_ACTIVE,
		height: 54,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 24,
	},
	loginButtonText: {
		color: 'white',
		fontSize: 19,
	},
});
