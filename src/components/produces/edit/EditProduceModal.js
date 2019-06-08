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

import { BLACK_ALPHA, LABEL_TEXT, TEXT_INPUT_BG } from '../../../util/Colors';

import { toggleEditProduceModalVisible } from '../../../actions';

class EditProduceModal extends React.Component {
	render() {
		const {
			visible,
			imageData,
			onRequestClose,
		} = this.props;

		return (
			<Modal style={styles.container} visible={visible} onRequestClose={onRequestClose}>
				<Text style={styles.headline6}>Editar produto</Text>
				<View styles={styles.imageContainer}>
					<Image source={
								{
									uri: imageData,
								}
							}
						style={styles.image}
						/>
				</View>
				<Text style={styles.fieldLabel}>Nome</Text>
				<TextInput style={styles.textInput}/>
				<Text style={styles.fieldLabel}>Preço</Text>
				<View>
					<TextInput style={styles.textInput}/>
					<Picker />
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: 328,
		height: 486,
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		paddingTop: 23,
	},
	headline6: {
		height: 24,
		fontFamily: 'Roboto_medium',
		fontSize: 20,
		color: BLACK_ALPHA,
		letterSpacing: 0.25,
	},
	imageContainer: {
		marginTop: 25,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 6,
	},
	image: {
		width: 116,
		height: 116,
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
		fontSize: 16,
		opacity: 0.1,
		paddingLeft: 12,
		paddingRight: 12,
		paddingTop: 12,
		paddingBottom: 12,
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