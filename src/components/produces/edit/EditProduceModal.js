import React from 'react';

import {
	View,
	Modal,
	Text,
	TextInput,
	TouchableNativeFeedback,
	StyleSheet,
	Picker,
	Image,
} from 'react-native';

import { connect } from "react-redux";

import {
	BLACK_ALPHA,
	LABEL_TEXT,
	TEXT_INPUT_BG,
	PICKER_BG,
	MASK,
} from '../../../util/Colors';

import { toggleEditProduceModalVisible } from '../../../actions';

class EditProduceModal extends React.Component {
	render() {
		const {
			visible,
			imageData,
			onRequestClose,
			name,
			price,
			unit,
		} = this.props;

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
							<TextInput style={styles.textInput} value={name}/>
							<Text style={styles.fieldLabel}>Preço</Text>
							<View style={styles.horizontal}>
								<TextInput style={[styles.textInput, {width: 143}]} value={`${price/100.0}`}/>
								<View style={styles.unitPicker}>
									<Picker selectedValue="kg" mode='dropdown' >
										<Picker.Item label="unidade" value="unidade" />
										<Picker.Item label="kg" value="kg" />
									</Picker>
								</View>
							</View>
							<View>

							</View>
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
	},
});

const mapDispatchToProps = dispatch => {
	return {
		onRequestClose: () => dispatch(toggleEditProduceModalVisible())
	}
}

const mapStateToProps = (state, ownProps) => {
	const {isEditProduceModalVisible} = state;
	return {
		visible: isEditProduceModalVisible,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduceModal);