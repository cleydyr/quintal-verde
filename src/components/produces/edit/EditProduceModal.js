import React from 'react';

import {
	View,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Picker,
	Image,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { connect } from "react-redux";

import {
	BLACK_ALPHA,
	LABEL_TEXT,
	TEXT_INPUT_BG,
	PICKER_BG,
	MASK,
	BUTTON_MAIN_ACTIVE,
	BUTTON_SECONDARY,
} from '../../../util/Colors';

import { toggleEditProduceModalVisible, updateProduce } from '../../../actions';

class EditProduceModal extends React.Component {
	state = {}

	componentDidMount = () => {
		const {name, price, unit} = this.props;

		this.setState({
			name,
			price,
			unit,
		});
	}

	handleChange = property => value => {
		this.setState({
			[property]: value,
		});
	}

	handleSave = () => {
		const {produceId, updateProduce, onRequestClose} = this.props;
		const {
			name,
			price,
			unit,
		} =	this.state;

		updateProduce({produceId, name, price, unit});

		onRequestClose();
	}

	render() {
		const {
			visible,
			imageData,
			onRequestClose,
		} = this.props;

		const {
			name,
			price,
			unit,
		} =	this.state;

		return (
			<Modal transparent={true} animationType='fade' visible={visible} onRequestClose={onRequestClose}>
				<View style={styles.modal}>
					<View style={styles.container}>
						<Text style={styles.headline6}>Editar produto</Text>
						<View style={styles.body}>
							<View style={styles.imageContainer}>
								<Image
									source={{uri: imageData}}
									style={styles.image}
									/>
							</View>
							<Text style={styles.fieldLabel}>Nome</Text>
							<TextInput style={styles.textInput} value={name} onChangeText={this.handleChange('name')}/>
							<Text style={styles.fieldLabel}>Preço</Text>
							<View style={styles.horizontal}>
								<TextInputMask
										style={[styles.textInput, {width: 143}]}
										value={price/100.0}
										type="money"
										options={{
											precision: 2,
											separator: ',',
											unit: 'R$',
										}}
										onChangeText={(_, rawValue) => this.handleChange('price')(100*rawValue)}
										includeRawValueInChangeText
									/>
								<View style={styles.unitPicker}>
									<Picker selectedValue={unit} mode='dropdown' onValueChange={this.handleChange('unit')}>
										<Picker.Item label="unidade" value="unidade" />
										<Picker.Item label="kg" value="kg" />
									</Picker>
								</View>
							</View>
						</View>
						<View style={styles.buttonRow}>
							<TouchableOpacity style={styles.cancelButton} onPress={onRequestClose}>
								<Text style={styles.buttonText}>Cancelar</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.saveButton} onPress={this.handleSave}>
								<Text style={styles.buttonText}>Salvar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	modal: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: MASK,
	},
	container: {
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		paddingTop: 23,
		width: 328,
		height: 486,
		backgroundColor: 'white',
	},
	body: {
		marginTop: 25,
	},
	headline6: {
		height: 24,
		fontFamily: 'Roboto_medium',
		fontSize: 20,
		color: BLACK_ALPHA,
		letterSpacing: 0.25,
	},
	imageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 6,
	},
	image: {
		width: 116,
		height: 116,
		borderRadius: 4,
	},
	fieldLabel: {
		marginTop: 12,
		marginBottom: 6,
		height: 24,
		fontSize: 16,
		color: LABEL_TEXT,
		lineHeight: 24,
		letterSpacing: 0.11,
	},
	textInput: {
		height: 54,
		backgroundColor: TEXT_INPUT_BG,
		color: LABEL_TEXT,
		fontSize: 21,
		paddingLeft: 12,
		paddingRight: 12,
		paddingTop: 12,
		paddingBottom: 12,
		fontFamily: 'Roboto_medium',
		fontWeight: '400',
	},
	unitPicker: {
		width: 137,
		height: 54,
		paddingLeft: 18,
		backgroundColor: PICKER_BG,
	},
	pickerSelection: {
		color: LABEL_TEXT,
		fontFamily: 'Roboto_medium',
		fontSize: 21,
		lineHeight: 30,
		letterSpacing: 0.15,
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 25,
	},
	saveButton: {
		width: 128,
		height: 54,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
		backgroundColor: BUTTON_MAIN_ACTIVE,
	},
	cancelButton: {
		width: 128,
		height: 54,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
		backgroundColor: BUTTON_SECONDARY,
	},
	buttonText: {
		fontSize: 19,
		color: 'white',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		lineHeight: 30,
		letterSpacing: 0.14,
	}
});

const mapDispatchToProps = dispatch => {
	return {
		onRequestClose: () => dispatch(toggleEditProduceModalVisible()),
		updateProduce: produce => dispatch(updateProduce(produce)),
	}
}

const mapStateToProps = (state, ownProps) => {
	const {isEditProduceModalVisible} = state;

	return {
		visible: isEditProduceModalVisible,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduceModal);