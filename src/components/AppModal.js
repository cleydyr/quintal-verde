import React from 'react';

import {
	View,
	Modal,
	StyleSheet,
	KeyboardAvoidingView,
} from 'react-native';

import {
	MASK,
} from '../util/Colors';

export default AppModal = ({visible, onRequestClose, children}) => (
	<Modal transparent={true} animationType='fade' visible={visible} onRequestClose={onRequestClose}>
		<KeyboardAvoidingView style={styles.modal} behavior='padding'>
			<View style={styles.container}>
				{children}
			</View>
		</KeyboardAvoidingView>
	</Modal>
);

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
});