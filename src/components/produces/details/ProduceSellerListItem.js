import React from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Separator from '../../Separator';

export default ({name, quantity, unit}) => (
	<View style={styles.container}>
		<Text style={styles.nameText}>{name}</Text>
		<Text style={styles.quantityText}>{quantity} {unit}(s)</Text>
		<Separator />
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: 344,
		height: 55,
		marginBottom: 11,
	},
	nameText: {
		height: 24,
		fontFamily: 'Roboto_medium',
		fontSize: 18,
		color: 'rgba(0, 0, 0, 222)',
		lineHeight: 24,
		letterSpacing: 0.15,

	},
	quantityText: {
		height: 18,
		fontFamily: 'Roboto',
		fontSize: 15,
		color: '#212121',
		lineHeight: 18,
		opacity: 0.5,
		marginBottom: 13,
	},
});