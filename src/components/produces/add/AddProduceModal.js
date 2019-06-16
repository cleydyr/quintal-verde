import React from 'react';

import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Picker,
	Image,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { connect } from "react-redux";

import {MaterialIcons} from '@expo/vector-icons';

import {
	BLACK_ALPHA,
	LABEL_TEXT,
	TEXT_INPUT_BG,
	PICKER_BG,
	BUTTON_MAIN_ACTIVE,
	BUTTON_SECONDARY,
	IMAGE_PICKER_ICON,
} from '../../../util/Colors';

import { toggleModalVisible, addProduce } from '../../../actions';

import AppModal from '../../AppModal';

import {
	ImagePicker,
	ImageManipulator,
} from 'expo';

import uuidv1 from 'uuid/v1';

class AddProduceModal extends React.Component {
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
		const {addProduce, onRequestClose} = this.props;

		const {
			name,
			price,
			unit,
			imageData,
		} =	this.state;

		addProduce({produceId: uuidv1(), name, price, unit, imageData});

		onRequestClose();
	}

	pickImage = async () => {
		const options = {
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
		}

		const {cancelled, uri} = await ImagePicker.launchImageLibraryAsync(options);

		if (!cancelled) {
			const actions = [
				{
					resize: {
						width: 116,
						height: 116,
					},
				},
			];

			const saveOptions = {
				base64: true,
			};

			const {base64} = await ImageManipulator.manipulateAsync(uri, actions, saveOptions);

			this.setState({
				imageData: `data:image/jpeg;base64,${base64}`,
			});
		}
	}

	render() {
		const {
			visible,
			onRequestClose,
		} = this.props;

		const {
			name,
			price,
			unit,
			imageData,
		} =	this.state;

		return (
			<AppModal visible={visible} onRequestClose={onRequestClose} >
				<Text style={styles.headline6}>Editar produto</Text>
				<View style={styles.body}>
					<TouchableOpacity style={styles.imageContainer} onPress={this.pickImage}>
					{
						imageData ?
							<Image
								source={{uri: imageData}}
								style={styles.image}
							/>
						:
							<View style={styles.image} >
								<MaterialIcons name="add-a-photo" size={37} color={IMAGE_PICKER_ICON} />
							</View>
					}
					</TouchableOpacity>
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
			</AppModal>
		);
	}
}

const styles = StyleSheet.create({
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
		backgroundColor: TEXT_INPUT_BG,
		alignItems: 'center',
		justifyContent: 'center',
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
		onRequestClose: () => dispatch(toggleModalVisible()),
		addProduce: produce => dispatch(addProduce(produce)),
	}
}

const mapStateToProps = (state, ownProps) => {
	const {isEditProduceModalVisible} = state;

	return {
		visible: isEditProduceModalVisible,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduceModal);